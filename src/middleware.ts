import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
  '/',
  '/auth/register',
  '/auth/verify-email',
  '/models',
  '/guidelines',
  '/privacy-policy',
  '/T_&_C',
  '/login'
];

const prohibitedRoute = [
  '/auth/register',
  '/auth/verify-email',
]

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('auth_token');
  const isPublic = publicRoutes.some((route)=> route === pathname);
  const isProhibited = prohibitedRoute.some((route)=> route === pathname);

  console.log({token: authToken, 
    cred: request.credentials, 
    cookie: request.cookies, 
    dest: request.destination, 
    headers: request.headers})
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
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.css$|.*\\.js$).*)',
    "/"
  ],
};
