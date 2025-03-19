import type { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
  providers: [], // Empty array as providers are defined in auth.ts
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isProtected = request.nextUrl.pathname.startsWith("/dashboard") || 
                         request.nextUrl.pathname.startsWith("/admin");
      
      if (isProtected) return isLoggedIn;
      return true;
    },
  },
};

export default authConfig; 