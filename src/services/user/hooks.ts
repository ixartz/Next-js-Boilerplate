import type { ApiError, User } from '@services/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userApi } from './api';

/**
 * React Query hooks for user operations
 */

// Query keys
export const userKeys = {
  all: ['user'] as const,
  profile: () => [...userKeys.all, 'profile'] as const,
};

/**
 * Hook to fetch current user profile
 */
export const useUserProfile = () => {
  return useQuery({
    queryKey: userKeys.profile(),
    queryFn: async () => {
      const response = await userApi.getProfile();
      if (response.error === '00') {
        return response.data.user;
      } else {
        throw new Error(response.message || 'Failed to fetch user profile');
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error: any) => {
      // Don't retry on authentication errors
      if (error?.response?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

/**
 * Hook to update user profile
 */
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.updateProfile,
    onSuccess: (data) => {
      if (data.error === '00') {
        // Update the user profile in cache
        queryClient.setQueryData(userKeys.profile(), data.data.user);

        // Also update the user data in auth cache if it exists
        queryClient.setQueryData(['user'], data.data.user);
      } else {
        throw new Error(data.message || 'Failed to update profile');
      }
    },
    onError: (error: ApiError) => {
      console.error('Update profile error:', error);
    },
  });
};

/**
 * Hook to change user password
 */
export const useChangePassword = () => {
  return useMutation({
    mutationFn: userApi.changePassword,
    onSuccess: (data) => {
      if (data.error !== '00') {
        throw new Error(data.message || 'Failed to change password');
      }
    },
    onError: (error: ApiError) => {
      console.error('Change password error:', error);
    },
  });
};

/**
 * Hook to get cached user data from auth or profile
 */
export const useCurrentUser = (): User | null => {
  const { data: profileUser } = useUserProfile();

  // Try to get user from auth cache first, then from profile
  const authUser = useQueryClient().getQueryData<User>(['user']);

  return authUser || profileUser || null;
};
