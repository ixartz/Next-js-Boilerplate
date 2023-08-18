import type { Config } from 'drizzle-kit';

export default {
  out: './migrations',
  schema: './src/models/schema.ts',
} satisfies Config;
