'use client'

import { SubmitButton } from '@/components/ui/button'
import { createUser } from './actions'
import { useFormState } from 'react-dom'
import { initialFormState } from '@/types/form-state'
import { FiArrowLeft, FiEye, FiEyeOff, FiUserPlus } from 'react-icons/fi'
import Link from 'next/link'
import { Fragment, useEffect, useRef } from 'react'
import { Card, Flex, Title, Button, TextInput, ActionIcon } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()

    const [state, formAction] = useFormState(
        createUser as any,
        initialFormState
    )

    const [showPassword, handleShowPassword] = useDisclosure(false)

    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        switch (state?.success) {
            case true:
                toast.success(state?.message)
                router.push('/auth/login')
                break
            case false:
                toast.error(state?.message)
                break
        }
    }, [state])

    return (
        <Fragment>
            <Card
                component="form"
                ref={formRef}
                action={formAction}
                padding="lg"
                withBorder
                radius="md"
                w="25rem"
            >
                <Flex direction="column" gap="md">
                    <Title fw={700} order={3}>
                        Registrasi Akun
                    </Title>
                    <TextInput
                        name="nama"
                        label="Nama Lengkap"
                        placeholder="Nama Lengkap"
                        error={state?.errors?.nama}
                        description="Nama lengkap dengan gelar."
                        radius="md"
                        required
                    />
                    <TextInput
                        name="jabatan"
                        label="Jabatan"
                        placeholder="Jabatan"
                        error={state?.errors?.jabatan}
                        description="Jabatan Struktural, JFU, atau JFT."
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
                        description="Alamat email aktif yang dapat dihubungi."
                        radius="md"
                        required
                    />
                    <TextInput
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        placeholder="Password"
                        error={state?.errors?.password}
                        description="Minimal 8 karakter."
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
