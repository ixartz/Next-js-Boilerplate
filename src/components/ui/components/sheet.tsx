'use client';
import type { VariantProps } from 'class-variance-authority';
import { X } from '@phosphor-icons/react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils';

import { sheetVariants } from '../variants/sheet';

export const Sheet = SheetPrimitive.Root;

export const SheetTrigger = SheetPrimitive.Trigger;

export const SheetClose = SheetPrimitive.Close;

export const SheetPortal = (props: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal {...props} />
);

SheetPortal.displayName = SheetPrimitive.Portal.displayName;

export const SheetOverlay = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & { ref?: React.RefObject<React.ElementRef<typeof SheetPrimitive.Overlay> | null> }) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
);

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

export type SheetContentProps = {
  showClose?: boolean;
} & React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
& VariantProps<typeof sheetVariants>;

export const SheetContent = ({ ref, side = 'right', className, children, showClose = true, ...props }: SheetContentProps & { ref?: React.RefObject<React.ElementRef<typeof SheetPrimitive.Content> | null> }) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      {children}

      {showClose && (
        <SheetPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      )}
    </SheetPrimitive.Content>
  </SheetPortal>
);

SheetContent.displayName = SheetPrimitive.Content.displayName;

export const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);

SheetHeader.displayName = 'SheetHeader';

export const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);

SheetFooter.displayName = 'SheetFooter';

export const SheetTitle = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> & { ref?: React.RefObject<React.ElementRef<typeof SheetPrimitive.Title> | null> }) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-base font-medium text-foreground', className)}
    {...props}
  />
);

SheetTitle.displayName = SheetPrimitive.Title.displayName;

export const SheetDescription = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> & { ref?: React.RefObject<React.ElementRef<typeof SheetPrimitive.Description> | null> }) => (
  <SheetPrimitive.Description ref={ref} className={cn('opacity-60', className)} {...props} />
);

SheetDescription.displayName = SheetPrimitive.Description.displayName;
