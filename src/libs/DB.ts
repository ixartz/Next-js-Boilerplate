import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

import * as schema from '@/models/Schema';

import { Env } from './Env.mjs';

const client = createClient({
  url: Env.DATABASE_URL,
  authToken: Env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });

if (Env.NODE_ENV !== 'production') {
  await migrate(db, { migrationsFolder: './migrations' });
}
