import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function MasterVolume(props) {

    function valuetext(value) {
        return `${value}°C`;
      }

  return (
    <Card sx={{ maxWidth: 275,
                        border: '1px solid gray' }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Master Volume
        </Typography>
        <Typography variant="body2" sx={{ margingTop: 2}}>
        Overrides all other sound settings in this app.
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={20}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
      </CardActions>
     
    </Card>
  );
}