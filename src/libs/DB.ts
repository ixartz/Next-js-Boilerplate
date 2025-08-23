import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type * as schema from '@/models/Schema';
import { createDbConnection } from '@/utils/DBConnection';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const globalForDb = globalThis as unknown as {
  drizzle: NodePgDatabase<typeof schema>;
};

const db = globalForDb.drizzle || createDbConnection();

// Only store in global during development to prevent hot reload issues
if (Env.NODE_ENV !== 'production') {
  globalForDb.drizzle = db;
}

export { db };
