import Link from 'next/link'

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h2 className="font-semibold text-xl tracking-wider">
                Selamat Datang, Sahabat!
            </h2>
            <h3 className="font-black text-5xl flex flex-row gap-3 items-end">
                Aplikasi SIMKU
                <span className="bg-sky-500 text-white p-2 text-5xl rounded-xl -rotate-12">
                    24
                </span>
            </h3>
            <p className="text-xs text-center text-gray-500 tracking-wide">
                Simple as finest, as easy as possible
            </p>
            <Link
                href="/auth"
                className="mt-5 bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md"
            >
                Akses Aplikasi
            </Link>
        </main>
    )
}
