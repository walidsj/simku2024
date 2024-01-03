'use client'

import { useSession } from 'next-auth/react'
import { Fragment } from 'react'

export default function Page() {
    const { data } = useSession()

    return (
        <Fragment>
            <h1 className="font-bold text-2xl">Dashboard</h1>

            {JSON.stringify(data?.user)}
        </Fragment>
    )
}
