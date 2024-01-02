import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/app/lib/prisma'
import bcrypt from 'bcrypt'

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const { username, password } = credentials as {
                    username: string
                    password: string
                }

                const user = await prisma.user.findFirst({
                    where: {
                        OR: [{ nip: username }, { email: username }],
                    },
                })

                if (!user) {
                    return null
                }

                const passwordMatch = bcrypt.compareSync(
                    password,
                    user.password
                )

                if (!passwordMatch) {
                    return null
                }

                return {
                    id: user.id,
                    nama: user.nama,
                    nip: user.nip,
                    email: user.email,
                    role: user.role,
                } as any
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }: any) {
            if (account?.provider === 'credentials') {
                token.id = user.id
                token.nama = user.nama
                token.nip = user.nip
                token.email = user.email
                token.role = user.role
            }
            return token
        },
        async session({ session, token }: any) {
            if ('id' in token) {
                session.user.id = token.id
            }
            if ('nama' in token) {
                session.user.nama = token.nama
            }
            if ('nip' in token) {
                session.user.nip = token.nip
            }
            if ('email' in token) {
                session.user.email = token.email
            }
            if ('role' in token) {
                session.user.role = token.role
            }

            return session
        },
    },
    pages: {
        signIn: '/auth/login',
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
