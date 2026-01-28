import type { NextRequest } from 'next/server';
import { detectBot } from '@arcjet/next';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import arcjet from '@/lib/Arcjet';
import { routing } from './lib/I18nRouting';

const handleI18nRouting = createMiddleware(routing);

// Route matchers
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
]);

const isAuthPage = createRouteMatcher([
  '/sign-in(.*)',
  '/:locale/sign-in(.*)',
  '/sign-up(.*)',
  '/:locale/sign-up(.*)',
]);

// Arcjet
const aj = arcjet.withRule(
  detectBot({
    mode: 'LIVE',
    allow: [
      'CATEGORY:SEARCH_ENGINE',
      'CATEGORY:PREVIEW',
      'CATEGORY:MONITOR',
    ],
  }),
);

// ✅ clerkMiddleware MUST be the default export
export default clerkMiddleware(async (auth, req: NextRequest) => {
  // 1️⃣ Arcjet protection
  if (process.env.ARCJET_KEY) {
    const decision = await aj.protect(req);
    if (decision.isDenied()) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  // 2️⃣ Protect dashboard routes
  if (isProtectedRoute(req)) {
    const locale
      = req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? '';

    const signInUrl = new URL(`${locale}/sign-in`, req.url);

    await auth.protect({
      unauthenticatedUrl: signInUrl.toString(),
    });
  }

  const { userId } = await auth();

  // Not logged in → continue
  if (!userId) {
    return handleI18nRouting(req);
  }

  // Allow auth + onboarding routes
  if (
    isAuthPage(req)
    || req.nextUrl.pathname.startsWith('/onboarding')
  ) {
    return handleI18nRouting(req);
  }

  // 3️⃣ Fetch user correctly (NO currentUser)
  const { clerkClient } = await import('@clerk/nextjs/server');
  const user = await (await clerkClient()).users.getUser(userId);

  const onboarding = user.unsafeMetadata.onboarding as
    | { completed?: boolean; skipped?: boolean }
    | undefined;

  const needsOnboarding
    = !onboarding || (!onboarding.completed && !onboarding.skipped);

  if (needsOnboarding) {
    const url = req.nextUrl.clone();
    url.pathname = '/onboarding';
    return NextResponse.redirect(url);
  }

  // 4️⃣ i18n routing last
  return handleI18nRouting(req);
});

export const config = {
  matcher: '/((?!_next|_vercel|monitoring|.*\\..*).*)',
};
