'use client'

import { useFormStatus } from 'react-dom'
import { ButtonProps, Button as MantineButton } from '@mantine/core'

export function SubmitButton({ children, ...props }: ButtonProps) {
    const { pending } = useFormStatus()

    return (
        <MantineButton
            {...props}
            type="submit"
            loading={pending || props?.loading}
            loaderProps={{ type: 'dots' }}
        >
            {children}
        </MantineButton>
    )
}
