import type { Config } from 'drizzle-kit';

export default {
  out: './migrations',
  schema: './src/models/schema.ts',
  driver: 'libsql',
  dbCredentials: {
    url: 'file:next-js-boilerplate.db',
  },
} satisfies Config;
