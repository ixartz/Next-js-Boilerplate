import { z } from 'zod';

export const GuestbookSchema = z.object({
  username: z.string().nonempty(),
  body: z.string().nonempty(),
});

export const EditGuestbookSchema = z.object({
  id: z.coerce.number(),
  username: z.string().min(1),
  body: z.string().min(1),
});

export const DeleteGuestbookSchema = z.object({
  id: z.coerce.number(),
});
