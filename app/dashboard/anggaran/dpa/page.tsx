'use client'

import { Button, Paper, Title } from '@mantine/core'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

export default function Page() {
    return (
        <Paper>
            <Title order={2} mb="sm">
                DPA BLUD
            </Title>
            <Button
                component={Link}
                href="/dashboard/anggaran/dpa/tambah"
                rightSection={<FiPlus />}
                variant="filled"
                color="dark"
                radius="md"
            >
                Tambah
            </Button>
        </Paper>
    )
}
