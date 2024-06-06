import React from 'react';
import './App.css';
import { 
  Button,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container>
      <h1>Home Page</h1>
      <Button><Link to="/growing">Planting</Link></Button>
    </Container>
  );
}

export default App;
