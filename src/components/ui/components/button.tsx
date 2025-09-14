'use client';
import type { VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils';

import { buttonVariants } from '../variants/button';

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>
& VariantProps<typeof buttonVariants>;

export const Button = ({ ref, className, variant, size, asChild = false, ...props }: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

Button.displayName = 'Button';
