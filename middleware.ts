import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export default async function middleware(req: NextRequest) {
    const token = await getToken({ req })

    if (req.nextUrl.pathname.startsWith('/auth')) {
        if (token) {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }
    }

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (!token || (token.exp as number) < Date.now() / 1000) {
            const redirectUrl = new URL('/auth/login', req.url)
            redirectUrl.searchParams.set('callbackUrl', encodeURI(req.url))
            return NextResponse.redirect(redirectUrl)
        }

        if (req.nextUrl.pathname.startsWith('/dashboard/admin')) {
            if (token.role !== 'ADMIN') {
                return NextResponse.redirect(new URL('/dashboard', req.url))
            }
        }

        return NextResponse.next()
    }
}
