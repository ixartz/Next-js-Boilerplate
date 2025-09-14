'use client';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '@/utils';

export const ScrollArea = (
  { ref, type = 'scroll', orientation = 'vertical', hideScrollbar = false, allowOverflow = false, className, children, ...props }: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    allowOverflow?: boolean;
    hideScrollbar?: boolean;
    orientation?: 'vertical' | 'horizontal';
  } & { ref?: React.RefObject<React.ElementRef<typeof ScrollAreaPrimitive.Root> | null> },
) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    type={type}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className={cn('size-full rounded-[inherit]', allowOverflow && '!overflow-visible')}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation={orientation} className={cn(hideScrollbar && 'opacity-0')} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export const ScrollBar = ({ ref, className, orientation, ...props }: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & { ref?: React.RefObject<React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> | null> }) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
      orientation === 'horizontal' && 'h-2.5 border-t border-t-transparent p-px',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
);

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
