import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn(props) {
  return (
    <Box
    component="form"
      sx={{
        display: 'grid',
        gridGap: '15px',
        margin: '200px auto',
        maxWidth: '300px'

        }}
      noValidate
      autoComplete='off'
>
      <TextField id="outlined-basic" label="Email" variant="outlined" type="Email" required></TextField>
      <TextField id="outlined-basic" label="Password" variant="outlined" type="Email" required></TextField>
      <Button variant="contained" onClick={() => props.setIsLoggedIn(true)}>Contained</Button>
   </Box>
  );
}


           