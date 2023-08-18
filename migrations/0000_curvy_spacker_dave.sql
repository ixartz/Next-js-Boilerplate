CREATE TABLE `guestbook` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`body` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
