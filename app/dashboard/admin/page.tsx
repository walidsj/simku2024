'use client'

import { Card, Grid, Paper, Title, Text } from '@mantine/core'
import { FiUsers } from 'react-icons/fi'

export default function Page() {
    return (
        <Paper>
            <Title order={2} mb="sm">
                Dashboard Admin
            </Title>
            <Grid>
                <Grid.Col span={2}>
                    <Card withBorder radius="md">
                        <FiUsers size={45} />
                        <Title order={4}>2 User</Title>
                        <Text>Jumlah User</Text>
                    </Card>
                </Grid.Col>
            </Grid>
        </Paper>
    )
}
