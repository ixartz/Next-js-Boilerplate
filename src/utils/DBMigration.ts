import path from 'node:path';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from '@/libs/DB';

await migrate(db, {
  migrationsFolder: path.join(process.cwd(), 'migrations'),
});
