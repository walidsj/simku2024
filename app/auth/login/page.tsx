'use client'

import Link from 'next/link'
import {
    FiAlertCircle,
    FiArrowLeft,
    FiEye,
    FiEyeOff,
    FiLogIn,
} from 'react-icons/fi'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Fragment, useState } from 'react'
import { ActionIcon, Button, Card, Flex, TextInput, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SubmitButton } from '@/components/ui/button'

export default function Page() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [state, setState] = useState<{
        pending: boolean
        error: boolean
        message: string | null
    }>({
        pending: false,
        error: false,
        message: '',
    })

    const [showPassword, handleShowPassword] = useDisclosure(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setState((prevState) => ({ ...prevState, pending: true }))

        const result = await signIn('credentials', {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
            redirect: false,
        })

        if (result?.error) {
            setState((prevState) => ({
                ...prevState,
                pending: false,
                error: true,
                message: 'Invalid username or password',
            }))
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
                w={300}
            >
                <Flex direction="column" gap="md">
                    <Title fw={700} order={3}>
                        Masuk Aplikasi
                    </Title>

                    {state?.error && (
                        <p className="bg-red-50 border border-red-300 p-2 rounded-lg text-red-500 font-semibold text-sm inline-flex items-center gap-2">
                            <FiAlertCircle className="text-lg" />{' '}
                            {state.message}
                        </p>
                    )}
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
                        loading={state?.pending}
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
