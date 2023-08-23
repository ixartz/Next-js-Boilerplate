/* eslint-disable-next-line import/no-extraneous-dependencies */
import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config({
  path: '.env',
});

export default {
  out: './migrations',
  schema: './src/models/schema.ts',
  driver: 'libsql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
} satisfies Config;
