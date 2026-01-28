import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/DB';
import { onboardingInfo } from '@/models/Schema';

export async function POST(req: NextRequest) {
  try {
    const { userId, purpose, source } = await req.json();

    if (!userId || !purpose || !source) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await db.insert(onboardingInfo).values({ userId, purpose, source });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save onboarding info' }, { status: 500 });
  }
}
