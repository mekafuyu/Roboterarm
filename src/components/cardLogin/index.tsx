import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonMid from '../buttonMid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const card = (
  <React.Fragment>
    <CardContent>
    <Typography variant="h4" component="div">Login</Typography>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
    </Box>

    </CardContent>
    <CardActions>
      <ButtonMid/>
      <ButtonMid/>
    </CardActions>
  </React.Fragment>
);

export default function CardLogin() {
  return (
    <Paper>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </Paper>
  );
}