import Header from '@/components/partials/header'
import Sidebar from '@/components/partials/sidebar'
import { Card, Flex, ScrollArea, rem } from '@mantine/core'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Flex direction="column" justify="space-between" mih="100vh">
            <Header />
            <Flex direction="row" flex={1}>
                <Sidebar />
                <Card
                    flex={1}
                    p={0}
                    component={ScrollArea}
                    scrollbars="y"
                    mah={`calc(100vh - ${rem(75)})`}
                >
                    <Card p="lg">{children}</Card>
                </Card>
            </Flex>
        </Flex>
    )
}
