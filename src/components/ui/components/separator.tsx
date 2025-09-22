'use client';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/utils';

export const Separator = ({ ref, className, orientation = 'horizontal', decorative = true, ...props }: React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof SeparatorPrimitive.Root> | null> }) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      className,
    )}
    {...props}
  />
);

Separator.displayName = SeparatorPrimitive.Root.displayName;
