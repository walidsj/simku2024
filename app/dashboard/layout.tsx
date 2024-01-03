import { Metadata } from 'next'
import Header from '@/components/partials/header'
import Sidebar from '@/components/partials/sidebar'
import { Flex } from '@mantine/core'

export const metadata: Metadata = {
    title: 'Dashboard',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Flex direction="column">
            <Header />
            <Flex direction="row">
                <Sidebar />
                <Flex flex={1} p="xl" direction="column">
                    {children}
                </Flex>
            </Flex>
        </Flex>
    )
}
