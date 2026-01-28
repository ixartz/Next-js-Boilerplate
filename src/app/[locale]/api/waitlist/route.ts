import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/DB';
import { waitlist } from '@/models/waitlist';

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, role } = await req.json();

    if (!fullName || !email || !role) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await db.insert(waitlist).values({ fullName, email, role });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save onboarding info' }, { status: 500 });
  }
}
