import * as React from 'react'
import {
    Container,
    Button,
    Link,
    Stack,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material'

export default function Planting() {

    function createData(
        batchId: string,
        plantedSeed: string,
        plantedStatus: string,
        plantedDate: Date
    ) {
    return { batchId, plantedSeed, plantedStatus, plantedDate };
    }

    const rows = [
        createData('batch1', 'brocolli', 'New', new Date(121212)),
        createData('batch2', 'brocolli', 'New', new Date(131212)),
        createData('batch3', 'brocolli', 'New', new Date(121212)),
        createData('batch4', 'brocolli', 'New', new Date(121212)),
    ]

    return (
        <Container>
            <Stack direction='row'>
                <h2>Planting</h2>.
                <Button><Link>Create Batch</Link></Button>
            </Stack>
            <TableContainer>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Batch ID</TableCell>
                            <TableCell>Seed</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.batchId}>
                                <TableCell><Link>{row.batchId}</Link></TableCell>
                                <TableCell>{row.plantedSeed}</TableCell>
                                <TableCell>{row.plantedStatus}</TableCell>
                                <TableCell>{row.plantedDate.toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )

}