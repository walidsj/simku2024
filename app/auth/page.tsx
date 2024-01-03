'use client'

import { Card, Button, Title, Grid, Group, Text } from '@mantine/core'
import Link from 'next/link'
import { Fragment } from 'react'
import { FiHome, FiLogIn, FiUserPlus } from 'react-icons/fi'

export default function Page() {
    return (
        <Fragment>
            <Grid w={480}>
                <Grid.Col span={6}>
                    <Card padding="lg" withBorder radius="md">
                        <Group mb="md">
                            <Title fw={700} order={3}>
                                Masuk Aplikasi
                            </Title>
                            <Text c="dimmed" size="sm">
                                Login untuk mengakses aplikasi.
                            </Text>
                        </Group>
                        <Button
                            component={Link}
                            href="/auth/login"
                            rightSection={<FiLogIn />}
                            fullWidth
                            color="dark"
                            radius="md"
                        >
                            Login
                        </Button>
                    </Card>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Card padding="lg" withBorder radius="md">
                        <Group mb="md">
                            <Title fw={700} order={3}>
                                Registrasi Akun
                            </Title>
                            <Text c="dimmed" size="sm">
                                Belum memiliki akun? Registrasi akun dulu.
                            </Text>
                        </Group>
                        <Button
                            component={Link}
                            href="/auth/register"
                            rightSection={<FiUserPlus />}
                            fullWidth
                            color="dark"
                            radius="md"
                        >
                            Register
                        </Button>
                    </Card>
                </Grid.Col>
            </Grid>
            <Button
                component={Link}
                href="/"
                variant="subtle"
                leftSection={<FiHome />}
                color="dark"
                radius="md"
            >
                Beranda
            </Button>
        </Fragment>
    )
}
