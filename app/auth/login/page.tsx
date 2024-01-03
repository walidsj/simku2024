'use client'

import Link from 'next/link'
import { FiArrowLeft, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Fragment, useState } from 'react'
import { ActionIcon, Button, Card, Flex, TextInput, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SubmitButton } from '@/components/ui/button'
import toast from 'react-hot-toast'

export default function Page() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [pending, setPending] = useState<boolean>(false)

    const [showPassword, handleShowPassword] = useDisclosure(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setPending((prev) => !prev)

        const result = await signIn('credentials', {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
            redirect: false,
        })

        if (result?.error) {
            toast.error('Username dan password salah.')
            setPending((prev) => !prev)
        }

        if (result?.ok) {
            const callbackUrl = searchParams.get('callbackUrl')

            router.push(callbackUrl || '/dashboard')
        }
    }

    return (
        <Fragment>
            <Card
                component="form"
                onSubmit={handleSubmit}
                padding="lg"
                withBorder
                radius="md"
                w="20rem"
            >
                <Flex direction="column" gap="md">
                    <Title fw={700} order={3}>
                        Login Aplikasi
                    </Title>
                    <TextInput
                        name="username"
                        label="Alamat Email/NIP"
                        placeholder="Alamat Email/NIP"
                        radius="md"
                        required
                    />
                    <TextInput
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        placeholder="Password"
                        radius="md"
                        required
                        rightSection={
                            <ActionIcon
                                onClick={() => handleShowPassword.toggle()}
                                component={showPassword ? FiEyeOff : FiEye}
                                variant="subtle"
                                size="xs"
                                color="gray"
                            />
                        }
                    />
                    <SubmitButton
                        loading={pending}
                        leftSection={<FiLogIn />}
                        color="dark"
                        radius="md"
                    >
                        Login
                    </SubmitButton>
                </Flex>
            </Card>
            <Button
                component={Link}
                href="/auth"
                variant="subtle"
                leftSection={<FiArrowLeft />}
                color="dark"
                radius="md"
            >
                Kembali
            </Button>
        </Fragment>
    )
}
