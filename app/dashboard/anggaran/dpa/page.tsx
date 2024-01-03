'use client'

import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">DPA BLUD</h1>
            <div>
                <Link
                    href="/dashboard/anggaran/dpa/tambah"
                    className="bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all"
                >
                    Tambah
                </Link>
            </div>
        </div>
    )
}
