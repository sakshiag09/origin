import { NextResponse, type NextRequest } from "next/server";

// Basic middleware that can later be enhanced with auth checks
export function middleware(request: NextRequest) {
  // You can add protected route logic here if needed
  // const protectedPaths = ['/admin', '/profile', '/orders'];
  // const path = request.nextUrl.pathname;
  
  // if (protectedPaths.some(prefix => path.startsWith(prefix))) {
  //   // Check for auth cookie or header
  //   // If not authenticated, redirect to login
  //   // return NextResponse.redirect(new URL('/login', request.url));
  // }
  
  return NextResponse.next();
}

export const config = {
  // Only run middleware on the specified paths
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/auth routes
     * 2. /api routes (to not interfere with our API endpoints)
     * 3. /_next (Next.js internals)
     * 4. Static files (/static, /images, /favicon.ico, etc.)
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
} 