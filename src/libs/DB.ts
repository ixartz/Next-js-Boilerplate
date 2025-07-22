import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import path from 'node:path';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from '@/models/Schema';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const globalForDb = globalThis as unknown as {
  drizzle: NodePgDatabase<typeof schema>;
  pool: Pool;
};

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate
const createDbConnection = () => {
  // Create connection pool for better performance in production
  const pool = new Pool({
    connectionString: Env.DATABASE_URL,
    ssl: !Env.DATABASE_URL.includes('localhost') && !Env.DATABASE_URL.includes('127.0.0.1')
      ? { rejectUnauthorized: false }
      : false,
    // Production optimizations
    max: Env.NODE_ENV === 'production' ? 20 : 5, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
    statement_timeout: 30000, // Terminate any statement that takes more than 30 seconds
    query_timeout: 30000, // Terminate any query that takes more than 30 seconds
  });

  // Store pool in global for cleanup
  if (Env.NODE_ENV !== 'production') {
    globalForDb.pool = pool;
  }

  return drizzle(pool, { schema });
};

const db = globalForDb.drizzle || createDbConnection();

// Only store in global during development to prevent hot reload issues
if (Env.NODE_ENV !== 'production') {
  globalForDb.drizzle = db;
}

// Migration function that can be called separately
export const runMigrations = async () => {
  try {
    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), 'migrations'),
    });
    console.error('Database migrations completed successfully');
  } catch (error) {
    console.error('Database migration failed:', error);
    throw error;
  }
};

// Only run migrations automatically in development
// In production, migrations should be run via build script (vercel-build) or separate process
if (Env.NODE_ENV !== 'production') {
  // Use dynamic import to avoid top-level await in production builds
  runMigrations().catch((error) => {
    console.error('Failed to run migrations:', error);
    process.exit(1);
  });
}

// Graceful shutdown handler for production
if (Env.NODE_ENV === 'production') {
  const gracefulShutdown = async () => {
    try {
      if (globalForDb.pool) {
        await globalForDb.pool.end();
        console.error('Database pool closed');
      }
    } catch (error) {
      console.error('Error during graceful shutdown:', error);
    }
  };

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);
}

export { db };
