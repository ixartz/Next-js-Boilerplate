import path from 'node:path';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { logger } from '@/libs/Logger';
import { createDbConnection } from './DBConnection';

async function runMigrations() {
  const db = createDbConnection();

  try {
    if (!process.env.DATABASE_URL) {
      console.warn('⚠️ No DATABASE_URL found. Skipping migrations...');
      return;
    }

    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), 'migrations'),
    });
    // console.log('✅ Migrations completed');
    logger.info('✅ Migrations completed');
  } catch (err) {
    console.error('❌ Migration failed:', err);
  } finally {
    await db.$client.end();
  }
}

runMigrations();
