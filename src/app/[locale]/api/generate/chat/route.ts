import type { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { promptchanClient } from '@/libs/PromptchanClient';
import { generatedContentSchema, userCreditsSchema } from '@/models/Schema';

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse request body
    const body = await request.json();
    const { message, characterData, chatHistory = [], ...otherParams } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Check user credits (chat is free for now, but we can add costs later)
    const [userCredits] = await db
      .select()
      .from(userCreditsSchema)
      .where(eq(userCreditsSchema.userId, userId))
      .limit(1);

    const creditsNeeded = 1; // Chat costs 1 credit

    if (!userCredits || (userCredits.creditsBalance ?? 0) < creditsNeeded) {
      return NextResponse.json({ error: 'Insufficient credits' }, { status: 400 });
    }

    // Prepare chat parameters
    const chatParams = {
      message,
      characterData,
      chatHistory,
      userName: userId, // Use userId as username
      ...otherParams,
    };

    // Send chat request to Promptchan API
    const result = await promptchanClient.chat(chatParams);

    // Deduct credits
    await db
      .update(userCreditsSchema)
      .set({
        creditsBalance: (userCredits.creditsBalance ?? 0) - creditsNeeded,
        totalSpent: (userCredits.totalSpent ?? 0) + creditsNeeded,
        updatedAt: new Date(),
      })
      .where(eq(userCreditsSchema.userId, userId));

    // Save chat interaction
    await db.insert(generatedContentSchema).values({
      userId,
      contentType: 'chat',
      prompt: message,
      metadata: {
        characterData,
        chatHistory: result.chatHistory,
        response: result.message,
        hasAudio: !!result.audio,
        hasSelfie: !!result.selfie,
      },
      creditsUsed: creditsNeeded,
    });

    logger.info(`Chat interaction for user ${userId}`, {
      messageLength: message.length,
      hasAudio: !!result.audio,
      hasSelfie: !!result.selfie,
      creditsUsed: creditsNeeded,
    });

    return NextResponse.json({
      success: true,
      message: result.message,
      chatHistory: result.chatHistory,
      audio: result.audio,
      selfie: result.selfie,
      creditsUsed: creditsNeeded,
      remainingCredits: (userCredits.creditsBalance ?? 0) - creditsNeeded,
    });
  } catch (error) {
    logger.error('Error in chat:', { error: String(error) });
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 },
    );
  }
}
