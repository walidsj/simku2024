'use client'

import {
    Avatar,
    Card,
    Flex,
    Group,
    NavLink,
    Popover,
    Text,
} from '@mantine/core'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FiChevronDown, FiPower } from 'react-icons/fi'

export default function Header() {
    const { data, status } = useSession()

    return (
        <header className="sticky top-0 z-10 border-b border-gray-300 bg-white">
            <div className="mx-auto flex flex-row justify-between px-5">
                <Link
                    href="/dashboard"
                    className="font-extrabold text-3xl flex flex-row gap-3 items-center"
                >
                    <span className="bg-black text-white p-1 text-2xl rounded-xl -rotate-12 scale-110 hover:shadow-md transition-all">
                        24
                    </span>
                    <div className="flex flex-col">
                        <h3>SIMKU</h3>
                        <p className="text-xs font-medium text-center text-gray-500 -mt-1">
                            Simple as finest, as easy as possible
                        </p>
                    </div>
                </Link>
                <Popover
                    width="target"
                    trapFocus
                    position="bottom"
                    withArrow
                    shadow="md"
                    radius="md"
                >
                    <Popover.Target>
                        <Card
                            component="button"
                            radius="md"
                            style={{ textAlign: 'left' }}
                        >
                            <Flex align="center" direction="row" gap="md">
                                {status === 'authenticated' && (
                                    <Group>
                                        <Avatar
                                            src={null}
                                            alt={data?.user?.nama}
                                            color="dark"
                                            radius="xl"
                                        >
                                            {data?.user?.nama
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')
                                                .substring(0, 2)}
                                        </Avatar>
                                        <div style={{ flex: 1 }}>
                                            <Text size="sm" fw={500}>
                                                {data?.user?.nama}
                                            </Text>

                                            <Text c="dimmed" size="xs">
                                                {data?.user?.nip}
                                            </Text>
                                        </div>
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
            </div>
        </header>
    )
}
