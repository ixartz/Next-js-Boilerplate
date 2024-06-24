import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const guestbookSchema = pgTable('guestbook', {
  id: serial('id'),
  username: text('username').notNull(),
  body: text('body').notNull(),
});
