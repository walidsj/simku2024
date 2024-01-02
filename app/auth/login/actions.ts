'use server'

import { PrevState } from '@/app/types/form-state'
import { z } from 'zod'
import prisma from '@/app/lib/prisma'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

export async function authenticateUser(
    prevState: PrevState,
    formData: FormData
) {
    const schema = z.object({
        username: z.string(),
        password: z.string(),
    })

    const validatedFields = await schema.safeParseAsync({
        username: formData.get('username'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            error: true,
            message: 'Data yang anda masukkan tidak valid.',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { username, password } = validatedFields.data

    const user = await prisma.user.findFirst({
        where: {
            OR: [{ nip: username }, { email: username }],
        },
    })

    if (!user) {
        return {
            error: true,
            message: 'Email/NIP tidak terdaftar.',
        }
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return {
            error: true,
            message: 'Password yang anda masukkan salah.',
        }
    }

    return redirect('/dashboard')
}
