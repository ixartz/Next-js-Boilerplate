import { rest } from 'msw';

import type { Ping } from '@/mocks/types';

export const pingHandlers = [
  rest.get('https://my.backend/ping', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Ping>({
        answer: 'pong',
      })
    );
  }),
  rest.get('/ping', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Ping>({
        answer: 'pong',
      })
    );
  }),
];
