import { eq, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { db } from '@/libs/DB';
import { guestbookSchema } from '@/models/Schema';
import {
  DeleteGuestbookValidation,
  EditGuestbookValidation,
  GuestbookValidation,
} from '@/validations/GuestbookValidation';

export const POST = async (request: Request) => {
  try {
    const json = await request.json();
    const body = GuestbookValidation.parse(json);

    const guestbook = await db.insert(guestbookSchema).values(body).returning();

    return NextResponse.json({
      id: guestbook[0]?.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.format(), { status: 422 });
    }

    return NextResponse.json({}, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  try {
    const json = await request.json();
    const body = EditGuestbookValidation.parse(json);

    await db
      .update(guestbookSchema)
      .set({
        ...body,
        updatedAt: sql`(strftime('%s', 'now'))`,
      })
      .where(eq(guestbookSchema.id, body.id))
      .run();

    return NextResponse.json({});
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.format(), { status: 422 });
    }

    return NextResponse.json({}, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const json = await request.json();
    const body = DeleteGuestbookValidation.parse(json);

    await db
      .delete(guestbookSchema)
      .where(eq(guestbookSchema.id, body.id))
      .run();

    return NextResponse.json({});
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.format(), { status: 422 });
    }

    return NextResponse.json({}, { status: 500 });
  }
};
