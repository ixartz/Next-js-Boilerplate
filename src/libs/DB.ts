import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

import { Env } from './Env.mjs';

const client = createClient({
  url: Env.DATABASE_URL,
  authToken: Env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client);

// Disable migrate function if using Edge runtime and use `drizzle-kit push` instead
await migrate(db, { migrationsFolder: './migrations' });
