'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
    Tooltip,
    Title,
    rem,
    Button,
    Flex,
    NavLink,
    Skeleton,
} from '@mantine/core'
import { usePathname } from 'next/navigation'
import { mainLinksData, linksData } from './sidebar-data'
import { useSession } from 'next-auth/react'

const LinksSkeleton = () => {
    const LinkSkeleton = () => (
        <Flex direction="row" gap="xs">
            <Skeleton width={rem(30)} height={rem(30)} radius="md" />
            <Flex direction="column" gap="xs" flex={1}>
                <Skeleton width="100%" height={rem(10)} radius="md" />
                <Skeleton width="75%" height={rem(10)} radius="md" />
            </Flex>
        </Flex>
    )
    return (
        <Flex direction="column" gap="lg" p="md">
            {Array.from({ length: 5 }).map((_, i) => (
                <LinkSkeleton key={i} />
            ))}
        </Flex>
    )
}

const MainLinksSkeleton = () =>
    Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} width={rem(57.33)} height={rem(36)} radius="md" />
    ))

export default function Sidebar() {
    const pathname = usePathname()
    const [active, setActive] = useState('')
    const { data: session } = useSession()

    function isActiveLink(href: string) {
        const search = linksData.filter((link) => link.href.startsWith(href))
        if (search.length > 1) {
            return pathname === href
        } else {
            return pathname.startsWith(href)
        }
    }

    function getActiveParentLabel() {
        return linksData.find((link) => isActiveLink(link.href))?.parent
    }

    function isActiveParent(label: string) {
        return label === getActiveParentLabel()
    }

    const mainLinks = mainLinksData
        .filter((link) => {
            if (link.isAdmin) return session?.user.role === 'ADMIN'
            return true
        })
        .map((link, i) => (
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
                leftSection={<link.icon />}
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
                {session ? mainLinks : <MainLinksSkeleton />}
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
                    {session ? (
                        active || getActiveParentLabel()
                    ) : (
                        <Skeleton
                            width={rem(150)}
                            height={rem(24)}
                            radius="md"
                        />
                    )}
                </Title>
                <nav>{session ? links : <LinksSkeleton />}</nav>
            </Flex>
        </Flex>
    )
}
