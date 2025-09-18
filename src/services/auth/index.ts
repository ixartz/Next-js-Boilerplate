/**
 * Authentication service exports
 */

// Legacy AuthService class for backward compatibility
import { tokenStorage } from '@/libs/cookies';

export * from './api';
export * from './hooks';

export class AuthService {
  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): boolean {
    return !!tokenStorage.getToken();
  }

  /**
   * Get current access token
   */
  static getToken(): string | null {
    return tokenStorage.getToken();
  }

  /**
   * Logout user (clears tokens and redirects)
   */
  static logout(): void {
    tokenStorage.clearTokens();
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/login';
    }
  }
}
