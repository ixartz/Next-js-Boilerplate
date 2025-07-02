import type { AsyncSink } from '@logtape/logtape';
import { configure, fromAsyncSink, getConsoleSink, getJsonLinesFormatter, getLogger } from '@logtape/logtape';
import { isServer } from '@/utils/Helpers';
import { Env } from './Env';

const betterStackSink: AsyncSink = async (record) => {
  await fetch('https://in.logs.betterstack.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Env.BETTER_STACK_SOURCE_TOKEN}`,
    },
    body: JSON.stringify(record),
  });
};

await configure({
  sinks: {
    console: getConsoleSink({ formatter: getJsonLinesFormatter() }),
    betterStack: fromAsyncSink(betterStackSink),
  },
  loggers: [
    { category: ['logtape', 'meta'], sinks: ['console'], lowestLevel: 'warning' },
    {
      category: ['app'],
      sinks: isServer() && Env.BETTER_STACK_SOURCE_TOKEN ? ['console', 'betterStack'] : ['console'],
      lowestLevel: 'debug',
    },
  ],
});

export const logger = getLogger(['app']);
