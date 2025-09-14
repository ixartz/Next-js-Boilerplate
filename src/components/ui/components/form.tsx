'use client';

import type * as LabelPrimitive from '@radix-ui/react-label';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Slot } from '@radix-ui/react-slot';
import { useId } from 'react';
import { Controller } from 'react-hook-form';
import { FormFieldContext, FormItemContext, useFormField } from '@/hooks';
import { cn } from '@/utils';

import { Label } from './label';

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext>
);

export const FormItem = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => {
  const id = useId();

  return (
    <FormItemContext value={{ id }}>
      <div ref={ref} className={cn('w-full space-y-1', className)} {...props} />
    </FormItemContext>
  );
};

FormItem.displayName = 'FormItem';

export const FormLabel = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof LabelPrimitive.Root> | null> }) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      htmlFor={formItemId}
      className={cn(error && 'text-error', className)}
      {...props}
    />
  );
};

FormLabel.displayName = 'FormLabel';

export const FormControl = ({ ref, ...props }: React.ComponentPropsWithoutRef<typeof Slot> & { ref?: React.RefObject<React.ElementRef<typeof Slot> | null> }) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-invalid={!!error}
      aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId}
      {...props}
    />
  );
};

FormControl.displayName = 'FormControl';

export const FormDescription = ({ ref, className, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-xs leading-relaxed opacity-60', className)}
      {...props}
    />
  );
};

FormDescription.displayName = 'FormDescription';

export const FormMessage = ({ ref, className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-xs font-medium leading-relaxed text-error', className)}
      {...props}
    >
      {body}
    </p>
  );
};

FormMessage.displayName = 'FormMessage';

export { FormProvider as Form } from 'react-hook-form';
