import { Paper, Skeleton, rem } from '@mantine/core'

export default function Loading() {
    return (
        <Paper>
            <Skeleton height={rem(35)} radius="md" width="30%" mb="md" />
            <Skeleton height={rem(12)} mt="xs" radius="md" />
            <Skeleton height={rem(12)} mt="xs" radius="md" />
            <Skeleton height={rem(12)} mt="xs" radius="md" />
            <Skeleton height={rem(12)} mt="xs" radius="md" />
            <Skeleton height={rem(12)} mt="xs" width="70%" radius="md" />
        </Paper>
    )
}
