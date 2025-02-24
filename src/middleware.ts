import type { NextFetchEvent, NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './libs/i18nNavigation';

const intlMiddleware = createMiddleware(routing);

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

// PostHog Middleware (Handles /ingest/* requests)
function posthogMiddleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = url.pathname.startsWith('/ingest/static/')
    ? 'us-assets.i.posthog.com'
    : 'us.i.posthog.com';
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set('host', hostname);

  url.protocol = 'https';
  url.hostname = hostname;
  url.port = '443';
  url.pathname = url.pathname.replace(/^\/ingest/, '');

  return NextResponse.rewrite(url, {
    headers: requestHeaders,
  });
}

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname.startsWith('/ingest')) {
    return posthogMiddleware(request);
  }

  if (isAuthPage(request) || isProtectedRoute(request)) {
    return clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) {
        const locale = req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? '';
        const signInUrl = new URL(`${locale}/sign-in`, req.url);

        await auth.protect({
          unauthenticatedUrl: signInUrl.toString(),
        });
      }

      return intlMiddleware(req);
    })(request, event);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // PostHog ingestion should be handled separately
    '/ingest/:path*',

    // Skip Next.js internals and static files, unless found in search params
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
