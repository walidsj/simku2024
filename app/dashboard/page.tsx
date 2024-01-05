'use client'

import { Card, Grid, Paper, Title, Text } from '@mantine/core'
import { useSession } from 'next-auth/react'
import { Sparkline } from '@mantine/charts'

export default function Page() {
    const { data } = useSession()

    return (
        <Paper>
            <Title order={2} mb="sm">
                Dashboard
            </Title>
            <Grid>
                <Grid.Col span={3}>
                    <Card withBorder radius="md">
                        <Sparkline
                            h={100}
                            data={[
                                10, 20, 40, 20, 40, 10, 50, 10, 20, 40, 20, 40,
                            ]}
                            curveType="bump"
                            color="red"
                            fillOpacity={0.6}
                            strokeWidth={2}
                        />
                        <Title order={4}>Anggaran Belanja BLUD</Title>
                        <Text>Rp 0,00</Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder radius="md">
                        <Sparkline
                            h={100}
                            data={[
                                10, 20, 40, 20, 40, 10, 50, 10, 20, 40, 20, 40,
                            ]}
                            curveType="bump"
                            color="teal"
                            fillOpacity={0.6}
                            strokeWidth={2}
                        />
                        <Title order={4}>Realisasi Belanja BLUD</Title>
                        <Text>Rp 0,00</Text>
                    </Card>
                </Grid.Col>
            </Grid>
        </Paper>
    )
}
