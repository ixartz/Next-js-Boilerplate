import { createClient } from '@libsql/client';
import type { LibSQLDatabase } from 'drizzle-orm/libsql';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

import { Env } from './Env.mjs';

let db: LibSQLDatabase<Record<string, never>>;

// Top level await is not supported yet in Server action, postpone until it is supported.
export async function getDb() {
  if (!db) {
    const client = createClient({
      url: Env.DATABASE_URL,
      authToken: Env.DATABASE_AUTH_TOKEN,
    });

    db = drizzle(client);

    // Disable migrate function if using Edge runtime and use `npm run db:migrate` instead.
    // Only run migrate in development. Otherwise, migrate will also be run during the build which can cause errors.
    // Migrate during the build can cause errors due to the locked database when multiple migrations are running at the same time.
    if (process.env.NODE_ENV !== 'production') {
      await migrate(db, { migrationsFolder: './migrations' });
    }
  }

  return db;
}
