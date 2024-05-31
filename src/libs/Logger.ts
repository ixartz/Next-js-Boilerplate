import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({
  colorize: true,
});

export const logger = pino({ base: undefined }, stream);
