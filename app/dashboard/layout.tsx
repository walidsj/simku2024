import { Metadata } from 'next'
import { Fragment } from 'react'
import Header from '@/components/partials/header'
import Sidebar from '@/components/partials/sidebar'

export const metadata: Metadata = {
    title: 'Dashboard',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <Header />
            <main className="container mx-auto py-5 flex flex-row gap-6">
                <div className="w-60">
                    <Sidebar />
                </div>
                <div className="flex-1">{children}</div>
            </main>
        </Fragment>
    )
}
