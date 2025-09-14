'use client';
import { cn } from '@/utils';

export type InputProps = {
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ref, className, type, hasError = false, ...props }: InputProps & { ref?: React.RefObject<HTMLInputElement | null> }) => (
  <input
    ref={ref}
    type={type}
    autoComplete="off"
    className={cn(
      'flex h-9 w-full rounded border border-border bg-transparent px-3 py-0.5 !text-sm ring-0 ring-offset-transparent transition-colors [appearance:textfield] placeholder:opacity-80 hover:bg-secondary/20 focus:border-primary focus:bg-secondary/20 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
      'file:border-0 file:bg-transparent file:pt-1 file:text-sm file:font-medium file:text-primary',
      hasError ? 'border-error' : 'border-border',
      className,
    )}
    {...props}
  />
);

Input.displayName = 'Input';
