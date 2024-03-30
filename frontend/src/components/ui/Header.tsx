import * as React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography,
    Box,
    IconButton,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }} 
                        >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Microgreens ERP
                    </Typography>
                    <Button color='inherit'>Admin</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}