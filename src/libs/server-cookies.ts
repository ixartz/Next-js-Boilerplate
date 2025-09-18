import { cookies } from 'next/headers';

// Token storage utilities for server-side only
const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

/**
 * Server-side token storage utilities
 * Only use these in Server Components or API routes
 */
export const serverTokenStorage = {
  /**
   * Get access token from server-side cookies
   */
  async getToken(): Promise<string | null> {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get(TOKEN_KEY);
      return token?.value || null;
    } catch {
      return null;
    }
  },

  /**
   * Get refresh token from server-side cookies
   */
  async getRefreshToken(): Promise<string | null> {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get(REFRESH_TOKEN_KEY);
      return token?.value || null;
    } catch {
      return null;
    }
  },

  /**
   * Check if user is authenticated on server-side
   */
  async isAuthenticated(): Promise<boolean> {
    const token = await this.getToken();
    return !!token;
  },
};
