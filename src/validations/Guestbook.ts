import { z } from 'zod';

export const AddGuestbookSchema = z.object({
  username: z.string().nonempty(),
  body: z.string().nonempty(),
});

export const DeleteGuestbookSchema = z.object({
  id: z.coerce.number(),
});
