'use client'

import { Button } from '@/app/components/ui/button'
import { initialFormState } from '@/app/types/form-state'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { authenticateUser } from './actions'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { FormGroup, FormInput, FormLabel } from '@/app/components/ui/form'

export default function Page() {
    const [state, formAction] = useFormState(
        authenticateUser as any,
        initialFormState
    )

    return (
        <form
            action={formAction}
            className="p-6 rounded-lg bg-white border border-gray-300 shadow-md flex flex-col gap-3 w-80"
        >
            <h3 className="text-xl font-bold tracking-wide">Login</h3>
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
                <FormLabel htmlFor="username">Email/NIP</FormLabel>
                <FormInput
                    id="username"
                    name="username"
                    errors={state?.errors?.username}
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
            <Button type="submit">Login</Button>
            <span>
                Belum punya akun?{' '}
                <Link
                    href="/auth/register"
                    className="font-semibold text-sky-500"
                >
                    Registrasi
                </Link>
            </span>
        </form>
    )
}
