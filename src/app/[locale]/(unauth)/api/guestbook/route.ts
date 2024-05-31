import { eq, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { guestbookSchema } from '@/models/Schema';
import {
  DeleteGuestbookValidation,
  EditGuestbookValidation,
  GuestbookValidation,
} from '@/validations/GuestbookValidation';

export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = GuestbookValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const guestbook = await db
      .insert(guestbookSchema)
      .values(parse.data)
      .returning();

    logger.info('A new guestbook has been created');

    return NextResponse.json({
      id: guestbook[0]?.id,
    });
  } catch (error) {
    logger.error(error, 'An error occurred while creating a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = EditGuestbookValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db
      .update(guestbookSchema)
      .set({
        ...parse.data,
        updatedAt: sql`(strftime('%s', 'now'))`,
      })
      .where(eq(guestbookSchema.id, parse.data.id))
      .run();

    logger.info('A guestbook entry has been updated');

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, 'An error occurred while updating a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const json = await request.json();
  const parse = DeleteGuestbookValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db
      .delete(guestbookSchema)
      .where(eq(guestbookSchema.id, parse.data.id))
      .run();

    logger.info('A guestbook entry has been deleted');

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, 'An error occurred while deleting a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};
