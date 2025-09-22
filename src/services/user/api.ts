import type { ApiResponse, User } from '@services/types';
import { API_ENDPOINTS } from '@constants/api';
import { axios } from '@/libs/axios';

/**
 * User API functions
 * These are the raw API calls without React Query wrapper
 */

export const userApi = {
  /**
   * Get current user profile
   */
  getProfile: async (): Promise<ApiResponse<{ user: User }>> => {
    const response = await axios.get<ApiResponse<{ user: User }>>(
      API_ENDPOINTS.USER.PROFILE,
    );
    return response.data;
  },

  /**
   * Update user profile
   */
  updateProfile: async (profileData: Partial<User>): Promise<ApiResponse<{ user: User }>> => {
    const response = await axios.put<ApiResponse<{ user: User }>>(
      API_ENDPOINTS.USER.UPDATE_PROFILE,
      profileData,
    );
    return response.data;
  },

  /**
   * Change user password
   */
  changePassword: async (passwordData: {
    current_password: string;
    new_password: string;
  }): Promise<ApiResponse<{ message: string }>> => {
    const response = await axios.put<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.USER.CHANGE_PASSWORD,
      passwordData,
    );
    return response.data;
  },
};
