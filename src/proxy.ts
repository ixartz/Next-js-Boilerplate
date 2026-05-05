import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { routing } from './libs/I18nRouting';

const handleI18nRouting = createMiddleware(routing);

function isProtectedPath(pathname: string): boolean {
  return (
    pathname === '/dashboard' ||
    pathname.startsWith('/dashboard/') ||
    /^\/[a-z]{2}\/dashboard(\/|$)/.test(pathname)
  );
}

function isAuthPath(pathname: string): boolean {
  return pathname.startsWith('/sign-in') || /^\/[a-z]{2}\/sign-in/.test(pathname);
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isProtectedPath(pathname)) {
    const token = request.cookies.get('auth_token')?.value;
    if (!token) {
      const locale = pathname.match(/^\/([a-z]{2})\//)?.at(1) ?? '';
      const signInUrl = new URL(`${locale ? `/${locale}` : ''}/sign-in`, request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Redirect authenticated users away from sign-in
  if (isAuthPath(pathname)) {
    const token = request.cookies.get('auth_token')?.value;
    if (token) {
      const locale = pathname.match(/^\/([a-z]{2})\//)?.at(1) ?? '';
      const dashboardUrl = new URL(`${locale ? `/${locale}` : ''}/dashboard`, request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: '/((?!_next|_vercel|monitoring|api|.*\\..*).*)',
};
