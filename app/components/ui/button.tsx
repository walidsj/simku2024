'use client'

import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import { Fragment } from 'react'

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
                    'bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-center',
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
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
            {children}
        </button>
    )
}
