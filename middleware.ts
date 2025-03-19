import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Keep it simple for now until the auth route works
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 