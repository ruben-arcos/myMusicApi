import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button className='mainButton' variant="text" onClick={() => console.log('Clicked')}>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained">Outlined</Button>
    </Stack>
  );
}