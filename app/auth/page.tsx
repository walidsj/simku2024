import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="font-semibold tracking-wider text-lg">
                Silakan Pilih Keperluan Anda
            </h2>
            <div className="grid grid-cols-2 gap-3">
                <Link
                    href="/auth/login"
                    className="p-3 rounded-lg bg-white border border-gray-300 shadow-md text-center hover:scale-105 transition-all hover:border-gray-700"
                >
                    <Image
                        src="/account.png"
                        width={100}
                        height={100}
                        alt="login"
                        className="mx-auto"
                    />
                    <h3 className="text-xl font-bold tracking-wide">Login</h3>
                    <div className="text-xs text-gray-500 tracking-wide">
                        Akses Aplikasi SIMKU-24
                    </div>
                </Link>
                <Link
                    href="/auth/register"
                    className="p-3 rounded-lg bg-white border border-gray-300 shadow-md text-center hover:scale-105 transition-all hover:border-gray-700"
                >
                    <Image
                        src="/register.png"
                        width={100}
                        height={100}
                        alt="login"
                        className="mx-auto"
                    />
                    <h3 className="text-xl font-bold tracking-wide">
                        Register
                    </h3>
                    <div className="text-xs text-gray-500 tracking-wide">
                        Registrasi Akun Baru
                    </div>
                </Link>
            </div>
            <Link
                href="/"
                className="mt-5 bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md"
            >
                Beranda
            </Link>
        </div>
    )
}
