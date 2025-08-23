import path from 'node:path';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { createDbConnection } from './DBConnection';

// Create a new and dedicated database connection for running migrations
const db = createDbConnection();

try {
  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), 'migrations'),
  });
} finally {
  await db.$client.end();
}
