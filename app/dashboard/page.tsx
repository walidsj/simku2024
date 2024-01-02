'use client'

import { signOut, useSession } from 'next-auth/react'

export default function Page() {
    const { data: session, status } = useSession()

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            Dashboard Page
            <br />
            {JSON.stringify(session?.user)}
            {status === 'authenticated' && (
                <button
                    onClick={() => signOut()}
                    className="bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md"
                >
                    Logout
                </button>
            )}
        </main>
    )
}
