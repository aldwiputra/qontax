import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { Adapter } from 'next-auth/adapters';
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

const prisma = new PrismaClient();
export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, token, user }: { session: any; token: any; user: any }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
