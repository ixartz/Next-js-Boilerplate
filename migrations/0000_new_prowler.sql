CREATE TABLE `guestbook` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text,
	`body` text,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
