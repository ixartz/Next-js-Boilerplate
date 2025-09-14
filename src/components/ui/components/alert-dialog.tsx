'use client';
import type { ButtonProps } from './button';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '@/utils';
import { buttonVariants } from '../variants/button';

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogPortal = (props: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal {...props} />
);

AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;

export const AlertDialogOverlay = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Overlay> | null> }) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
);

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export const AlertDialogContent = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Content> | null> }) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded border bg-background p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:w-full',
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
);

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

export const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);

AlertDialogHeader.displayName = 'AlertDialogHeader';

export const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4', className)}
    {...props}
  />
);

AlertDialogFooter.displayName = 'AlertDialogFooter';

export const AlertDialogTitle = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Title> | null> }) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-base font-medium', className)}
    {...props}
  />
);

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

export const AlertDialogDescription = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Description> | null> }) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm leading-relaxed', className)}
    {...props}
  />
);

AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

type AlertDialogActionProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & {
  variant?: ButtonProps['variant'];
};

export const AlertDialogAction = ({ ref, className, variant, ...props }: AlertDialogActionProps & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Action> | null> }) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants({ variant }), className)}
    {...props}
  />
);

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

export const AlertDialogCancel = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & { ref?: React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Cancel> | null> }) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
    {...props}
  />
);

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
