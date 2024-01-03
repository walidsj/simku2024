'use client'

import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider>
            <SessionProvider>
                <Toaster
                    containerStyle={{
                        top: '6rem',
                    }}
                    toastOptions={{
                        style: {
                            border: 'calc(0.0625rem*var(--mantine-scale)) solid var(--mantine-color-gray-3)',
                        },
                    }}
                />
                {children}
            </SessionProvider>
        </MantineProvider>
    )
}
