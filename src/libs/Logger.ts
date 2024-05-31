import '@logtail/pino';

import pino, { type LoggerOptions } from 'pino';

import { Env } from './Env';

let options: LoggerOptions = {};

if (Env.LOGTAIL_SOURCE_TOKEN) {
  // Use for production
  options = {
    transport: {
      target: '@logtail/pino',
      options: { sourceToken: Env.LOGTAIL_SOURCE_TOKEN },
    },
    base: undefined,
  };
} else {
  options = {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  };
}

export const logger = pino(options);
