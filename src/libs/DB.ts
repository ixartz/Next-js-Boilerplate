import path from 'node:path';
import { drizzle as drizzlePg } from 'drizzle-orm/node-postgres';
import { migrate as migratePg } from 'drizzle-orm/node-postgres/migrator';
import * as schema from '@/models/Schema';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const global = globalThis as unknown as { client: any; drizzle: any };

if (!global.drizzle) {
  global.drizzle = drizzlePg({
    connection: {
      connectionString: Env.DATABASE_URL,
      ssl: false, // Set to true if your database requires SSL
    },
    schema,
  });
}

const drizzle = global.drizzle;
await migratePg(global.drizzle, {
  migrationsFolder: path.join(process.cwd(), 'migrations'),
});

export const db = drizzle;
