'use client';
import { cn } from '@/utils';

export const Card = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-3 rounded border bg-background p-6', className)}
    {...props}
  />
);

Card.displayName = 'Card';

export const CardHeader = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={ref} className={cn('flex flex-col space-y-1', className)} {...props} />
);

CardHeader.displayName = 'CardHeader';

export const CardTitle = ({ ref, className, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) => (
  <h3
    ref={ref}
    className={cn('font-semibold leading-normal tracking-tight', className)}
    {...props}
  >
    {props.children}
  </h3>
);

CardTitle.displayName = 'CardTitle';

export const CardDescription = ({ ref, className, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) => (
  <div
    ref={ref}
    className={cn('text-xs font-medium leading-relaxed opacity-80', className)}
    {...props}
  />
);

CardDescription.displayName = 'CardDescription';

export const CardContent = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => <div ref={ref} className={className} {...props} />;

CardContent.displayName = 'CardContent';

export const CardFooter = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
);

CardFooter.displayName = 'CardFooter';
