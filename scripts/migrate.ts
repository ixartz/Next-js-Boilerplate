#!/usr/bin/env tsx

import path from 'node:path';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from '../src/models/Schema';

// Get DATABASE_URL from environment
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required');
  process.exit(1);
}

async function runMigrations() {
  const pool = new Pool({
    connectionString: DATABASE_URL!,
    ssl: !DATABASE_URL!.includes('localhost') && !DATABASE_URL!.includes('127.0.0.1')
      ? { rejectUnauthorized: false }
      : false,
  });

  const db = drizzle(pool, { schema });

  try {
    console.error('Starting database migrations...');

    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), 'migrations'),
    });

    console.error('Database migrations completed successfully');
  } catch (error) {
    console.error('Database migration failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();
