'use client'

import { useFormStatus } from 'react-dom'
import { FiLoader } from 'react-icons/fi'
import clsx from 'clsx'

export function Button({
    children,
    ...props
}: {
    children: React.ReactNode
    type: string
    className: string | undefined
}) {
    const { pending } = useFormStatus()

    if (props.type === 'submit') {
        return (
            <button
                disabled={pending}
                type="submit"
                className={clsx(
                    'bg-black text-white font-semibold tracking-wider py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-center',
                    props.className
                )}
            >
                {pending ? (
                    <FiLoader className="animate-spin text-2xl mx-auto" />
                ) : (
                    children
                )}
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
