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

export default function FormProduct() {
  const dispatch = useDispatch();

  const {
    handleChange,
    input,
    errors,
    handleProductSubmit,
    handleProductChange,
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
      </Box>
    </div>
  );
}

           