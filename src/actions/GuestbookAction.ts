'use server';

import { eq, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import { getDb } from '@/libs/getDB';
import { guestbookSchema } from '@/models/Schema';
import {
  DeleteGuestbookValidation,
  EditGuestbookValidation,
  GuestbookValidation,
} from '@/validations/GuestbookValidation';

export async function createGuestbook(formData: FormData) {
  const parse = GuestbookValidation.safeParse({
    username: formData.get('username'),
    body: formData.get('body'),
  });

  if (!parse.success) {
    return {
      message: 'Invalid form data',
    };
  }

  await (await getDb()).insert(guestbookSchema).values(parse.data).returning();

  revalidatePath('/guestbook');
  return {};
}

export async function updateGuestbook(id: number, formData: FormData) {
  const parse = EditGuestbookValidation.safeParse({
    id,
    username: formData.get('username'),
    body: formData.get('body'),
  });

  if (!parse.success) {
    return {
      message: 'Invalid form data',
    };
  }

  await (
    await getDb()
  )
    .update(guestbookSchema)
    .set({
      ...parse.data,
      updatedAt: sql`(strftime('%s', 'now'))`,
    })
    .where(eq(guestbookSchema.id, parse.data.id))
    .run();

  revalidatePath('/guestbook');
  return {};
}

export async function deleteGuestbook(id: number) {
  const parse = DeleteGuestbookValidation.safeParse({
    id,
  });

  if (!parse.success) {
    return {
      message: 'Invalid form data',
    };
  }

  await (await getDb())
    .delete(guestbookSchema)
    .where(eq(guestbookSchema.id, parse.data.id))
    .run();

  revalidatePath('/guestbook');
  return {};
}
