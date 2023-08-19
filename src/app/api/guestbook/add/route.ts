import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { guestbookTable } from '@/models/schema';

export const POST = async () => {
  await db
    .insert(guestbookTable)
    .values({
      body: 'hello',
      email: 'random@gmail.com',
    })
    .run();

  return NextResponse.json({ success: true });
};
