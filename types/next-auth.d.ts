import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            id: string
            nama: string
            nip: string
            jabatan: string
            email: string
            role: string
        }
    }
}
