import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'

export default async function middleware(
    req: NextRequest,
    event: NextFetchEvent
) {
    const token = await getToken({ req, secret: process.env.SECRET })

    if (req.nextUrl.pathname.startsWith('/auth')) {
        if (token) {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }
    }

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        const authMiddleware = withAuth({
            pages: {
                signIn: `/auth/login`,
            },
        })
        return authMiddleware(req as NextRequestWithAuth, event)
    }
}
