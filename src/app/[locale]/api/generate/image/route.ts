import type { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { cloudflareR2Service } from '@/libs/CloudflareR2';
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
    const { prompt, style = 'Cinematic', quality = 'Ultra', ...otherParams } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Check user credits
    const [userCredits] = await db
      .select()
      .from(userCreditsSchema)
      .where(eq(userCreditsSchema.userId, userId))
      .limit(1);

    if (!userCredits || (userCredits.creditsBalance ?? 0) < 1) {
      return NextResponse.json({ error: 'Insufficient credits' }, { status: 400 });
    }

    // Calculate credits needed based on quality
    let creditsNeeded = 1;
    if (quality === 'Extreme') {
      creditsNeeded = 2;
    }
    if (quality === 'Max') {
      creditsNeeded = 3;
    }
    if (otherParams.restore_faces) {
      creditsNeeded += 1;
    }

    if ((userCredits.creditsBalance ?? 0) < creditsNeeded) {
      return NextResponse.json({ error: 'Insufficient credits for this quality' }, { status: 400 });
    }

    // Generate image using Promptchan API
    const imageParams = {
      prompt,
      style,
      quality,
      ...otherParams,
    };

    const result = await promptchanClient.generateImage(imageParams);

    // Upload image to Cloudflare R2
    const filename = cloudflareR2Service.generateFilename('image', userId);
    const imageUrl = await cloudflareR2Service.uploadBase64Image(result.image, filename);

    // Deduct credits
    await db
      .update(userCreditsSchema)
      .set({
        creditsBalance: (userCredits.creditsBalance ?? 0) - creditsNeeded,
        totalSpent: (userCredits.totalSpent ?? 0) + creditsNeeded,
        updatedAt: new Date(),
      })
      .where(eq(userCreditsSchema.userId, userId));

    // Save generated content
    await db.insert(generatedContentSchema).values({
      userId,
      contentType: 'image',
      prompt,
      style,
      quality,
      imageUrl,
      metadata: otherParams,
      creditsUsed: creditsNeeded,
    });

    logger.info(`Image generated for user ${userId}`, {
      prompt,
      style,
      quality,
      creditsUsed: creditsNeeded,
    });

    return NextResponse.json({
      success: true,
      imageUrl,
      creditsUsed: creditsNeeded,
      remainingCredits: (userCredits.creditsBalance ?? 0) - creditsNeeded,
    });
  } catch (error) {
    logger.error('Error generating image:', { error: String(error) });
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 },
    );
  }
}
