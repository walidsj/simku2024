'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiBook, FiFile, FiHome, FiPieChart } from 'react-icons/fi'
import { Tooltip, Title, rem, Button, Flex, NavLink } from '@mantine/core'
import { usePathname } from 'next/navigation'

const mainLinksData = [
    { icon: FiHome, label: 'Beranda' },
    { icon: FiPieChart, label: 'Anggaran' },
    { icon: FiBook, label: 'Penatausahaan' },
]

const linksData = [
    {
        icon: FiHome,
        label: 'Dashboard',
        description: 'Halaman Ringkasan',
        href: '/dashboard',
        parent: 'Beranda',
    },
    {
        icon: FiFile,
        label: 'DPA',
        description: 'Daftar Pelaksanaan Anggaran',
        href: '/dashboard/anggaran/dpa',
        parent: 'Anggaran',
    },
    {
        icon: FiFile,
        label: 'Pengajuan UP',
        description: 'Uang Persediaan',
        href: '/dashboard/penatausahaan/pengajuan-up',
        parent: 'Penatausahaan',
    },
]

export default function Sidebar() {
    const pathname = usePathname()
    const [active, setActive] = useState('')

    function isActiveLink(href: string) {
        if (href === '/dashboard') {
            if (pathname === href) return true
            return false
        } else {
            if (pathname.startsWith(href)) return true
        }
        return false
    }

    function getActiveParentLabel() {
        return linksData.find((link) => isActiveLink(link.href))?.parent
    }

    function isActiveParent(label: string) {
        return label === getActiveParentLabel()
    }

    const mainLinks = mainLinksData.map((link, i) => (
        <Tooltip
            key={i}
            label={link.label}
            position="right"
            withArrow
            transitionProps={{ duration: 0 }}
        >
            <Button
                variant={
                    active
                        ? link.label === active
                            ? 'filled'
                            : 'subtle'
                        : isActiveParent(link.label)
                        ? 'filled'
                        : 'subtle'
                }
                color="dark"
                onClick={() => setActive(link.label)}
                fz="xl"
                radius="md"
            >
                <link.icon />
            </Button>
        </Tooltip>
    ))

    const links = linksData
        .filter((link) => {
            if (!active) return link.parent === getActiveParentLabel()
            return link.parent === active
        })
        .map((link, i) => (
            <NavLink
                key={i}
                component={Link}
                href={link.href}
                color="dark"
                active={isActiveLink(link.href)}
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
                    {active || getActiveParentLabel()}
                </Title>
                <nav>{links}</nav>
            </Flex>
        </Flex>
    )
}
