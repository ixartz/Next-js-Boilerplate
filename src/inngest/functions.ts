import { google } from '@ai-sdk/google';
import * as Sentry from '@sentry/nextjs';
import { generateText } from 'ai';
import { inngest } from './client';

export const helloWorld = inngest.createFunction(
  { id: 'hello-world' },
  { event: 'test/hello.world' },
  async ({ event, step }) => {
    await step.sleep('wait-a-moment', '4s');
    return { message: `Hello ${event.data.email}!` };
  },
);
export const demoGetCurrentUser = inngest.createFunction(
  { id: 'demo-get-current-user' },
  { event: 'test/demo.get-current-user' },
  async ({ event, step: _step }) => {
    // For demo purposes, just return mock data since we don't have DB setup here
    return {
      id: event.data.id,
      name: 'Demo User',
      email: 'demo@example.com',
    };
  },
);
export const summarizeContents = inngest.createFunction(
  { id: 'summarize-contents' },
  { event: 'app/ticket.created' },
  async ({ event: _event, step }) => {
    // This calls `generateText` with the given arguments, adding AI observability,
    // metrics, datasets, and monitoring to your calls.
    const { text } = await step.ai.wrap('using-vercel-ai', generateText, {
      model: google('gemini-2.5-flash-lite'),
      prompt: 'What is love?',
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      },
    });
    Sentry.logger.info('User triggered test log', {
      log_source: 'sentry_test',
    });
    return text;
  },
);
