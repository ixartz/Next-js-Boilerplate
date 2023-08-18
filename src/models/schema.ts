import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const countries = sqliteTable('guestbook', {
  id: integer('id').primaryKey(),
  email: text('email').notNull(),
  body: text('body').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updateAt: integer('updated_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});
