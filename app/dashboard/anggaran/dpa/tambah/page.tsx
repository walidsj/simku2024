'use client'

import { SubmitButton } from '@/components/ui/button'
import { Card, Flex, Paper, TextInput, Title } from '@mantine/core'
import { FiPlus } from 'react-icons/fi'

export default function Page() {
    return (
        <Paper>
            <Title order={2} mb="sm">
                Tambah Data DPA
            </Title>
            <Card
                component="form"
                padding="lg"
                withBorder
                radius="md"
                w="25rem"
            >
                <Flex direction="column" gap="md">
                    <TextInput
                        name="nama"
                        label="Nama Lengkap"
                        placeholder="Nama Lengkap"
                        description="Nama lengkap dengan gelar."
                        radius="md"
                        required
                    />
                    <TextInput
                        name="jabatan"
                        label="Jabatan"
                        placeholder="Jabatan"
                        description="Jabatan Struktural, JFU, atau JFT."
                        radius="md"
                        required
                    />
                    <TextInput
                        name="nip"
                        label="NIP"
                        placeholder="NIP"
                        radius="md"
                        required
                    />
                    <TextInput
                        name="email"
                        type="email"
                        label="Alamat Email"
                        placeholder="Alamat Email"
                        description="Alamat email aktif yang dapat dihubungi."
                        radius="md"
                        required
                    />

                    <SubmitButton
                        leftSection={<FiPlus />}
                        color="dark"
                        radius="md"
                    >
                        Tambah Data
                    </SubmitButton>
                </Flex>
            </Card>
        </Paper>
    )
}
