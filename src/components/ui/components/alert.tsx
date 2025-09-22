'use client';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

import { alertVariants } from '../variants/alert';

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export const Alert = ({ ref, className, variant, ...props }: AlertProps & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
);

Alert.displayName = 'Alert';

export const AlertTitle = ({ ref, className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) => (
  <h5 ref={ref} className={cn('font-medium tracking-tight', className)} {...props}>
    {children}
  </h5>
);

AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = ({ ref, className, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) => (
  <div ref={ref} className={cn('pt-0.5 leading-normal', className)} {...props} />
);

AlertDescription.displayName = 'AlertDescription';
