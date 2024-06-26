import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import {
    Button,
    Container, 
    MenuItem, 
    TextField,
    Typography,
} from '@mui/material'

import { BatchFormData } from '../../interfaces'

interface BatchFormProps {
    onSubmit: (formData: BatchFormData) => void
}

const CreateBatchForm = () => {
    const [seedType, setSeedType] = useState('')
    const [batchWeight, setBatchWeight] = useState(0)
    const [traysAmount, setTraysAmount] = useState(0)

    const seedTypes = ["Brocolli", "Wheat Grass", "Wasabi"]
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //onSubmit({seedType, batchWeight, traysAmount})
        setSeedType('')
        setBatchWeight(0)
        setTraysAmount(0)
    }

    const handleCancel = () => {
        navigate('/growing')
    }

    return (
        <Container>
            <Typography variant='h5' gutterBottom>Create New Batch</Typography>
            <Form onSubmit={handleSubmit}>
                <TextField
                    select
                    label="Seed Type"
                    value={seedType}
                    onChange={(e) => setSeedType(e.target.value)}
                    fullWidth
                    variant='outlined'
                    margin='normal'
                >
                    <MenuItem value="">Select Seed Type</MenuItem>
                    {seedTypes.map((type, index) => (
                        <MenuItem key={index} value={type}>{type}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    required
                    type="number"
                    label="Batch Weight (g)"
                    value={batchWeight}
                    onChange={(e) => setBatchWeight(Number(e.target.value))}
                    fullWidth
                    margin='normal'
                />
                <TextField
                    type="number"
                    label="Amount of Trays"
                    value={traysAmount}
                    onChange={(e) => setTraysAmount(Number(e.target.value))}
                    fullWidth
                    margin='normal'
                />
                <Button type='submit' variant='contained' color='primary' sx={{ mr: 2 }}>Create Batch</Button>
                <Button type='button' variant='outlined' color='secondary' onClick={handleCancel}>Cancel</Button>
            </Form>
        </Container>
    )
}

export default CreateBatchForm