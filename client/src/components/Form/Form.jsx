import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {createProvider, createBox, createProduct} from '../../redux/actions/boxesActions'
import { useDispatch } from 'react-redux';
import styles from './Form.module.css'
import NavBar from '../NavBar/NavBar'

export default function Form() {
  const dispatch = useDispatch()

  //PRODUCT
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productLocation, setProductLocation] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productProvider, setProductProvider] = useState([]);
  //ERRORS
  const [productNameError, setProductNameError] = useState(false);
  const [productDescriptionError, setProductDescriptionError] = useState(false);
  const [productPriceError, setProductPriceError] = useState(false);
  const [productLocationError, setProductLocationError] = useState(false);
  const [productImageError, setProductImageError] = useState(false);
  const [productProviderError, setProductProviderError] = useState(false);


  //PROVIDER
  const [providerName, setProviderName] = useState('');
  const [providerPhone, setProviderPhone] = useState(0);
  const [providerAddress, setProviderAddress] = useState('');
  const [providerEmail, setProviderEmail] = useState('');
  //ERRORS
  const [providerNameError, setProviderNameError] = useState(false);
  const [providerPhoneError, setProviderPhoneError] = useState(false);
  const [providerAddressError, setProviderAddressError] = useState(false);
  const [providerEmailError, setProviderEmailError] = useState(false);


  //BOX
  const [boxName, setBoxName] = useState('');
  const [boxPrice, setBoxPrice] = useState('');
  const [boxDetail, setBoxDetail] = useState('');
  const [boxRanking, setBoxRanking] = useState('');
  const [boxExpirationDate, setBoxExpirationDate] = useState('');
  const [boxImage, setBoxImage] = useState('');
  const [boxPerson, setBoxPerson] = useState('');
  const [boxProducts, setBoxProducts] = useState([]);
  const [boxCategories, setBoxCategories] = useState([]);
  //ERRORS
  const [boxNameError, setBoxNameError] = useState(false);
  const [boxPriceError, setBoxPriceError] = useState(false);
  const [boxDetailError, setBoxDetailError] = useState(false);
  const [boxRankingError, setBoxRankingError] = useState(false);
  const [boxExpirationDateError, setBoxExpirationDateError] = useState(false);
  const [boxImageError, setBoxImageError] = useState(false);
  const [boxPersonError, setBoxPersonError] = useState(false);
  const [boxProductsError, setBoxProductsError] = useState(false);
  const [boxCategoriesError, setBoxCategoriesError] = useState(false);


  function handleProductSubmit(e){
    e.preventDefault()

    setProductNameError(false)
    setProductDescriptionError(false)
    setProductPriceError(false)
    setProductLocationError(false)
    setProductImageError(false)
    setProductProviderError(false)

    if (productName == '') { 
      setProductNameError(true)
    }
    if (productDescription == '') { 
      setProductDescriptionError(true)
    }
    if (productPrice == '') { 
      setProductAddressError(true)
    }
    if (productLocation == '') { 
      setProductLocationError(true)
    }
    if (productImage == '') { 
      setProductImageError(true)
    }
    if (productProvider == '') { 
      setProductProviderError(true)
    }

    if (productName && productDescription && productPrice && productLocation && productImage && productProvider){
      dispatch(createProduct({productName, productDescription, productLocation, productPrice, productImage, productProvider}))
    }
  }

  function handleProviderSubmit(e){
    e.preventDefault()

    setProviderNameError(false)
    setProviderPhoneError(false)
    setProviderAddressError(false)
    setProviderEmailError(false)

    if (providerName == '') { 
      setProviderNameError(true)
    }
    if (providerPhone == '') { 
      setProviderPhoneError(true)
    }
    if (providerAddress == '') { 
      setProviderAddressError(true)
    }
    if (providerEmail == '') { 
      setProviderEmailError(true)
    }
    
    if (providerName && providerPhone && providerAddress && providerEmail){
      dispatch(createProvider({providerName, providerPhone, providerEmail, providerAddress}))
    }
  }
  
  function handleBoxSubmit(e){
    e.preventDefault()

    setBoxNameError(false)
    setBoxDetailError(false)
    setBoxPriceError(false)
    setBoxRankingError(false)
    setBoxExpirationDateError(false)
    setBoxImageError(false)
    setBoxPersonError(false)
    setBoxProductsError(false)
    
    if (boxName == '') { 
      setBoxNameError(true)
    }
    if (boxDetail == '') {
      setBoxDetailError(true)
    }
    if (boxPrice == '') {
      setBoxPriceError(true)
    }
    if (boxRanking == '') { 
      setBoxRankingError(true)
    }
    if (boxExpirationDate == '') {
      setBoxExpirationDateError(true)
    }
    if (boxImage == '') {
      setBoxImageError(true)
    }
    if (boxPerson == '') { 
      setBoxPersonError(true)
    }
    if (boxProducts == '') {
      setBoxProductsError(true)
    }
    if (boxCategories == '') {
      setBoxCategoriesError(true)
    }

    if (boxName && boxDetail && boxPrice && boxRanking && boxExpirationDate && boxImage && boxPerson && boxProducts && boxCategories){
      dispatch(createBox({boxName, boxDetail, boxPrice, boxRanking, boxExpirationDate, boxImage, boxPerson, boxProducts, boxCategories}))
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      <Box className={styles.formsContainer}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      >
        <div className={styles.formContainer} >
          <h2>PRODUCT</h2>
          <form noValidate autoComplete="off" onSubmit={handleProductSubmit} >
            <div className={styles.formContainer} >
              <TextField
                onChange={(e) => setProductName(e.target.value)}
                required
                id="standard-required"
                label="Nombre del producto"
                defaultValue=""
                variant="standard"
                error={productNameError}
              />
              <TextField
                onChange={(e) => setProductDescription(e.target.value)}
                required
                id="standard-required"
                label="Descripcion del producto"
                defaultValue=""
                variant="standard"
                error={productDescriptionError}
              />
              <TextField
                onChange={(e) => setProductPrice(e.target.value)}
                required
                id="standard-required"
                label="Precio"
                defaultValue=""
                variant="standard"
                error={productPriceError}
              />
              <TextField
                onChange={(e) => setProductLocation(e.target.value)}
                required
                id="standard-required"
                label="Direccion"
                defaultValue=""
                variant="standard"
                error={productLocationError}
              />
              <TextField
                onChange={(e) => setProductImage(e.target.value)}
                required
                id="standard-required"
                label="Imagen"
                defaultValue=""
                variant="standard"
                error={productImageError}
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Proveedor</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={productProvider}
                  onChange={setProductProvider}
                  label="Provider"
                  error={productProviderError}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </div>
            <Button type='submit' variant="outlined">Submit</Button>
          </form>
        </div>
        <div className={styles.formContainer} >
          <h2>PROVIDER</h2>
          <form noValidate autoComplete="off" onSubmit={handleProviderSubmit} >
            <div className={styles.formContainer} >
              <TextField
                onChange={(e) => setProviderName(e.target.value)}
                required
                id="standard-required"
                label="Nombre del proveedor"
                defaultValue=""
                variant="standard"
                error={providerNameError}
              />
              <TextField
                onChange={(e) => setProviderPhone(e.target.value)}
                required
                id="standard-required"
                label="Numero de Telefono"
                defaultValue=""
                variant="standard"
                error={providerPhoneError}
              />
              <TextField
                onChange={(e) => setProviderAddress(e.target.value)}
                required
                id="standard-required"
                label="Direccion"
                defaultValue=""
                variant="standard"
                error={providerAddressError}
              />
              <TextField
                onChange={(e) => setProviderEmail(e.target.value)}
                required
                id="standard-required"
                label="Email"
                defaultValue=""
                variant="standard"
                error={providerEmailError}
              />
            </div>
            <Button type='submit' variant="outlined">Submit</Button>
          </form>
        </div>
        <div className={styles.formContainer} >
          <h2>BOX</h2>
          <form noValidate autoComplete="off" onSubmit={handleBoxSubmit} >
            <div className={styles.formContainer} >
              <TextField
                onChange={(e) => setBoxName(e.target.value)}
                required
                id="standard-required"
                label="Nombre de la nueva box"
                defaultValue=""
                variant="standard"
                error={boxNameError}
              />
              <TextField
                onChange={(e) => setBoxDetail(e.target.value)}
                required
                id="standard-required"
                label="Descripcion de la box"
                defaultValue=""
                variant="standard"
                error={boxDetailError}
              />
              <TextField
                onChange={(e) => setBoxPrice(e.target.value)}
                required
                id="standard-required"
                label="Precio"
                defaultValue=""
                variant="standard"
                error={boxPriceError}
              />
              <TextField
                onChange={(e) => setBoxRanking(e.target.value)}
                required
                id="standard-required"
                label="Ranking de la box"
                defaultValue=""
                variant="standard"
                error={boxRankingError}
              />
              <TextField
                onChange={(e) => setBoxExpirationDate(e.target.value)}
                required
                id="standard-required"
                label="Fecha de vencimiento"
                defaultValue=""
                variant="standard"
                error={boxExpirationDateError}
              />
              <TextField
                onChange={(e) => setBoxImage(e.target.value)}
                required
                id="standard-required"
                label="Imagen"
                defaultValue=""
                variant="standard"
                error={boxImageError}
              />
              <TextField
                onChange={(e) => setBoxPerson(e.target.value)}
                required
                id="standard-required"
                label="Cantidad de personas"
                defaultValue=""
                variant="standard"
                error={boxPersonError}
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Productos</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={boxProducts}
                  onChange={setBoxProducts}
                  label="Product"
                  error={boxProductsError}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Categorias</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={boxCategories}
                  onChange={setBoxCategories}
                  label="Product"
                  error={boxCategoriesError}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </div>
            <Button type='submit' variant="outlined">Submit</Button>
          </form>
        </div>
      </Box>
    </div>
  );
}