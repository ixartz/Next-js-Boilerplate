'use client';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';

export const Tabs = TabsPrimitive.Root;

export const TabsList = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.List> | null> }) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded bg-secondary-accent px-0.5 text-foreground',
      className,
    )}
    {...props}
  />
);

TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.Trigger> | null> }) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className,
    )}
    {...props}
  />
);

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.Content> | null> }) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('mt-3 focus-visible:outline-none focus-visible:ring-0', className)}
    {...props}
  />
);

TabsContent.displayName = TabsPrimitive.Content.displayName;
