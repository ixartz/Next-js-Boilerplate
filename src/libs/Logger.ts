import type { LogRecord } from '@logtape/logtape';
import { configure, getConsoleSink, getLogger } from '@logtape/logtape';

import { Env } from './Env';

const sinks = {
  console: getConsoleSink(),
};

if (Env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN) {
  const ingest = async (record: LogRecord) => {
    await fetch(`https://in.logs.betterstack.com`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN}`,
      },
      body: JSON.stringify(record),
    });
  };

  sinks.console = ingest;
}

await configure({
  sinks,
  loggers: [
    { category: ['logtape', 'meta'], level: 'warning', sinks: ['console'] },
    { category: 'app', level: 'debug', sinks: ['console'] },
  ],
});

export const logger = getLogger(['app']);
