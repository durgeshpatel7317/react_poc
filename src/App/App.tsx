import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import './App.css';

const StyleButton = styled(Button)(({ theme }) => ({
  border: '2px solid',
  borderRadius: '5%',
  color: theme.palette.secondary.main,
  width: '20%',
  display: 'flex',
  alignSelf: 'center'
}));

function App() {
  return (
    <>
      <AppBar position='fixed' elevation={0}>
        <Toolbar>
          <Typography variant='h4' component='div' fontWeight={200}>ABCD</Typography>
        </Toolbar>
        <StyleButton> I am a button </StyleButton>
      </AppBar>
    </>
  );
}

export default App;
