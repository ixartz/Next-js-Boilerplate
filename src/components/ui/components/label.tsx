'use client';
import type { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';

export const labelVariants = cva(
  'text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-60',
);

export const Label = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants> & { ref?: React.RefObject<React.ElementRef<typeof LabelPrimitive.Root> | null> }) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
);

Label.displayName = LabelPrimitive.Root.displayName;
