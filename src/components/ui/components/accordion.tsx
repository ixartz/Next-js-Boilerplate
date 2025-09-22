'use client';

import { CaretDown } from '@phosphor-icons/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/utils';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { ref?: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Item> | null> }) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
);

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { ref?: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Trigger> | null> }) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium leading-none outline-none transition-all hover:underline focus-visible:bg-secondary-accent [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <CaretDown className="size-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Content> | null> }) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm leading-relaxed transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className,
    )}
    {...props}
  >
    <div className="pt-0 pb-4">{children}</div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
