import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { guestbookTable } from '@/models/schema';

export const POST = async () => {
  await db
    .insert(guestbookTable)
    .values({
      body: 'hello',
      username: 'random',
    })
    .run();

  return NextResponse.json({ success: true });
};
