'use client'

import { SubmitButton } from '@/components/ui/button'
import { createUser } from './actions'
import { useFormState } from 'react-dom'
import { initialFormState } from '@/types/form-state'
import {
    FiAlertCircle,
    FiArrowLeft,
    FiCheckCircle,
    FiEye,
    FiEyeOff,
    FiUserPlus,
} from 'react-icons/fi'
import Link from 'next/link'
import { Fragment, useEffect, useRef } from 'react'
import { Card, Flex, Title, Button, TextInput, ActionIcon } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function Page() {
    const [state, formAction] = useFormState(
        createUser as any,
        initialFormState
    )

    const [showPassword, handleShowPassword] = useDisclosure(false)

    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset()
        }
    }, [state?.success])

    return (
        <Fragment>
            <Card
                component="form"
                ref={formRef}
                action={formAction}
                padding="lg"
                withBorder
                radius="md"
                w={350}
            >
                <Flex direction="column" gap="md">
                    <Title fw={700} order={3}>
                        Registrasi Akun
                    </Title>

                    {state?.success && (
                        <p className="bg-green-50 border border-green-300 p-2 rounded-lg text-green-500 font-semibold text-sm inline-flex items-center gap-2">
                            <FiCheckCircle className="text-lg" />{' '}
                            {state.message}
                        </p>
                    )}
                    {state?.error && (
                        <p className="bg-red-50 border border-red-300 p-2 rounded-lg text-red-500 font-semibold text-sm inline-flex items-center gap-2">
                            <FiAlertCircle className="text-lg" />{' '}
                            {state.message}
                        </p>
                    )}
                    <TextInput
                        name="nama"
                        label="Nama Lengkap"
                        placeholder="Nama Lengkap"
                        error={state?.errors?.nama}
                        radius="md"
                        required
                    />
                    <TextInput
                        name="jabatan"
                        label="Jabatan"
                        placeholder="Jabatan"
                        error={state?.errors?.jabatan}
                        description="Jabatan Struktural/JFU/JFT."
                        radius="md"
                        required
                    />
                    <TextInput
                        name="nip"
                        label="NIP"
                        placeholder="NIP"
                        error={state?.errors?.nip}
                        radius="md"
                        required
                    />
                    <TextInput
                        name="email"
                        type="email"
                        label="Alamat Email"
                        placeholder="Alamat Email"
                        error={state?.errors?.email}
                        radius="md"
                        required
                    />
                    <TextInput
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        placeholder="Password"
                        error={state?.errors?.password}
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
                        leftSection={<FiUserPlus />}
                        color="dark"
                        radius="md"
                    >
                        Daftar Akun
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
