import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import path from 'node:path';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import * as schema from '@/models/Schema';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const globalForDb = globalThis as unknown as {
  drizzle: NodePgDatabase<typeof schema>;
  migrated: boolean;
};

// Check if we're in a build environment where database might not be available
const isBuildTime = process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL;

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate
const createDbConnection = () => {
  if (isBuildTime) {
    // Return a mock connection during build time
    return {} as NodePgDatabase<typeof schema>;
  }

  return drizzle({
    connection: {
      connectionString: Env.DATABASE_URL,
      ssl: !Env.DATABASE_URL.includes('localhost') && !Env.DATABASE_URL.includes('127.0.0.1'),
    },
    schema,
  });
};

const db = globalForDb.drizzle || createDbConnection();

// Only store in global during development to prevent hot reload issues
if (Env.NODE_ENV !== 'production') {
  globalForDb.drizzle = db;
}

// Run migrations only if not in build time and not already migrated
if (!isBuildTime && !globalForDb.migrated) {
  try {
    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), 'migrations'),
    });
    globalForDb.migrated = true;
  } catch (error) {
    console.warn('Database migration failed during initialization:', error);
    // Don't throw error during build time to prevent build failures
  }
}

export { db };
