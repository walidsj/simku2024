'use server'

import { PrevState } from '@/types/form-state'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export async function createUser(prevState: PrevState, formData: FormData) {
    const schema = z.object({
        nama: z.string().min(5).max(255),
        jabatan: z.string().min(5).max(255),
        nip: z
            .string()
            .length(18)
            .refine(
                async (val) =>
                    !(await prisma.user.findUnique({
                        where: {
                            nip: val,
                        },
                    })),
                {
                    message: 'NIP sudah digunakan.',
                }
            ),
        email: z
            .string()
            .email()
            .refine(
                async (val) =>
                    !(await prisma.user.findUnique({
                        where: {
                            email: val,
                        },
                    })),
                {
                    message: 'Email sudah digunakan.',
                }
            ),
        password: z.string().min(8),
    })

    const validatedFields = await schema.safeParseAsync({
        nama: formData.get('nama'),
        jabatan: formData.get('jabatan'),
        nip: formData.get('nip'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            error: true,
            message: 'Data yang anda masukkan tidak valid.',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { nama, jabatan, nip, email, password } = validatedFields.data

    const user = await prisma.user.create({
        data: {
            nama,
            jabatan,
            nip,
            email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        },
    })

    if (!user) {
        return {
            error: true,
            message: 'Terjadi kesalahan saat membuat user baru.',
        }
    }

    return {
        success: true,
        message: `User ${user.nama} berhasil dibuat.`,
    }
}
