import type { NextRequest } from "next/server";
import { detectBot } from "@arcjet/next";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import arcjet from "@/libs/Arcjet";
import { routing } from "./libs/i18nRouting";

const handleI18nRouting = createMiddleware(routing);

// Optional: Arcjet bot protection
const aj = arcjet.withRule(
  detectBot({
    mode: "LIVE",
    allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:PREVIEW", "CATEGORY:MONITOR"],
  }),
);

export default async function middleware(request: NextRequest) {
  // Arcjet bot protection
  if (process.env.ARCJET_KEY) {
    const decision = await aj.protect(request);
    if (decision.isDenied()) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }
  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!_next|_vercel|monitoring|.*\\..*).*)",
};
