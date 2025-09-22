/**
 * Common API types and interfaces
 */

// Generic API response wrapper
export type ApiResponse<T = any> = {
  error: string;
  message: string;
  data: T;
};

// User entity
export type User = {
  id: string;
  email: string;
  fullname: string;
  picture: string | null;
  user_address: string | null;
  locale: string;
  status: number;
  provider: string;
  two_factor_enabled: boolean;
  created_at: string;
  updated_at: string;
};

// Authentication response types
export type LoginResponse = {
  user: User;
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  refresh_expires_in: number;
};

export type RefreshResponse = {
  user: User;
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type RegisterResponse = {
  user: User;
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  refresh_expires_in: number;
};

// Request types
export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
  fullname: string;
};

export type ForgotPasswordRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
};

// Error types
export type ApiError = {
  error: string;
  message: string;
  details?: any;
};
