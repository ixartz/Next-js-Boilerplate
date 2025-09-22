import { cva } from 'class-variance-authority';

export const sheetVariants = cva(
  'data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 bg-background p-4 shadow-sm transition ease-in-out focus:outline-none data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 w-screen border-b',
        bottom:
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 w-screen border-t',
        left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-screen w-11/12 border-r sm:max-w-sm',
        right:
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-screen w-11/12 border-l sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);
