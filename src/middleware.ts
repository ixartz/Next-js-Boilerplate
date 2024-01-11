import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const isProtectedRoute = createRouteMatcher(['dashboard/(.*)']);

export default clerkMiddleware(
  (auth, req) => {
    if (!auth().userId && isProtectedRoute(req)) {
      return auth().redirectToSignIn({ returnBackUrl: req.url });
    }
    return intlMiddleware(req);
  },
  { debug: true },
);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
