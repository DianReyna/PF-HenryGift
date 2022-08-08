import React, { useEffect } from 'react';
import {Box, TextField,  Button,  InputLabel,  MenuItem,  FormControl,  Select } from '@mui/material';
import { getProvider } from '../../redux/actions/providerActions'
import { getCategory } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import useForm from './useForm';
import validate from './validate';



// function getStyles(name, personName, theme) {
//   // console.log(personName)
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Form() {
  //const theme = useTheme();
  const dispatch = useDispatch()


  const {             
    handleChange, 
    input, 
    handleProviderSubmit, 
    handleDelete, 
    errors,
    cleanInputs,
    handleProductSubmit, 
    handleProductChange,
    handleBoxSubmit } = useForm(validate);

  useEffect(() => {
    dispatch(getProvider())
    dispatch(getCategory())
    dispatch(getProducts())
  },[dispatch])

  const providers = useSelector((state) => state.providers)
  const categories = useSelector((state) => state.categories)
  const products = useSelector((state) => state.products)



  return (
    <div>
      <Box className={styles.formsContainer}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      >
        <div className={styles.formContainer} >
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          <h2>PRODUCT</h2>
          <form onSubmit={handleProductSubmit} >
            <div className={styles.formContainer} >
              <TextField
                onChange={(e) => handleChange(e)}
                name='productName'
                defaultValue={input.productName || ''}
                label="Nombre del producto"
                variant="standard"
              />
              {errors.productName && <p>{errors.productName}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='productDescription'
                defaultValue={input.productDescription || ''}
                label="Descripcion del producto"
                variant="standard"
              />
              {errors.productDescription && <p>{errors.productDescription}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='productPrice'
                defaultValue={input.productPrice || ''}
                label="Precio"
                variant="standard"
              />
              {errors.productPrice && <p>{errors.productPrice}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='productLocation'
                defaultValue={input.productLocation || ''}
                label="Direccion"
                variant="standard"
              />
              {errors.productLocation && <p>{errors.productLocation}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='productImage'
                defaultValue={input.productImage || ''}
                label="Imagen"
                variant="standard"
              />
              {errors.productImage && <p>{errors.productImage}</p>}

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Proveedor</InputLabel>


                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select-lable"
                  onChange={(e) => handleProductChange(e)}
                  value={input.productProvider || ''}
                  // input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                  >
                  {providers.providers?.map(({name, id}) => {
                      return (
                        <MenuItem 
                          key={id} 
                          name='productProvider'
                          
                          value={name} 
                        // styled={getStyles(name, 
                        // input.productProvider, 
                        // theme)}
                        >
                          {name}
                      {/* {    console.log('Product provider',input.productProvider)} */}
                        </MenuItem>)
                    })}
                </Select>
              </FormControl>
            </div>
            <Button type='submit' variant="outlined">CREATE</Button>
          </form>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div className={styles.formContainer} >
          <h2>PROVIDER</h2>
          <form 
            onSubmit={e => handleProviderSubmit(e)} >
            <div className={styles.formContainer} >
              <TextField
                onChange={(e) => handleChange(e)}
                name='providerName'
                value={input.providerName || ''}
                label="Nombre del proveedor"
                variant="standard"
              />
              {errors.providerName && <p>{errors.providerName}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='providerPhone'
                value={input.providerPhone || ''}
                label="Numero de Telefono"
                variant="standard"
              />
              {errors.providerPhone && <p>{errors.providerPhone}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='providerAddress'
                value={input.providerAddress || ''}
                label="Direccion"
                variant="standard"
              />
              {errors.providerAddress && <p>{errors.providerAddress}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='providerEmail'
                value={input.providerEmail || ''}
                label="Email"
                variant="standard"
              />
              {errors.providerEmail && <p>{errors.providerEmail}</p>}

            </div>
            <Button variant="outlined" type="submit">
                Create Provider
            </Button>
          </form>
        </div>
        <div className={styles.formContainer} >



























          <h2>BOX</h2>
          <form onSubmit={handleBoxSubmit} >
            <div className={styles.formContainer} >
              <TextField
                onChange={(e) => handleChange(e)}
                name='boxName'
                value={input.boxName || ''}
                label="Nombre de la nueva box"
                variant="standard"
              />
              {errors.boxName && <p>{errors.boxName}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='boxDetail'
                defaultValue={input.boxDetail || ''}
                label="Descripcion de la box"
                variant="standard"
              />
              {errors.boxDescription && <p>{errors.boxDescription}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='boxPrice'
                defaultValue={input.boxPrice || ''}
                // required
                // id="standard-required"
                label="Precio"
                variant="standard"
              />
              {errors.boxPrice && <p>{errors.boxPrice}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='boxRanking'
                defaultValue={input.boxRanking || ''}
                // required
                // id="standard-required"
                label="Ranking de la box"
                variant="standard"
                //error={boxRankingError}
              />
              {errors.boxRanking && <p>{errors.boxRanking}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='boxExpirationDate'
                defaultValue={input.boxExpirationDate || ''}
                required
                // id="standard-required"
                label="Fecha de vencimiento"
                variant="standard"
                //error={boxExpirationDateError}
              />
              {errors.boxExpirationDate && <p>{errors.boxExpirationDate}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='boxImage'
                defaultValue={input.boxImage || ''}
                required
                // id="standard-required"
                label="Imagen"
                variant="standard"
                //error={boxImageError}
              />
              {errors.boxImage && <p>{errors.boxImage}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name='boxPerson'
                defaultValue={input.boxPerson || ''}
                required
                // id="standard-required"
                label="Cantidad de personas"
                variant="standard"
                //error={boxPersonError}
              />
              {errors.boxPerson && <p>{errors.boxPerson}</p>}

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Productos</InputLabel>
                  <Select
                    //error={boxProductsError}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={input.boxProducts || []}
                    onChange={(e) => handleChange(e)}
                    name='boxProducts'
                    defaultValue={input.boxProducts || []}
                    // input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {products.products?.map(({name, id}) => {
                      return (
                        <MenuItem key={id} value={name} 
                        // styled={getStyles(name, input.boxProducts, theme)}
                        >
                        {name}
                      </MenuItem>)
                    })}
                  </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Categorias</InputLabel>
                <Select
                  //error={boxCategoriesError}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={input.boxCategories || []}
                  name='boxCategories'
                  onChange={(e) => handleChange(e)}
                  // input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {categories.category?.map(({name, id}) => {
                    return (
                      <MenuItem key={id} value={name} 
                      // styled={getStyles(name, input.boxCategories, theme)}
                      >
                      {name}
                    </MenuItem>)
                  })}
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