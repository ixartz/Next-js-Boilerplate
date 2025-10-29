import type { NextRequest } from 'next/server';
import { Buffer } from 'node:buffer';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { cloudflareR2Service } from '@/libs/CloudflareR2';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { promptchanClient } from '@/libs/PromptchanClient';
import { generatedContentSchema, videoGenerationJobsSchema } from '@/models/Schema';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ requestId: string }> },
) {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { requestId } = await params;

    // Get job record
    const [job] = await db
      .select()
      .from(videoGenerationJobsSchema)
      .where(eq(videoGenerationJobsSchema.requestId, requestId))
      .limit(1);

    if (!job || job.userId !== userId) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    // Get status from Promptchan API
    const status = await promptchanClient.getVideoStatus(requestId);

    // Get progress if available
    let progress = 0;
    try {
      const progressData = await promptchanClient.getVideoProgress(requestId);
      progress = Math.round(progressData.progress * 100);
    } catch {
      // Progress might not be available yet
    }

    // Update job status
    await db
      .update(videoGenerationJobsSchema)
      .set({
        status: status.status.toLowerCase() as 'pending' | 'processing' | 'completed' | 'failed',
        progress,
        updatedAt: new Date(),
      })
      .where(eq(videoGenerationJobsSchema.requestId, requestId));

    // If completed, get the result and save it
    if (status.status.toLowerCase() === 'completed') {
      try {
        const result = await promptchanClient.getVideoResult(requestId);

        if (result.video && result.video.length > 0) {
          // Download and upload video to R2
          const videoResponse = await fetch(result.video[0]!);
          const videoBuffer = Buffer.from(await videoResponse.arrayBuffer());
          const filename = cloudflareR2Service.generateFilename('video', userId);
          const videoUrl = await cloudflareR2Service.uploadVideo(videoBuffer, filename);

          // Update job with result
          await db
            .update(videoGenerationJobsSchema)
            .set({
              resultUrl: videoUrl,
              updatedAt: new Date(),
            })
            .where(eq(videoGenerationJobsSchema.requestId, requestId));

          // Save to generated content
          await db.insert(generatedContentSchema).values({
            userId,
            contentType: 'video',
            prompt: job.prompt || '',
            imageUrl: videoUrl, // Reusing imageUrl field for video URL
            metadata: { requestId, originalUrl: result.video[0] },
            creditsUsed: 3, // Default video cost
          });

          logger.info(`Video generation completed for user ${userId}`, {
            requestId,
            videoUrl,
          });
        }
      } catch (error) {
        logger.error('Error processing completed video:', { error: String(error) });
        // Update job as failed
        await db
          .update(videoGenerationJobsSchema)
          .set({
            status: 'failed',
            errorMessage: 'Failed to process completed video',
            updatedAt: new Date(),
          })
          .where(eq(videoGenerationJobsSchema.requestId, requestId));
      }
    }

    return NextResponse.json({
      status: status.status,
      progress,
      details: status.details,
      resultUrl: job.resultUrl,
    });
  } catch (error) {
    logger.error('Error checking video status:', { error: String(error) });
    return NextResponse.json(
      { error: 'Failed to check video status' },
      { status: 500 },
    );
  }
}
