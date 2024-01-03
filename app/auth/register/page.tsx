'use client'

import { Button } from '@/components/ui/button'
import { createUser } from './actions'
import { useFormState } from 'react-dom'
import { initialFormState } from '@/types/form-state'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { FormGroup, FormInput, FormLabel } from '@/components/ui/form'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Page() {
    const [state, formAction] = useFormState(
        createUser as any,
        initialFormState
    )

    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset()
        }
    }, [state?.success])

    return (
        <form
            ref={formRef}
            action={formAction}
            className="p-6 rounded-lg bg-white border border-gray-300 flex flex-col gap-3 w-96"
        >
            <h3 className="text-xl font-bold tracking-wide">Registrasi Akun</h3>
            {state?.success && (
                <p className="bg-green-50 border border-green-300 p-2 rounded-lg text-green-500 font-semibold text-sm inline-flex items-center gap-2">
                    <FiCheckCircle className="text-lg" /> {state.message}
                </p>
            )}
            {state?.error && (
                <p className="bg-red-50 border border-red-300 p-2 rounded-lg text-red-500 font-semibold text-sm inline-flex items-center gap-2">
                    <FiAlertCircle className="text-lg" /> {state.message}
                </p>
            )}
            <FormGroup>
                <FormLabel htmlFor="nama">Nama Lengkap</FormLabel>
                <FormInput
                    id="nama"
                    name="nama"
                    errors={state?.errors?.nama}
                    placeholder="Nama Lengkap"
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="jabatan">Jabatan</FormLabel>
                <FormInput
                    id="jabatan"
                    name="jabatan"
                    errors={state?.errors?.jabatan}
                    placeholder="Jabatan"
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="nip">NIP</FormLabel>
                <FormInput
                    id="nip"
                    name="nip"
                    errors={state?.errors?.nip}
                    placeholder="NIP"
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="email">Alamat Email</FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    name="email"
                    errors={state?.errors?.email}
                    placeholder="Alamat Email"
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    errors={state?.errors?.password}
                    placeholder="Password"
                    required
                />
            </FormGroup>
            <Button type="submit" className="mt-3">
                Daftar Akun
            </Button>

            <span>
                Sudah punya akun?{' '}
                <Link href="/auth/login" className="font-semibold text-sky-500">
                    Masuk
                </Link>
            </span>
        </form>
    )
}
