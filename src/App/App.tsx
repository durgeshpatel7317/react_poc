import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <AppBar position='fixed' elevation={0}>
        <Toolbar>
          <Typography variant='h4' component='div' fontWeight={200}>ABCD</Typography>
        </Toolbar>
      </AppBar>
    </>

  );
}

export default App;
