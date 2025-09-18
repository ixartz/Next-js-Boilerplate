import type { ApiError } from '@services/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { tokenStorage } from '@/libs/cookies';
import { authApi } from './api';

/**
 * React Query hooks for authentication
 */

/**
 * Login mutation hook
 */
export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      if (data.error === '00') {
        const { access_token, refresh_token, user } = data.data;

        // Store tokens in cookies
        tokenStorage.setToken(access_token);
        tokenStorage.setRefreshToken(refresh_token);

        // Store user data in query cache
        queryClient.setQueryData(['user'], user);

        // Redirect to dashboard/apps
        router.push('/apps');
        router.refresh();
      } else {
        throw new Error(data.message || 'Login failed');
      }
    },
    onError: (error: ApiError) => {
      console.error('Login error:', error);
    },
  });
};

/**
 * Register mutation hook
 */
export const useRegister = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      if (data.error === '00') {
        const { access_token, refresh_token, user } = data.data;

        // Store tokens in cookies
        tokenStorage.setToken(access_token);
        tokenStorage.setRefreshToken(refresh_token);

        // Store user data in query cache
        queryClient.setQueryData(['user'], user);

        // Redirect to dashboard/apps
        router.push('/apps');
        router.refresh();
      } else {
        // Throw error with the exact API message
        throw new Error(data.message || 'Registration failed');
      }
    },
    onError: (error: any) => {
      console.error('Registration error:', error);

      // If it's an axios error with response data, extract the message
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
    },
  });
};

/**
 * Forgot password mutation hook
 */
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: authApi.forgotPassword,
    onError: (error: ApiError) => {
      console.error('Forgot password error:', error);
    },
  });
};

/**
 * Reset password mutation hook
 */
export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: authApi.resetPassword,
    onSuccess: (data) => {
      if (data.error === '00') {
        // Redirect to login page after successful password reset
        router.push('/auth/login?message=password-reset-success');
      } else {
        throw new Error(data.message || 'Password reset failed');
      }
    },
    onError: (error: ApiError) => {
      console.error('Reset password error:', error);
    },
  });
};

/**
 * Logout mutation hook
 */
export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Clear tokens
      tokenStorage.clearTokens();

      // Clear all cached data
      queryClient.clear();

      // Redirect to login
      router.push('/auth/login');
    },
    onError: (error: ApiError) => {
      console.error('Logout error:', error);

      // Even if logout API fails, clear local data
      tokenStorage.clearTokens();
      queryClient.clear();
      router.push('/auth/login');
    },
  });
};

/**
 * Custom hook to check authentication status
 */
export const useAuth = () => {
  const token = tokenStorage.getToken();
  const isAuthenticated = !!token;

  return {
    isAuthenticated,
    token,
  };
};
