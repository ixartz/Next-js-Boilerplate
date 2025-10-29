import { integer, jsonb, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// This file defines the structure of your database tables using the Drizzle ORM.

// To modify the database schema:
// 1. Update this file with your desired changes.
// 2. Generate a new migration by running: `npm run db:generate`

// The generated migration file will reflect your schema changes.
// The migration is automatically applied during the Next.js initialization process through `instrumentation.ts`.
// Simply restart your Next.js server to apply the database changes.
// Alternatively, if your database is running, you can run `npm run db:migrate` and there is no need to restart the server.

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate

export const counterSchema = pgTable('counter', {
  id: serial('id').primaryKey(),
  count: integer('count').default(0),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});

// Promptchan Platform Tables
export const userCreditsSchema = pgTable('user_credits', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  creditsBalance: integer('credits_balance').default(0),
  totalEarned: integer('total_earned').default(0),
  totalSpent: integer('total_spent').default(0),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const generatedContentSchema = pgTable('generated_content', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  contentType: text('content_type', { enum: ['image', 'video', 'chat'] }).notNull(),
  prompt: text('prompt').notNull(),
  style: text('style'),
  pose: text('pose'),
  quality: text('quality').default('Ultra'),
  imageUrl: text('image_url'),
  metadata: jsonb('metadata'),
  creditsUsed: integer('credits_used').default(1),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});

export const videoGenerationJobsSchema = pgTable('video_generation_jobs', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  requestId: text('request_id').notNull().unique(),
  status: text('status', { enum: ['pending', 'processing', 'completed', 'failed'] }).default('pending'),
  prompt: text('prompt'),
  progress: integer('progress').default(0),
  resultUrl: text('result_url'),
  errorMessage: text('error_message'),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
