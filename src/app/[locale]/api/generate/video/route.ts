import type { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { promptchanClient } from '@/libs/PromptchanClient';
import { userCreditsSchema, videoGenerationJobsSchema } from '@/models/Schema';

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse request body
    const body = await request.json();
    const { prompt, video_quality = 'Standard', ...otherParams } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Check user credits (videos typically cost more)
    const [userCredits] = await db
      .select()
      .from(userCreditsSchema)
      .where(eq(userCreditsSchema.userId, userId))
      .limit(1);

    const creditsNeeded = video_quality === 'High' ? 5 : video_quality === 'Max' ? 10 : 3;

    if (!userCredits || (userCredits.creditsBalance ?? 0) < creditsNeeded) {
      return NextResponse.json({ error: 'Insufficient credits' }, { status: 400 });
    }

    // Submit video generation request
    const videoParams = {
      prompt,
      video_quality,
      ...otherParams,
    };

    const result = await promptchanClient.generateVideo(videoParams);

    // Create video generation job record
    await db.insert(videoGenerationJobsSchema).values({
      userId,
      requestId: result.request_id,
      prompt,
      status: 'pending',
    });

    // Deduct credits upfront
    await db
      .update(userCreditsSchema)
      .set({
        creditsBalance: (userCredits.creditsBalance ?? 0) - creditsNeeded,
        totalSpent: (userCredits.totalSpent ?? 0) + creditsNeeded,
        updatedAt: new Date(),
      })
      .where(eq(userCreditsSchema.userId, userId));

    logger.info(`Video generation started for user ${userId}`, {
      prompt,
      video_quality,
      requestId: result.request_id,
      creditsUsed: creditsNeeded,
    });

    return NextResponse.json({
      success: true,
      requestId: result.request_id,
      creditsUsed: creditsNeeded,
      remainingCredits: (userCredits.creditsBalance ?? 0) - creditsNeeded,
    });
  } catch (error) {
    logger.error('Error starting video generation:', { error: String(error) });
    return NextResponse.json(
      { error: 'Failed to start video generation' },
      { status: 500 },
    );
  }
}
