import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import  prismaClient  from "./prisma";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const existingUser = await prismaClient.user.findUnique({
          where: { email: credentials.email },
        });

        if (!existingUser) {
          throw new Error("User not found");
        }

        const passwordMatched = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatched) {
          throw new Error("Invalid password");
        }

        return {
          id: existingUser.id,
          email: existingUser.email,
          name: `${existingUser.firstName} ${existingUser.lastName}`,
          role: existingUser.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const authHandler = NextAuth(authOptions);
