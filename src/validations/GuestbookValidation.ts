import { z } from 'zod';

export const GuestbookSchema = z.object({
  username: z.string().nonempty(),
  body: z.string().nonempty(),
});

export const EditGuestbookSchema = z.object({
  id: z.coerce.number(),
  username: z.string().nonempty(),
  body: z.string().nonempty(),
});

export const DeleteGuestbookSchema = z.object({
  id: z.coerce.number(),
});
