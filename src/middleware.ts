import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
  '/',
  '/auth/register',
  '/auth/verify-email',
  '/models',
  '/guidelines',
  '/privacy-policy',
  '/T_&_C'
];

const prohibitedRoute = [
  '/auth/register',
  '/auth/verify-email',
]

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('auth_token');
  const isPublic = publicRoutes.includes(pathname);
  const isProhibited = prohibitedRoute.includes(pathname);

  console.log({midware: authToken})
  // Skip middleware for static files
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  if (!authToken && !isPublic) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (authToken && isProhibited) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('x-powered-by', 'MintMiddleware');
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.css$|.*\\.js$).*)',
  ],
};
