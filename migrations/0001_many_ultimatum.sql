CREATE TABLE "onboarding_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"purpose" text NOT NULL,
	"source" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
