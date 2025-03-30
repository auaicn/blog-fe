import type { NextAuthConfig } from "next-auth";

console.log("🔥 `auth.config.ts` is being loaded!"); // Debug

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isPublic =
        nextUrl.pathname === "/" ||
        nextUrl.pathname.startsWith("/blog") ||
        nextUrl.pathname.startsWith("/about") ||
        nextUrl.pathname.startsWith("/transposer");

      console.log({ isPublic });
      console.log({ isLoggedIn });

      if (isPublic) {
        return true;
      }

      if (!isLoggedIn) {
        return false; // Redirect unauthenticated users to login page
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
