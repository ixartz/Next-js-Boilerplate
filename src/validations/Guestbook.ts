import { z } from 'zod';

export const AddGuestbookSchema = z.object({
  username: z.string(),
  body: z.string(),
});
