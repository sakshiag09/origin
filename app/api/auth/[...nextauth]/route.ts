import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Create a basic config
const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize() {
        // Return a minimal user object - replace with actual DB lookup
        return { 
          id: "1", 
          name: "Test User", 
          email: "user@example.com"
        }
      }
    })
  ],
  // Make sure the secret is provided and specified
  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
}

// Create and export the handlers
const handler = NextAuth(authConfig)
export { handler as GET, handler as POST } 