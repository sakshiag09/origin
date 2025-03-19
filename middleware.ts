import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  
  // Example: redirect unauthenticated users to login page for protected routes
  // if (!session && request.nextUrl.pathname.startsWith("/admin")) {
  //   return NextResponse.redirect(new URL("/auth/signin", request.url));
  // }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 