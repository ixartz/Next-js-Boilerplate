import type { ApiResponse, RefreshResponse } from '@services/types';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL, API_ENDPOINTS, REQUEST_TIMEOUT } from '@constants/api';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { tokenStorage } from './cookies';

// Re-export tokenStorage for backward compatibility
export { tokenStorage } from './cookies';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Flag to prevent multiple refresh attempts
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token!);
    }
  });

  failedQueue = [];
};

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: unknown) => {
    const originalRequest = (error as any).config;

    // If error is 401 and we haven't already tried to refresh
    if ((error as any).response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = tokenStorage.getRefreshToken();

      if (!refreshToken) {
        // No refresh token, redirect to login
        tokenStorage.clearTokens();
        if (typeof window !== 'undefined') {
          // window.location.href = '/auth/login';
        }
        return Promise.reject(error);
      }

      try {
        const response = await axios.post<ApiResponse<RefreshResponse>>(
          `${API_BASE_URL}${API_ENDPOINTS.AUTH.REFRESH}`,
          { refresh_token: refreshToken },
        );

        const { access_token } = response.data.data;
        tokenStorage.setToken(access_token);

        // Update the authorization header for the original request
        originalRequest.headers.Authorization = `Bearer ${access_token}`;

        processQueue(null, access_token);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        tokenStorage.clearTokens();

        if (typeof window !== 'undefined') {
          // window.location.href = '/auth/login';
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    toast({
      title: 'Please try again',
      description: (error as any).response?.data?.message,
      variant: 'error',
    });
    return Promise.reject(error);
  },
);

export default axiosInstance;
export { axiosInstance as axios };
