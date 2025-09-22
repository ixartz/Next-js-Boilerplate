import Cookies from 'js-cookie';

// Token storage utilities for client-side
const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

// Cookie options for security
const cookieOptions = {
  secure: process.env.NODE_ENV === 'production', // Only use HTTPS in production
  sameSite: 'strict' as const, // CSRF protection
  path: '/', // Available across the entire site
};

const accessTokenOptions = {
  ...cookieOptions,
  maxAge: 15 * 60, // 15 minutes in seconds
};

const refreshTokenOptions = {
  ...cookieOptions,
  maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
};

export const tokenStorage = {
  /**
   * Get access token from client-side cookies
   */
  getToken: (): string | null => {
    if (typeof window === 'undefined') {
      return null;
    }
    return Cookies.get(TOKEN_KEY) || null;
  },

  /**
   * Set access token in client-side cookies
   */
  setToken: (token: string): void => {
    if (typeof window !== 'undefined') {
      Cookies.set(TOKEN_KEY, token, {
        secure: cookieOptions.secure,
        sameSite: cookieOptions.sameSite,
        path: cookieOptions.path,
        expires: new Date(Date.now() + accessTokenOptions.maxAge * 1000),
      });
    }
  },

  /**
   * Get refresh token from client-side cookies
   */
  getRefreshToken: (): string | null => {
    if (typeof window === 'undefined') {
      return null;
    }
    return Cookies.get(REFRESH_TOKEN_KEY) || null;
  },

  /**
   * Set refresh token in client-side cookies
   */
  setRefreshToken: (token: string): void => {
    if (typeof window !== 'undefined') {
      Cookies.set(REFRESH_TOKEN_KEY, token, {
        secure: cookieOptions.secure,
        sameSite: cookieOptions.sameSite,
        path: cookieOptions.path,
        expires: new Date(Date.now() + refreshTokenOptions.maxAge * 1000),
      });
    }
  },

  /**
   * Clear all tokens from client-side cookies
   */
  clearTokens: (): void => {
    if (typeof window !== 'undefined') {
      Cookies.remove(TOKEN_KEY, { path: '/' });
      Cookies.remove(REFRESH_TOKEN_KEY, { path: '/' });
    }
  },
};
