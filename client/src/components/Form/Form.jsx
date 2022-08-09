import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { getProvider } from "../../redux/actions/providerActions";
import { getCategory } from "../../redux/actions/categoryActions";
import { getProducts } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Form.module.css";
import useForm from "./useForm";
import validate from "./validate";


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
  const dispatch = useDispatch();

  const {
    handleChange,
    input,
    handleProviderSubmit,
    errors,
    handleProductSubmit,
    handleProductChange,
    handleBoxSubmit,
  } = useForm(validate);

  useEffect(() => {
    dispatch(getProvider());
    dispatch(getCategory());
    dispatch(getProducts());
  }, [dispatch]);

  const providers = useSelector((state) => state.providers);
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  return (
    <div>
      <Box
        className={styles.formsContainer}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <div className={styles.formContainer}>
          <h2>PRODUCT</h2>
          <form autoComplete="off" onSubmit={handleProductSubmit}>
            <div className={styles.formContainer}>
              <TextField
                onChange={(e) => handleChange(e)}
                name="productName"
                value={input.productName || ""}
                required
                label="Nombre del producto"
                variant="standard"
              />
              {errors.productName && <p>{errors.productName}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="productDescription"
                value={input.productDescription || ""}
                required
                label="Descripcion del producto"
                variant="standard"
              />
              {errors.productDescription && <p>{errors.productDescription}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="productPrice"
                value={input.productPrice || ""}
                required
                label="Precio"
                variant="standard"
              />
              {errors.productPrice && <p>{errors.productPrice}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="productLocation"
                value={input.productLocation || ""}
                required
                label="Direccion"
                variant="standard"
              />
              {errors.productLocation && <p>{errors.productLocation}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="productImage"
                value={input.productImage || ""}
                required
                label="Imagen"
                variant="standard"
              />
              {errors.productImage && <p>{errors.productImage}</p>}

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Proveedor</InputLabel>

                <Select
                  onChange={(e) => handleProductChange(e)}
                  value={input.productProvider || ""}
                  MenuProps={MenuProps}
                >
                  {providers.providers?.map(({ name, id }) => {
                    return (
                      <MenuItem
                        key={id}
                        name="productProvider"
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Button type="submit" variant="outlined">
              CREATE
            </Button>
          </form>
        </div>

        <div className={styles.formContainer}>
          <h2>PROVIDER</h2>
          <form autoComplete="off" onSubmit={(e) => handleProviderSubmit(e)}>
            <div className={styles.formContainer}>
              <TextField
                onChange={(e) => handleChange(e)}
                name="providerName"
                value={input.providerName || ""}
                required
                label="Nombre del proveedor"
                variant="standard"
              />
              {errors.providerName && <p>{errors.providerName}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="providerPhone"
                value={input.providerPhone || ""}
                required
                label="Numero de Telefono"
                variant="standard"
              />
              {errors.providerPhone && <p>{errors.providerPhone}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="providerAddress"
                value={input.providerAddress || ""}
                required
                label="Direccion"
                variant="standard"
              />
              {errors.providerAddress && <p>{errors.providerAddress}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="providerEmail"
                value={input.providerEmail || ""}
                required
                label="Email"
                variant="standard"
              />
              {errors.providerEmail && <p>{errors.providerEmail}</p>}
            </div>
            <Button variant="outlined" type="submit">
              CREATE
            </Button>
          </form>
        </div>
        <div className={styles.formContainer}>
          <h2>BOX</h2>
          <form autoComplete="off" onSubmit={handleBoxSubmit}>
            <div className={styles.formContainer}>
              <TextField
                onChange={(e) => handleChange(e)}
                name="boxName"
                value={input.boxName || ""}
                required
                label="Nombre de la nueva box"
                variant="standard"
              />
              {errors.boxName && <p>{errors.boxName}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxDetail"
                value={input.boxDetail || ""}
                required
                label="Descripcion de la box"
                variant="standard"
              />
              {errors.boxDescription && <p>{errors.boxDescription}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxPrice"
                value={input.boxPrice || ""}
                required
                label="Precio"
                variant="standard"
              />
              {errors.boxPrice && <p>{errors.boxPrice}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxRanking"
                value={input.boxRanking || ""}
                required
                label="Ranking de la box"
                variant="standard"
              />
              {errors.boxRanking && <p>{errors.boxRanking}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxExpirationDate"
                value={input.boxExpirationDate || ""}
                required
                label="Fecha de vencimiento"
                variant="standard"
              />
              {errors.boxExpirationDate && <p>{errors.boxExpirationDate}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxImage"
                value={input.boxImage || ""}
                required
                label="Imagen"
                variant="standard"
              />
              {errors.boxImage && <p>{errors.boxImage}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxPerson"
                value={input.boxPerson || ""}
                required
                label="Cantidad de personas"
                variant="standard"
              />
              {errors.boxPerson && <p>{errors.boxPerson}</p>}

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Productos</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={input.boxProducts || []}
                  name="boxProducts"
                  onChange={(e) => handleChange(e)}
                  MenuProps={MenuProps}
                >
                  {products.products?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">
                  Categorias
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={input.boxCategories || []}
                  name="boxCategories"
                  onChange={(e) => handleChange(e)}
                  MenuProps={MenuProps}
                >
                  {categories.category?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Button type="submit" variant="outlined">
              CREATE
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
}
