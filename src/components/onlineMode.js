import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import "../App.css";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function OnlineMode(props) {

  return (
    <Card sx={{ maxWidth: 275,
                        border: '1px solid grey' }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Online Mode
        </Typography>
        <Typography variant="body2" sx={{ margingTop: 2}}>
        Is this app connected to the interner?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch {...label} onChange={() => props.setIsOnline(!props.isOnline)} />
      </CardActions>
     
    </Card>
  );
}