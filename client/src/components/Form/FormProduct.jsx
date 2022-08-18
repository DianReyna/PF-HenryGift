import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  DialogContentText,
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
    product,
    errors,
    dataProduct,
    handleProductSubmit,
    handleProductChange,
  } = useForm(validate);

  useEffect(() => {
    dispatch(getProvider());
  }, [dispatch]);

  const providers = useSelector((state) => state.providers);

  return (
    <div>
      <Box
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white !Important",
            },
          },
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiFormLabel-root ": {
            color: "white !important",
          },
        }}
      >
        <div className={styles.formContainer}>
          <form
            sx={{ color: "white !Important" }}
            autoComplete="off"
            onSubmit={handleProductSubmit}
          >
            <div className={styles.formContainer}>
              <TextField
                className="textField"
                onChange={(e) => handleProductChange(e)}
                name="productName"
                value={product.productName || ""}
                required
                label="Nombre del producto"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.productName && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.productName}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleProductChange(e)}
                name="productDescription"
                value={product.productDescription || ""}
                required
                label="Descripcion del producto"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.productDescription && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.productDescription}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleProductChange(e)}
                name="productPrice"
                value={product.productPrice || ""}
                required
                label="Precio"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.productPrice && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.productPrice}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleProductChange(e)}
                name="productLocation"
                value={product.productLocation || ""}
                required
                label="Direccion"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.productLocation && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.productLocation}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleProductChange(e)}
                name="productImage"
                value={product.productImage || ""}
                required
                label="Imagen"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.productImage && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.productImage}
                </DialogContentText>
              )}

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Proveedor</InputLabel>

                <Select
                  onChange={(e) => handleProductChange(e)}
                  value={product.productProvider || ""}
                  MenuProps={MenuProps}
                  sx={{
                    color: "white",
                  }}
                >
                  {providers.providers?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} name="productProvider" value={name}>
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
