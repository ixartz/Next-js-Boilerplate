'use client';
import type { VariantProps } from 'class-variance-authority';
import { X } from '@phosphor-icons/react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cn } from '@/utils';

import { toastVariants } from '../variants/toast';

export const ToastProvider = ToastPrimitives.Provider;

export const ToastViewport = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & { ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Viewport> | null> }) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
);

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

export const Toast = ({ ref, className, variant, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants> & { ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Root> | null> }) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
};

Toast.displayName = ToastPrimitives.Root.displayName;

export const ToastAction = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> & { ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Action> | null> }) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-primary disabled:pointer-events-none disabled:opacity-50',
      'group/primary:border-border/40 group-hover/primary:border-primary/30 group-hover/primary:bg-primary group-hover/primary:text-primary-foreground group-focus/primary:ring-primary',
      'group/secondary:border-border/40 group-hover/secondary:border-secondary/30 group-hover/secondary:bg-secondary group-hover/secondary:text-secondary-foreground group-focus/secondary:ring-secondary',
      'group/error:border-border/40 group-hover/error:border-error/30 group-hover/error:bg-error group-hover/error:text-error-foreground group-focus/error:ring-error',
      'group/warning:border-border/40 group-hover/warning:border-warning/30 group-hover/warning:bg-warning group-hover/warning:text-warning-foreground group-focus/warning:ring-warning',
      'group/info:border-border/40 group-hover/info:border-info/30 group-hover/info:bg-info group-hover/info:text-info-foreground group-focus/info:ring-info',
      'group/success:border-border/40 group-hover/success:border-success/30 group-hover/success:bg-success group-hover/success:text-success-foreground group-focus/success:ring-success',
      className,
    )}
    {...props}
  />
);

ToastAction.displayName = ToastPrimitives.Action.displayName;

export const ToastClose = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> & { ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Close> | null> }) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100',
      'group/primary:text-primary group-hover/primary:text-primary-foreground group-focus/primary:ring-primary group-focus/primary:ring-offset-primary',
      'group/secondary:text-secondary group-hover/secondary:text-secondary-foreground group-focus/secondary:ring-secondary group-focus/secondary:ring-offset-secondary',
      'group/error:text-error group-hover/error:text-error-foreground group-focus/error:ring-error group-focus/error:ring-offset-error',
      'group/warning:text-warning group-hover/warning:text-warning-foreground group-focus/warning:ring-warning group-focus/warning:ring-offset-warning',
      'group/info:text-info group-hover/info:text-info-foreground group-focus/info:ring-info group-focus/info:ring-offset-info',
      'group/success:text-success group-hover/success:text-success-foreground group-focus/success:ring-success group-focus/success:ring-offset-success',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="size-4" />
  </ToastPrimitives.Close>
);

ToastClose.displayName = ToastPrimitives.Close.displayName;

export const ToastTitle = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> & { ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Title> | null> }) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold [&+div]:text-xs', className)}
    {...props}
  />
);

ToastTitle.displayName = ToastPrimitives.Title.displayName;

export const ToastDescription = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> & { ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Description> | null> }) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('line-clamp-2 text-sm opacity-90', className)}
    {...props}
  />
);

ToastDescription.displayName = ToastPrimitives.Description.displayName;

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;
