// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  console.log("middleware is now active")

  // Example: Redirect unauthenticated users
  const isLoggedIn = request.cookies.get('auth_token');
  if (!isLoggedIn && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('x-powered-by', 'MintMiddleware');
  return response;
}

export const config = {
  matcher: [
    '/((?!^$|privacy-policy|terms|about|contact|login|signup).*)',
  ],
};
