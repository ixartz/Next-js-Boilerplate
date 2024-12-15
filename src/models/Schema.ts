import { bigint, boolean, integer, pgTable, real, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const trading_strategy = pgTable('trading_strategy', {
  id: serial('id').notNull().primaryKey(),
  user_id: text('user_id').notNull().references(() => user.id),
  name: text('name').notNull(),
  description: text('description').notNull(),
  parameters: text('parameters').notNull(),
  is_active: boolean('is_active').notNull().default(false),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const bot_agents = pgTable('bot_agents', {
  id: serial('id').notNull().primaryKey(),
  user_id: text('user_id').notNull().references(() => user.id),
  strategy_id: integer('strategy_id').notNull().references(() => trading_strategy.id),
  allocated_funds: real('allocated_funds').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const crypto_trades = pgTable('crypto_trades', {
  id: bigint('id', { mode: 'number' }).notNull().primaryKey(),
  bot_agent_id: integer('bot_agent_id').notNull().references(() => bot_agents.id),
  symbol: text('symbol').notNull(),
  type: text('type').notNull(),
  quantity: real('quantity').notNull(),
  price: real('price').notNull(),
  status: text('status').notNull(),
  executed_at: timestamp('executed_at'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const stock_trades = pgTable('stock_trades', {
  id: bigint('id', { mode: 'number' }).notNull().primaryKey(),
  bot_agent_id: integer('bot_agent_id').notNull().references(() => bot_agents.id),
  symbol: text('symbol').notNull(),
  type: text('type').notNull(),
  quantity: real('quantity').notNull(),
  price: real('price').notNull(),
  status: text('status').notNull(),
  executed_at: timestamp('executed_at'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const market_data = pgTable('market_data', {
  id: bigint('id', { mode: 'number' }).notNull().primaryKey(),
  symbol: text('symbol').notNull(),
  price: real('price').notNull(),
  volume: real('volume').notNull(),
  high: real('high').notNull(),
  low: real('low').notNull(),
  open: real('open').notNull(),
  close: real('close').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const alerts = pgTable('alerts', {
  id: bigint('id', { mode: 'number' }).notNull().primaryKey(),
  user_id: text('user_id').notNull().references(() => user.id),
  symbol: text('symbol').notNull(),
  type: text('type').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const watchlist = pgTable('watchlist', {
  id: serial('id').notNull().primaryKey(),
  user_id: text('user_id').notNull().references(() => user.id),
  name: text('name').notNull(),
  symbols: text('symbols').array(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});
