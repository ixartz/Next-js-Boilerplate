'use server';

import { sql } from 'drizzle-orm';
import { headers } from 'next/headers';
import z from 'zod';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';
import { CounterValidation } from '@/validations/CounterValidation';

export async function incrementCounter(_: unknown, formData: FormData) {
  const json = Object.fromEntries(formData.entries());
  const parse = CounterValidation.safeParse(json);

  if (!parse.success) {
    return { errors: z.treeifyError(parse.error) };
  }

  // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
  // The default value is 0 when there is no `x-e2e-random-id` header
  const id = Number((await headers()).get('x-e2e-random-id')) ?? 0;

  const count = await db
    .insert(counterSchema)
    .values({ id, count: parse.data.increment })
    .onConflictDoUpdate({
      target: counterSchema.id,
      set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
    })
    .returning();

  logger.info('Counter has been incremented');

  return { count: count[0]?.count };
}
