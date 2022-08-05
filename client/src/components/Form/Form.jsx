import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './Form.module.css'


export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles.formContainer} >
        <TextField
          required
          id="standard-required"
          label="Nombre de la nueva box"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Descripcion de la box"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="ID"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Precio"
          defaultValue=""
          variant="standard"
        />
      </div>
    </Box>
  );
}
