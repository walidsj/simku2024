'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FiPower } from 'react-icons/fi'

export default function Header() {
    const { data, status } = useSession()

    return (
        <header className="sticky top-0 z-10 border-b border-gray-300 bg-white">
            <div className="container mx-auto py-3 flex flex-row justify-between">
                <Link
                    href="/dashboard"
                    className="font-extrabold text-3xl flex flex-row gap-2 items-center"
                >
                    <span className="bg-black text-white p-1 text-2xl rounded-xl -rotate-12 scale-110 hover:shadow-md transition-all">
                        24
                    </span>
                    <div className="flex flex-col">
                        <h3>SIMKU</h3>
                        <p className="text-xs font-medium text-center text-gray-500 -mt-1">
                            Simple as finest, as easy as possible
                        </p>
                    </div>
                </Link>
                <div className="flex flex-row gap-3 items-center py-2 px-3 border border-gray-300 rounded-lg transition-all hover:border-gray-700">
                    {status === 'authenticated' && (
                        <p className="flex flex-col">
                            <span className="text-sm font-semibold tracking-wide">
                                {data?.user?.nama}
                            </span>
                            <span className="text-xs tracking-wide">
                                NIP. {data?.user?.nip}
                            </span>
                        </p>
                    )}
                    <button
                        onClick={() => signOut()}
                        className="bg-black text-white p-3 text-lg rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
                    >
                        <FiPower />
                    </button>
                </div>
            </div>
        </header>
    )
}
