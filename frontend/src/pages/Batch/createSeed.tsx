import React, {useState} from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { 
    Button,
    Container, 
    TextField, 
    Typography, 
} from '@mui/material'

import { SeedFormData } from '../../interfaces'

interface SeedFormProp {
    onSubmit: (formData: SeedFormData) => void
}

const CreateSeedForm = () => {
    const [seedType, setSeedType] = useState('')
    const [startWeight, setStartingWeight] = useState(0)

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const handleCancel = () => {
        navigate('/growing')
    }

    return (
        <Container>
            <Typography variant='h5' gutterBottom>Create New Seeds</Typography>
            <Form onSubmit={handleSubmit}>
                <TextField
                    required
                    type='text'
                    label="Seed Type"
                    value={seedType}
                    onChange={(e) => setSeedType(e.target.value)}
                    fullWidth
                    margin='normal'
                />
                <TextField
                    required
                    type='number'
                    label='Weight'
                    value={startWeight}
                    onChange={(e) => setStartingWeight(Number(e.target.value))}
                    fullWidth
                />

                <Button type='submit' variant='contained' color='primary' sx={{ mr: 2 }}>Create Seed</Button>
                <Button type='button' variant='outlined' color='secondary' onClick={handleCancel}>Cancel</Button>
            </Form>
        </Container>
    )
}

export default CreateSeedForm