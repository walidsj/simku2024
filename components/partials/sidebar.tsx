'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiBook, FiFile, FiHome, FiPieChart } from 'react-icons/fi'
import { Tooltip, Title, rem, Button, Flex, NavLink } from '@mantine/core'
import { usePathname } from 'next/navigation'

const mainLinksMockdata = [
    { icon: FiHome, label: 'Beranda' },
    { icon: FiPieChart, label: 'Anggaran' },
    { icon: FiBook, label: 'Penatausahaan' },
]

const linksMockdata = [
    {
        icon: FiHome,
        label: 'Dashboard',
        description: 'Halaman Ringkasan',
        href: '/dashboard',
    },
    {
        icon: FiFile,
        label: 'DPA',
        description: 'Daftar Pelaksanaan Anggaran',
        href: '/dashboard/anggaran/dpa',
    },
    {
        icon: FiFile,
        label: 'Pengajuan UP',
        description: 'Uang Persediaan',
        href: '/dashboard/penatausahaan/pengajuan-up',
    },
]

export default function Sidebar() {
    const pathname = usePathname()
    const [active, setActive] = useState('Beranda')

    const mainLinks = mainLinksMockdata.map((link, i) => (
        <Tooltip
            key={i}
            label={link.label}
            position="right"
            withArrow
            transitionProps={{ duration: 0 }}
        >
            <Button
                variant={link.label === active ? 'filled' : 'subtle'}
                color="dark"
                onClick={() => setActive(link.label)}
                fz="xl"
                radius="md"
            >
                <link.icon />
            </Button>
        </Tooltip>
    ))

    const links = linksMockdata.map((link, i) => (
        <NavLink
            key={i}
            component={Link}
            href={link.href}
            color="dark"
            active={pathname === link.href}
            label={link.label}
            description={link.description}
            leftSection={<FiBook />}
        />
    ))

    return (
        <Flex w={rem(350)}>
            <Flex
                direction="column"
                gap="xs"
                p="sm"
                style={{
                    borderRight: '1px solid #dee2e6',
                }}
            >
                {mainLinks}
            </Flex>
            <Flex
                direction="column"
                flex={1}
                p={0}
                style={{
                    borderRight: '1px solid #dee2e6',
                }}
            >
                <Title
                    order={4}
                    p="md"
                    style={{
                        borderBottom: '1px solid #dee2e6',
                    }}
                >
                    {active}
                </Title>
                <nav>{links}</nav>
            </Flex>
        </Flex>
    )
}
