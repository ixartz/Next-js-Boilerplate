'use client';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/utils';

export const Slider = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof SliderPrimitive.Root> | null> }) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2.5 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
);

Slider.displayName = SliderPrimitive.Root.displayName;
