import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SIMKU-24',
    description:
        'Aplikasi Sistem Informasi Keuangan BLUD RSJD Atma Husada Mahakam Tahun 2024',
    authors: [
        {
            name: 'Moh. Walid Arkham Sani, A.Md.Pnl.',
            url: 'https://www.instagram.com/walidassani/',
        },
        {
            name: 'Lokakarja',
            url: 'https://www.instagram.com/lokakarja/',
        },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
