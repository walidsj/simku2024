'use client'

import { Button } from '@/components/ui/button'
import { FormGroup, FormInput, FormLabel } from '@/components/ui/form'
import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Tambah Data DPA</h1>
            <form className="p-6 rounded-lg bg-white border border-gray-300 flex flex-col gap-3 w-96">
                <FormGroup>
                    <FormLabel htmlFor="nama">Nama Lengkap</FormLabel>
                    <FormInput
                        id="nama"
                        name="nama"
                        placeholder="Nama Lengkap"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="jabatan">Jabatan</FormLabel>
                    <FormInput
                        id="jabatan"
                        name="jabatan"
                        placeholder="Jabatan"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="nip">NIP</FormLabel>
                    <FormInput id="nip" name="nip" placeholder="NIP" required />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="email">Alamat Email</FormLabel>
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
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
                        placeholder="Password"
                        required
                    />
                </FormGroup>
                <Button type="submit" className="mt-3">
                    Simpan Data
                </Button>
            </form>
        </div>
    )
}
