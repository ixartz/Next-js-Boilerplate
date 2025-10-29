import type { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { userCreditsSchema } from '@/models/Schema';

export async function GET() {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user credits
    const [userCredits] = await db
      .select()
      .from(userCreditsSchema)
      .where(eq(userCreditsSchema.userId, userId))
      .limit(1);

    if (!userCredits) {
      // Create new user credits record
      const [newCredits] = await db
        .insert(userCreditsSchema)
        .values({
          userId,
          creditsBalance: 10, // Give new users 10 free credits
          totalEarned: 10,
          totalSpent: 0,
        })
        .returning();

      return NextResponse.json({
        creditsBalance: newCredits?.creditsBalance || 0,
        totalEarned: newCredits?.totalEarned || 0,
        totalSpent: newCredits?.totalSpent || 0,
      });
    }

    return NextResponse.json({
      creditsBalance: userCredits.creditsBalance,
      totalEarned: userCredits.totalEarned,
      totalSpent: userCredits.totalSpent,
    });
  } catch (error) {
    logger.error('Error getting user credits:', { error: String(error) });
    return NextResponse.json(
      { error: 'Failed to get credits' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse request body
    const body = await request.json();
    const { credits } = body;

    if (!credits || credits <= 0) {
      return NextResponse.json({ error: 'Invalid credits amount' }, { status: 400 });
    }

    // Get current user credits
    const [userCredits] = await db
      .select()
      .from(userCreditsSchema)
      .where(eq(userCreditsSchema.userId, userId))
      .limit(1);

    if (!userCredits) {
      // Create new user credits record
      const [newCredits] = await db
        .insert(userCreditsSchema)
        .values({
          userId,
          creditsBalance: credits,
          totalEarned: credits,
          totalSpent: 0,
        })
        .returning();

      logger.info(`Credits added for new user ${userId}`, { credits });

      return NextResponse.json({
        success: true,
        creditsBalance: newCredits?.creditsBalance || 0,
        totalEarned: newCredits?.totalEarned || 0,
        totalSpent: newCredits?.totalSpent || 0,
      });
    }

    // Update existing credits
    const [updatedCredits] = await db
      .update(userCreditsSchema)
      .set({
        creditsBalance: userCredits.creditsBalance + credits,
        totalEarned: userCredits.totalEarned + credits,
        updatedAt: new Date(),
      })
      .where(eq(userCreditsSchema.userId, userId))
      .returning();

    logger.info(`Credits added for user ${userId}`, {
      creditsAdded: credits,
      newBalance: updatedCredits?.creditsBalance || 0,
    });

    return NextResponse.json({
      success: true,
      creditsBalance: updatedCredits?.creditsBalance || 0,
      totalEarned: updatedCredits?.totalEarned || 0,
      totalSpent: updatedCredits?.totalSpent || 0,
    });
  } catch (error) {
    logger.error('Error adding credits:', { error: String(error) });
    return NextResponse.json(
      { error: 'Failed to add credits' },
      { status: 500 },
    );
  }
}
