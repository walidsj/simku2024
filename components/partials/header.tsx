'use client'

import {
    Avatar,
    Card,
    Flex,
    Group,
    NavLink,
    Popover,
    Skeleton,
    Text,
    Title,
    rem,
} from '@mantine/core'
import { signOut, useSession } from 'next-auth/react'
import { FiChevronDown, FiPower } from 'react-icons/fi'

export default function Header() {
    const { data: session, status } = useSession()

    return (
        <Flex
            mx="auto"
            direction="row"
            justify="space-between"
            align="center"
            px="lg"
            mih={rem(70)}
            w="100%"
            style={{
                borderBottom: '1px solid #dee2e6',
            }}
        >
            <Flex fw={800} gap="md" align="center" direction="row" fs="xl">
                <Flex direction="column">
                    <Title order={1} fw={800} fz="xl">
                        SIMKU24
                    </Title>
                    <Text c="dimmed" fz="xs" mt={rem(-3)}>
                        Simple as finest, as easy as possible
                    </Text>
                </Flex>
            </Flex>
            <Popover
                width="target"
                trapFocus
                position="bottom"
                withArrow
                shadow="md"
                radius="md"
                disabled={status !== 'authenticated'}
            >
                <Popover.Target>
                    <Card
                        component="button"
                        radius="md"
                        style={{ textAlign: 'left', cursor: 'pointer' }}
                    >
                        <Flex align="center" direction="row" gap="md">
                            {status === 'authenticated' ? (
                                <Group>
                                    <Avatar
                                        src={null}
                                        alt={session?.user?.nama}
                                        color="dark"
                                        radius="xl"
                                    >
                                        {session?.user?.nama
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')
                                            .substring(0, 2)}
                                    </Avatar>
                                    <Card p={0} style={{ flex: 1 }}>
                                        <Text size="sm" fw={500}>
                                            {session?.user?.nama}
                                        </Text>

                                        <Text c="dimmed" size="xs">
                                            {session?.user?.jabatan}
                                        </Text>
                                    </Card>
                                    <FiChevronDown />
                                </Group>
                            ) : (
                                <Group>
                                    <Skeleton height={rem(38)} circle />
                                    <Card p={0} style={{ flex: 1 }}>
                                        <Skeleton
                                            height={rem(15)}
                                            width={rem(200)}
                                            radius="md"
                                            mb={rem(5)}
                                        />
                                        <Skeleton
                                            height={rem(10)}
                                            width={rem(150)}
                                            radius="md"
                                        />
                                    </Card>
                                    <FiChevronDown />
                                </Group>
                            )}
                        </Flex>
                    </Card>
                </Popover.Target>
                <Popover.Dropdown p="xs">
                    <NavLink
                        onClick={() => signOut()}
                        label="Logout"
                        description="Keluar dari aplikasi"
                        leftSection={<FiPower size={20} />}
                    />
                </Popover.Dropdown>
            </Popover>
        </Flex>
    )
}
