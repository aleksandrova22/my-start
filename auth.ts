import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma/prisma"
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Vk from "next-auth/providers/vk"
import MailRu from "next-auth/providers/mailru"
import Yandex from "next-auth/providers/yandex"


const prismaDB = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    GitHub,
    Google,
    MailRu,
    Vk,
    Yandex,
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'smith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log('credentials', credentials);
        // Return null if user data could not be retrieved
        if ('1' === credentials?.username && '1' === credentials.password) {
          const user = await prismaDB.user.findFirst({ where: { id: '1' } });
          console.log('authorize user=', user);
          return user;
        }

        if ('admin' === credentials?.username) {
          const user = await prismaDB.user.findFirst({ where: { id: '1' } });
          console.log('authorize user=', user);
          return user;
        }

        // switch (credentials.username) {
        //   case 'admin':
        //     if ('1' === credentials.password) {
        //       const user = await prismaDB.user.findFirst({ where: { id: '1' } });
        //       return user;
        //     }

        // case 'guest':
        //   if ('1' === credentials.password) {
        //     const user = await prismaDB.user.findFirst({ where: { id: '3' } });
        //     return user;
        //   }

        // case 'user':
        //   if ('1' === credentials.password) {
        //     const user = await prismaDB.user.findFirst({ where: { id: '4' } });
        //     return user;
        // }
        return null;
        //}
      }
    })
  ],

  callbacks: {

    jwt({ token, user }) {

      // if (user) token.role = user.role
      if (user) {

        token.id = user?.id;
        token.role = user?.role;
      }
      return token;

    },

    session({ session, token }) {
      // console.log('____session', { session, token });

      if (session.user) {
        session.user.id = token?.id as string;
        session.user.role = token?.role as string;
      };

      return session;
    }
  }
});

