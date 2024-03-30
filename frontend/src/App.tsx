import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>HomePage</h1>
      <Button><Link to="/planting">Planting</Link></Button>
    </>
  );
}

export default App;
