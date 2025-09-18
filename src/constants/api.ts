/**
 * API Configuration Constants
 */

// Base API URL - defaults to localhost for development
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication endpoints
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REFRESH: '/api/v1/auth/refresh',
    LOGOUT: '/api/v1/auth/logout',
    REGISTER: '/api/v1/auth/register',
    FORGOT_PASSWORD: '/api/v1/auth/forgot-password',
    RESET_PASSWORD: '/api/v1/auth/reset-password',
    VERIFY_EMAIL: '/api/v1/auth/verify-email',
  },

  // User endpoints
  USER: {
    PROFILE: '/api/v1/auth/profile',
    UPDATE_PROFILE: '/api/v1/user/profile',
    CHANGE_PASSWORD: '/api/v1/user/change-password',
  },

  // App-specific endpoints (add your own here)
  APPS: {
    ANALYZE: '/api/v1/apps/analyze',
    HISTORY: '/api/v1/apps/history',
    REFERENCES: '/api/v1/apps/references',
  },
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Request timeout in milliseconds
export const REQUEST_TIMEOUT = 10000; // 10 seconds
