import logtail from '@logtail/pino';
import pino, { type DestinationStream } from 'pino';
import pretty from 'pino-pretty';

import { Env } from './Env';

let stream: DestinationStream;

if (Env.LOGTAIL_SOURCE_TOKEN) {
  // Use in production
  stream = pino.multistream([
    await logtail({
      sourceToken: Env.LOGTAIL_SOURCE_TOKEN,
      options: {
        sendLogsToBetterStack: true,
      },
    }),
    {
      stream: pretty(),
    },
  ]);
} else {
  stream = pretty({
    colorize: true,
  });
}

export const logger = pino({ base: undefined }, stream);
