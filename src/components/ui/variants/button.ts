import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex scale-100 items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-colors transition-transform focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-4 text-xs',
        md: 'h-9 px-5',
        lg: 'h-10 px-6',
        icon: 'size-9',
      },
    },
    compoundVariants: [
      { variant: 'link', size: 'sm', className: 'h-auto px-0' },
      { variant: 'link', size: 'md', className: 'h-auto px-0' },
      { variant: 'link', size: 'lg', className: 'h-auto px-0' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);
