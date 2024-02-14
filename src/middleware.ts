import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { HOME } from './routes';

const protectedRoutes = [HOME];

export default function middleware(req: NextRequest) {
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/signin', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  return NextResponse.next();
}
