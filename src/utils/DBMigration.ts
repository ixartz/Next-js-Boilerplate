import path from 'node:path';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { createDbConnection } from '@/libs/DB';

const db = createDbConnection();

await migrate(db, {
  migrationsFolder: path.join(process.cwd(), 'migrations'),
});

await db.$client.end();
