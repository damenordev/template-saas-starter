// import { v4 as uuid } from 'uuid'
import { encode as defaultEncode } from 'next-auth/jwt'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import { z } from 'zod'

import { db } from '@/lib/db'

const adapter = PrismaAdapter(db)

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { type: 'email', label: 'Email' },
        password: { type: 'password', label: 'Password' },
      },
      async authorize(credentials) {
        if (!credentials) return null

        const validatedCredentials = credentialsSchema.safeParse(credentials)
        if (!validatedCredentials.success) return null

        const user = await db.user.findFirst({
          where: { email: validatedCredentials.data.email },
        })

        if (!user) return null

        return user
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub) session.user.id = token.sub
      return session
    },
    async jwt({ token, user }) {
      if (user) token.sub = user.id
      return token
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = crypto.randomUUID()
        if (!params.token.sub) throw new Error('No user ID found in token')
        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        })
        console.log({ createdSession })
        if (!createdSession) throw new Error('Failed to create session')
        return sessionToken
      }
      return defaultEncode(params)
    },
  },
} satisfies NextAuthConfig

export const { auth: authMiddleware } = NextAuth(authConfig)

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/singin',
  },
  ...authConfig,
})
