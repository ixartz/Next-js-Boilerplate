import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Env } from '@/libs/Env';
import * as schema from '@/models/Schema';

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate
export const createDbConnection = () => {
  const pool = new Pool({
    connectionString: Env.DATABASE_URL,
    max: 1,
  });

  return drizzle({
    client: pool,
    schema,
  });
};
