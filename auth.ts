import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma/prisma";
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from "@prisma/client";
import MailRu from "next-auth/providers/mailru";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const prismaDB = new PrismaClient();


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    GitHub,
    Google,
    MailRu,

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
        credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        console.log('credentials', credentials);
        // Return null if user data could not be retrieved

        if ('1' === credentials?.username && '1' === credentials.password) {
          const user = await prismaDB.user.findFirst({ where: { id: '1' } });
          console.log('authorize user=', user);
          return user;
        }
        return null;
      }
    })

  ],
})