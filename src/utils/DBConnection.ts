import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Env } from '@/libs/Env';
import { logger } from '@/libs/Logger';
import * as schema from '@/models/Schema';

// Need a database for production? Check out https://get.neon.com/BMFYNtx
// Tested and compatible with Next.js Boilerplate
export const createDbConnection = () => {
  const isLocalDatabase =
    Env.DATABASE_URL.includes('localhost') ||
    Env.DATABASE_URL.includes('127.0.0.1');

  const pool = new Pool({
    connectionString: Env.DATABASE_URL,
    max: isLocalDatabase ? 1 : undefined,
  });

  pool.on('error', (error) => {
    logger.error(`Database pool error: ${error.message}`);
  });

  return drizzle({
    client: pool,
    schema,
  });
};
