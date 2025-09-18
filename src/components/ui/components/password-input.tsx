'use client';

import type { InputProps } from './input';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useState } from 'react';
import { cn } from '@/utils';
import { Button } from './button';
import { Input } from './input';

export type PasswordInputProps = Omit<InputProps, 'type'> & {
  showToggle?: boolean;
};

export const PasswordInput = ({
  className,
  showToggle = true,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!showToggle) {
    return <Input type="password" className={className} {...props} />;
  }

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn('pr-10', className)}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={togglePasswordVisibility}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword
          ? (
              <EyeSlash className="h-4 w-4 text-gray-400" />
            )
          : (
              <Eye className="h-4 w-4 text-gray-400" />
            )}
      </Button>
    </div>
  );
};

PasswordInput.displayName = 'PasswordInput';
