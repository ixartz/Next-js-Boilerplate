import { eq, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { db } from '@/libs/DB';
import { guestbookTable } from '@/models/Schema';
import {
  DeleteGuestbookSchema,
  EditGuestbookSchema,
  GuestbookSchema,
} from '@/validations/GuestbookValidation';

export const POST = async (request: Request) => {
  try {
    const json = await request.json();
    const body = GuestbookSchema.parse(json);

    const guestbook = await db.insert(guestbookTable).values(body).returning();

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
    const body = EditGuestbookSchema.parse(json);

    await db
      .update(guestbookTable)
      .set({
        ...body,
        updatedAt: sql`(strftime('%s', 'now'))`,
      })
      .where(eq(guestbookTable.id, body.id))
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
    const body = DeleteGuestbookSchema.parse(json);

    await db.delete(guestbookTable).where(eq(guestbookTable.id, body.id)).run();

    return NextResponse.json({});
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.format(), { status: 422 });
    }

    return NextResponse.json({}, { status: 500 });
  }
};
