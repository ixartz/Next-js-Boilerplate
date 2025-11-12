import { serve } from 'inngest/next';
import { inngest } from '@/inngest/client';
import {
  demoGetCurrentUser,
  helloWorld,
  summarizeContents,
} from '@/inngest/functions';
// Create an API that serves Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    demoGetCurrentUser,
    summarizeContents,
  ],
});
