import * as React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography,
    Box,
    Button,
} from "@mui/material";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Button color='inherit' href='/'>Microgreens ERP</Button>
                    <Button color='inherit' href='/growing'>Planting</Button>
                    <Button color='inherit' href='#'>Inventory</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
