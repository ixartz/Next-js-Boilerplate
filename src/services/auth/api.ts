import type {
  ApiResponse,
  ForgotPasswordRequest,
  LoginCredentials,
  LoginResponse,
  RefreshResponse,
  RegisterCredentials,
  RegisterResponse,
  ResetPasswordRequest,
} from '@services/types';
import { API_ENDPOINTS } from '@constants/api';
import { axios } from '@/libs/axios';

/**
 * Authentication API functions
 * These are the raw API calls without React Query wrapper
 */

export const authApi = {
  /**
   * Login user with email and password
   */
  login: async (credentials: LoginCredentials): Promise<ApiResponse<LoginResponse>> => {
    const response = await axios.post<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials,
    );
    return response.data;
  },

  /**
   * Refresh access token using refresh token
   */
  refresh: async (refreshToken: string): Promise<ApiResponse<RefreshResponse>> => {
    const response = await axios.post<ApiResponse<RefreshResponse>>(
      API_ENDPOINTS.AUTH.REFRESH,
      { refresh_token: refreshToken },
    );
    return response.data;
  },

  /**
   * Register new user account
   */
  register: async (credentials: RegisterCredentials): Promise<ApiResponse<RegisterResponse>> => {
    try {
      const response = await axios.post<ApiResponse<RegisterResponse>>(
        API_ENDPOINTS.AUTH.REGISTER,
        credentials,
      );
      return response.data;
    } catch (error: any) {
      // If it's an API error response, return the structured error
      if (error.response?.data) {
        return error.response.data;
      }
      // Otherwise, throw the original error
      throw error;
    }
  },

  /**
   * Request password reset email
   */
  forgotPassword: async (request: ForgotPasswordRequest): Promise<ApiResponse<{ message: string }>> => {
    const response = await axios.post<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
      request,
    );
    return response.data;
  },

  /**
   * Reset password using token
   */
  resetPassword: async (request: ResetPasswordRequest): Promise<ApiResponse<{ message: string }>> => {
    const response = await axios.post<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.AUTH.RESET_PASSWORD,
      request,
    );
    return response.data;
  },

  /**
   * Logout user (if backend requires logout call)
   */
  logout: async (): Promise<ApiResponse<{ message: string }>> => {
    const response = await axios.post<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.AUTH.LOGOUT,
    );
    return response.data;
  },
};
