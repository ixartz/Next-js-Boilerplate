import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

import { Env } from './Env';

const client = createClient({
  url: Env.DATABASE_URL,
});

export const db = drizzle(client);

await migrate(db, { migrationsFolder: './migrations' });
