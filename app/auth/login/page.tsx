'use client'

import { Button } from '@/app/components/ui/button'
import Link from 'next/link'
import { FiAlertCircle } from 'react-icons/fi'
import { FormGroup, FormInput, FormLabel } from '@/app/components/ui/form'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

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
        <form
            onSubmit={handleSubmit}
            className="p-6 rounded-lg bg-white border border-gray-300 shadow-md flex flex-col gap-3 w-80"
        >
            <h3 className="text-xl font-bold tracking-wide">Login</h3>

            {state?.error && (
                <p className="bg-red-50 border border-red-300 p-2 rounded-lg text-red-500 font-semibold text-sm inline-flex items-center gap-2">
                    <FiAlertCircle className="text-lg" /> {state.message}
                </p>
            )}
            <FormGroup>
                <FormLabel htmlFor="username">Email/NIP</FormLabel>
                <FormInput id="username" name="username" required />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    required
                />
            </FormGroup>
            <Button isLoading={state?.pending} type="submit">
                Login
            </Button>
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
