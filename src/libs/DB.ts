import path from 'node:path';
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import * as schema from '@/models/Schema';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const global = globalThis as unknown as {
  drizzle: NodePgDatabase<typeof schema>;
};

const createDbConnection = () => {
  return drizzle({
    connection: {
      connectionString: Env.DATABASE_URL,
      ssl: false, // Set to true if your database requires SSL
    },
    schema,
  });
};

const db = global.drizzle || createDbConnection();

// Only store in global during development to prevent hot reload issues
if (process.env.NODE_ENV !== 'production') {
  global.drizzle = db;
}

await migrate(global.drizzle, {
  migrationsFolder: path.join(process.cwd(), 'migrations'),
});

export { db };
