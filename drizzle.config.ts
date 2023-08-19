import type { Config } from 'drizzle-kit';

export default {
  out: './migrations',
  schema: './src/models/schema.ts',
  driver: 'libsql',
  dbCredentials: {
    url: 'http://127.0.0.1:8080',
  },
} satisfies Config;
