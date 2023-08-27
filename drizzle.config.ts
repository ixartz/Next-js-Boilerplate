/* eslint-disable-next-line import/no-extraneous-dependencies */
import 'dotenv/config';

import type { Config } from 'drizzle-kit';

export default {
  out: './migrations',
  schema: './src/models/schema.ts',
  driver: 'libsql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
} satisfies Config;
