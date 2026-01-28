import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const waitlist = pgTable('waitlist', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  role: text('role').notNull(),
});
