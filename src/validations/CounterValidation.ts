import * as z from 'zod';

export const CounterValidation = z.object({
  increment: z.number().min(1).max(3),
});
