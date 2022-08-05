import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './Form.module.css'
import NavBar from '../NavBar/NavBar'
import Button from '@mui/material/Button';



export default function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [nameError, setNameError] = useState(false);
  const [descriptionError, setnDescriptionError] = useState(false);
  const [priceError, setPriceError] = useState(false);


  function handleOnSubmit(e){
    e.preventDefault()

    setNameError(false)
    setnDescriptionError(false)
    setPriceError(false)
    
    if (name == '') { 
      setNameError(true)
    }
    if (description == '') {
      setnDescriptionError(true)
    }
    if (price == '') {
      setPriceError(true)
    }

    if (name && description){
      console.log(name, description, price)
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      >
        <form noValidate autoComplete="off" onSubmit={handleOnSubmit} >
          <div className={styles.formContainer} >
            <TextField
              onChange={(e) => setName(e.target.value)}
              required
              id="standard-required"
              label="Nombre de la nueva box"
              defaultValue=""
              variant="standard"
              error={nameError}
            />
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              required
              id="standard-required"
              label="Descripcion de la box"
              defaultValue=""
              variant="standard"
              error={descriptionError}
            />
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              required
              id="standard-required"
              label="Precio"
              defaultValue=""
              variant="standard"
              error={priceError}
            />
          </div>
          <Button type='submit' variant="outlined">Submit</Button>
        </form>
      </Box>
    </div>
  );
}
