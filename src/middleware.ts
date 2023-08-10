import { authMiddleware } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';

export default authMiddleware({
  publicRoutes: (req: NextRequest) =>
    !req.nextUrl.pathname.startsWith('/dashboard'),
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
