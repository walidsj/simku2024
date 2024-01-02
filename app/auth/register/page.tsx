'use client'

import { Button } from '@/app/components/ui/button'
import { createUser } from './actions'
import { useFormState } from 'react-dom'
import { initialFormState } from '@/app/types/form-state'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { FormGroup, FormInput, FormLabel } from '@/app/components/ui/form'

export default function Page() {
    const [state, formAction] = useFormState(
        createUser as any,
        initialFormState
    )

    return (
        <form
            action={formAction}
            className="p-6 rounded-lg bg-white border border-gray-300 shadow-md flex flex-col gap-3 w-96"
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
                    type="text"
                    id="nama"
                    name="nama"
                    errors={state?.errors?.nama}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="jabatan">Jabatan</FormLabel>
                <FormInput
                    type="text"
                    id="jabatan"
                    name="jabatan"
                    errors={state?.errors?.jabatan}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="nip">NIP</FormLabel>
                <FormInput
                    type="text"
                    id="nip"
                    name="nip"
                    errors={state?.errors?.nip}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    name="email"
                    errors={state?.errors?.email}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    errors={state?.errors?.password}
                />
            </FormGroup>

            <Button type="submit" className="mt-5">
                Daftar Akun
            </Button>
        </form>
    )
}
