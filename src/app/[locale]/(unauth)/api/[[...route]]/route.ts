import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { z } from 'zod';

const app = new Hono().basePath('/api');

const route = app.post(
  '/hello',
  zValidator(
    'form',
    z.object({
      name: z.string(),
    }),
  ),
  (c) => {
    const data = c.req.valid('form');

    return c.json({
      message: `Hello ${data.name}`,
    });
  },
);

export type AppType = typeof route;

export const POST = handle(app);
