'use client'

import clsx from 'clsx'
import React, { Fragment } from 'react'
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
    errors,
    ...props
}: {
    errors: string[] | undefined
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <Fragment>
            <input
                className={clsx(
                    'py-2 px-4 border rounded-lg w-full',
                    errors ? 'border-red-300' : 'border-gray-300'
                )}
                {...props}
            />

            {errors && (
                <ol className="text-xs text-red-500 tracking-wide pt-2">
                    {errors?.map((error: string, i: number) => (
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
