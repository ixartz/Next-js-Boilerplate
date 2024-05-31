import logtail from '@logtail/pino';
import pino from 'pino';

import { Env } from './Env';

const stream = await logtail({
  sourceToken: Env.LOGTAIL_SOURCE_TOKEN ?? '',
  options: {},
});

// if (Env.LOGTAIL_SOURCE_TOKEN) {
//   // Use for production
//   options = {
//     transport: {
//       target: '@logtail/pino',
//       options: { sourceToken: Env.LOGTAIL_SOURCE_TOKEN },
//     },
//     base: undefined,
//   };
// } else {
//   options = {
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         colorize: true,
//       },
//     },
//   };
// }

export const logger = pino({ base: undefined }, stream);
