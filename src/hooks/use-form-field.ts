'use client';

import type { FieldPath, FieldValues } from 'react-hook-form';
import { createContext } from 'react';
import { useFormContext } from 'react-hook-form';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = { name: TName };

export const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

type FormItemContextValue = { id: string };

export const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

export const useFormField = () => {
  const fieldContext = use(FormFieldContext) as FormFieldContextValue | undefined;
  const itemContext = use(FormItemContext) as FormItemContextValue | undefined;
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext || !itemContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};
