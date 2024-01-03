import { Title, Text, Button, Flex } from '@mantine/core'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Page() {
    return (
        <Flex justify="center" align="center" direction="column" mih={'96vh'}>
            <Title order={1} fw={900}>
                Aplikasi #Simku24
            </Title>
            <Text c="dimmed" mb="md">
                Simple as finest, as easy as possible
            </Text>

            <Button
                component={Link}
                href="/auth"
                rightSection={<FiArrowRight />}
                variant="filled"
                color="dark"
                radius="md"
            >
                Akses Aplikasi
            </Button>
        </Flex>
    )
}
