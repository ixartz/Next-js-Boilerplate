'use client';
import type { VariantProps } from 'class-variance-authority';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn } from '@/utils';

import { toggleVariants } from '../variants/toggle';

export const ToggleGroup = ToggleGroupPrimitive.Root;

export const ToggleGroupItem = ({ ref, className, variant, size, ...props }: React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
  & VariantProps<typeof toggleVariants> & { ref?: React.RefObject<React.ElementRef<typeof ToggleGroupPrimitive.Item> | null> }) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      toggleVariants({ variant, size, className }),
      'rounded-none first:rounded-l last:rounded-r',
    )}
    {...props}
  />
);
