import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to the admin page itself (authentication is handled client-side)
    return NextResponse.next();
  }

  // Check if the request is for admin API routes
  if (request.nextUrl.pathname.startsWith('/api/admin')) {
    // API routes handle their own authentication
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*'
  ]
};