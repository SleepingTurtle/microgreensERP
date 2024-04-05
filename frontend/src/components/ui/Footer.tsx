import React from 'react'
import {
    Typography,
    Link,
    Container,
    Paper,
} from '@mui/material'

function Footer() {
    return(
        <Paper sx={{ 
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }} component='footer'>
            <Container>
                <Typography variant='body1'>
                   Microgreen ERP 
                </Typography>
                <Typography variant='body2'>
                    © {new Date().getFullYear()} MicroGreen ERP
                </Typography>
                <Typography variant="body2">
                    <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
                </Typography>
            </Container>

        </Paper>
    )
}

export default Footer;