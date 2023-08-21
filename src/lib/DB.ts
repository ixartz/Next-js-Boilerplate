import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

const client = createClient({
  url: 'file:next-js-boilerplate.db',
});

export const db = drizzle(client);

await migrate(db, { migrationsFolder: './migrations' });
