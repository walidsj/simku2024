import { Flex } from '@mantine/core'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            mih={'96vh'}
            gap="md"
        >
            {children}
        </Flex>
    )
}
