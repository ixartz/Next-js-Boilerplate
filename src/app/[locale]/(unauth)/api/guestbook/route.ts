import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';
import {
  CounterValidation,
} from '@/validations/GuestbookValidation';

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = CounterValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    // There is only one row, so we use id=0
    await db
      .insert(counterSchema)
      .values({ id: 0, count: parse.data.increment })
      .onConflictDoUpdate({
        target: counterSchema.id,
        set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
      });

    logger.info('Counter has been incremented');

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, 'An error occurred while incrementing the counter');

    return NextResponse.json({}, { status: 500 });
  }
};
