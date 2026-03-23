import { createDbConnection } from '@/utils/DBConnection';
import { Env } from './Env';

declare global {
  var cachedDrizzle: ReturnType<typeof createDbConnection> | undefined;
}

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const db = globalThis.cachedDrizzle ?? createDbConnection();

// Only store in global during development to prevent hot reload issues
if (Env.NODE_ENV !== 'production') {
  globalThis.cachedDrizzle = db;
}

export { db };
