import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "../App.css";

export default function SoundQuality(props) {
  const { quality, onChange } = props;

  return (
    <Card sx={{ maxWidth: 275, border: '1px solid gray' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Sound Quality
        </Typography>
        <Box sx={{ maxWidth: 275, marginTop: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="sound-quality-label">Quality</InputLabel>
            <Select
              labelId="sound-quality-label"
              id="sound-quality-select"
              value={quality}
              label="Quality"
              onChange={onChange}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}
