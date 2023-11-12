import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';

export default authMiddleware({
  publicRoutes: (req: NextRequest) =>
    !req.nextUrl.pathname.startsWith('/dashboard'),
  ignoredRoutes: ['/api/guestbook'],
  // By default, the middleware will return a 401 response for all routes `/api/*` when the user is signed out.
  // But, for `/api/guestbook`, we want unauthenticated users to be able to access it.

  // eslint-disable-next-line consistent-return
  afterAuth(auth, req) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
