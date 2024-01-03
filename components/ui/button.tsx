'use client'

import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import { Fragment } from 'react'
import { ButtonProps, Button as MantineButton } from '@mantine/core'

const LoadingIndicator = () => (
    <Fragment>
        <div className="flex gap-2 py-2 justify-center items-center">
            <span className="sr-only">Loading...</span>
            <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
        </div>
    </Fragment>
)

export function Button({
    children,
    ...props
}: {
    children: React.ReactNode
    isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { pending } = useFormStatus()

    if (props.type === 'submit') {
        return (
            <button
                disabled={pending || props?.isLoading}
                type="submit"
                className={clsx(
                    'bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-center',
                    props.className
                )}
            >
                {pending || props?.isLoading ? <LoadingIndicator /> : children}
            </button>
        )
    }

    return (
        <button
            type="button"
            className="bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-center"
        >
            {children}
        </button>
    )
}

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
