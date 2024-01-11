import {
  clerkMiddleware,
  experimental_createRouteMatcher,
  redirectToSignIn,
} from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export default clerkMiddleware(
  (auth, req) => {
    const isProtectedRoute = experimental_createRouteMatcher([
      'dashboard/(.*)',
    ]);
    if (!auth().userId && isProtectedRoute(req)) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    return intlMiddleware(req);
  },
  { debug: true },
);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
