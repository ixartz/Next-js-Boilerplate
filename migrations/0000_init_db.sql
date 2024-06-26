CREATE TABLE IF NOT EXISTS "guestbook" (
	"id" serial NOT NULL,
	"username" text NOT NULL,
	"body" text NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
