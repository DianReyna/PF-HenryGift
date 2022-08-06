import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './Form.module.css'
//import NavBar from '../NavBar/NavBar'
import Button from '@mui/material/Button';
import {createBox} from '../../redux/actions/boxesActions'
import { useDispatch } from 'react-redux';

export default function Form() {
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [detail, setDetail] = useState('');
  const [ranking, setRanking] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [image, setImage] = useState('');
  const [person, setPerson] = useState('');
  const [products, setProducts] = useState('');

  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [rankingError, setRankingError] = useState(false);
  const [expirationDateError, setExpirationDateError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [personError, setPersonError] = useState(false);
  const [productsError, setProductsError] = useState(false);


  function handleOnSubmit(e){
    e.preventDefault()

    setNameError(false)
    setDetailError(false)
    setPriceError(false)
    setRankingError(false)
    setExpirationDateError(false)
    setImageError(false)
    setPersonError(false)
    setProductsError(false)
    
    if (name == '') { 
      setNameError(true)
    }
    if (detail == '') {
      setDetailError(true)
    }
    if (price == '') {
      setPriceError(true)
    }
    if (ranking == '') { 
      setRankingError(true)
    }
    if (expirationDate == '') {
      setExpirationDateError(true)
    }
    if (image == '') {
      setImageError(true)
    }
    if (person == '') { 
      setPersonError(true)
    }
    if (products == '') {
      setProductsError(true)
    }

    if (name && detail && price && ranking && expirationDate && image && person && products){
      dispatch(createBox(name, detail, price, ranking, expirationDate, image, person, products))
    }
  }

  return (
    <div>
      {/* <NavBar></NavBar> */}
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
              onChange={(e) => setDetail(e.target.value)}
              required
              id="standard-required"
              label="Descripcion de la box"
              defaultValue=""
              variant="standard"
              error={detailError}
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
            <TextField
              onChange={(e) => setRanking(e.target.value)}
              required
              id="standard-required"
              label="Ranking de la box"
              defaultValue=""
              variant="standard"
              error={rankingError}
            />
            <TextField
              onChange={(e) => setExpirationDate(e.target.value)}
              required
              id="standard-required"
              label="Fecha de vencimiento"
              defaultValue=""
              variant="standard"
              error={expirationDateError}
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              required
              id="standard-required"
              label="Imagen"
              defaultValue=""
              variant="standard"
              error={imageError}
            />
            <TextField
              onChange={(e) => setPerson(e.target.value)}
              required
              id="standard-required"
              label="Cantidad de personas"
              defaultValue=""
              variant="standard"
              error={personError}
            />
            <TextField
              onChange={(e) => setProducts(e.target.value)}
              required
              id="standard-required"
              label="Products"
              defaultValue=""
              variant="standard"
              error={productsError}
            />
          </div>
          <Button type='submit' variant="outlined">Submit</Button>
        </form>
      </Box>
    </div>
  );
}