'use client';
import type { VariantProps } from 'class-variance-authority';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cn } from '@/utils';

import { toggleVariants } from '../variants/toggle';

export const Toggle = ({ ref, className, variant, size, ...props }: React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants> & { ref?: React.RefObject<React.ElementRef<typeof TogglePrimitive.Root> | null> }) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
);

Toggle.displayName = TogglePrimitive.Root.displayName;
