import { z } from 'zod';

export const LoginValidation = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters long'),
});

export type LoginFormData = z.infer<typeof LoginValidation>;

export const RegisterValidation = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password'),
  fullname: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters long'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords don\'t match',
  path: ['confirmPassword'],
});

export type RegisterFormData = z.infer<typeof RegisterValidation>;

export const ForgotPasswordValidation = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
});

export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordValidation>;

export const ResetPasswordValidation = z.object({
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password'),
  token: z
    .string()
    .min(1, 'Reset token is required'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords don\'t match',
  path: ['confirmPassword'],
});

export type ResetPasswordFormData = z.infer<typeof ResetPasswordValidation>;
