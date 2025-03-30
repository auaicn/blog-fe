import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcryptjs";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function getUser(loginId: string): Promise<User | undefined> {
  try {
    const user = await sql<
      User[]
    >`SELECT * FROM users WHERE loginid=${loginId}`;
    return user[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ loginId: z.string(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { loginId, password } = parsedCredentials.data;
          const user = await getUser(loginId);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Attach the user information to the session
      console.log("Session:", session);
      console.log("Token:", token);
      console.log("User:", user);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
