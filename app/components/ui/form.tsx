'use client'

import clsx from 'clsx'
import { Fragment } from 'react'
import { FiXCircle } from 'react-icons/fi'

export function FormGroup({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="w-full" {...props}>
            {children}
        </div>
    )
}

export function FormLabel({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label className="text-sm font-semibold tracking-wide" {...props}>
            {children}
        </label>
    )
}

export function FormInput({
    ...props
}: {
    errors?: string[]
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <Fragment>
            <input
                className={clsx(
                    'py-2 px-4 border rounded-lg w-full',
                    props?.errors ? 'border-red-300' : 'border-gray-300'
                )}
                {...props}
            />

            {props?.errors && (
                <ol className="text-xs text-red-500 tracking-wide pt-2">
                    {props.errors?.map((error: string, i: number) => (
                        <li key={i} className="inline-flex gap-1 items-center">
                            <FiXCircle />
                            {error}
                        </li>
                    ))}
                </ol>
            )}
        </Fragment>
    )
}
