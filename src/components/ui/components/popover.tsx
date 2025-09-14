'use client';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/utils';

export const Popover = PopoverPrimitive.Root;

export const PopoverArrow = PopoverPrimitive.Arrow;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = ({ ref, className, align = 'center', sideOffset = 6, ...props }: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof PopoverPrimitive.Content> | null> }) => (
  <PopoverPrimitive.PopoverPortal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 rounded border bg-background p-4 shadow-sm outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.PopoverPortal>
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;
