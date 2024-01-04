import type { Metadata } from 'next'
import Providers from './providers'

import '@mantine/core/styles.css'
import { ColorSchemeScript } from '@mantine/core'

export const metadata: Metadata = {
    title: {
        default: 'Simku24',
        template: '%s | Simku24',
    },
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
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
