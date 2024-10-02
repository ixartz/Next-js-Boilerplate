import { Browser as Logtail } from '@logtail/js';
import type { Logger, LogRecord } from '@logtape/logtape';
import { configure, getConsoleSink, getLogger } from '@logtape/logtape';

import { Env } from './Env';

const global = globalThis as unknown as { logger: Logger };

const loggerSingleton = () => {
  const sinks = {
    console: getConsoleSink(),
  };

  if (Env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN) {
    const logtail = new Logtail(Env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN);

    const ingest = async (record: LogRecord) => {
      await logtail.log(`${record.message}`, record.level);
    };

    sinks.console = ingest;
  }

  configure({
    sinks,
    loggers: [
      { category: ['logtape', 'meta'], level: 'warning', sinks: ['console'] },
      { category: 'app', level: 'debug', sinks: ['console'] },
    ],
  });

  return getLogger(['app']);
};

export const logger = global.logger ?? loggerSingleton();

if (Env.NODE_ENV !== 'production') {
  global.logger = logger;
}
