import { z } from 'zod/v4';

export const CounterValidation = z.object({
  increment: z.coerce.number().min(1).max(3),
});
