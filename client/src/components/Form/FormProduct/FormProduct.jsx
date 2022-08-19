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
import { getProvider } from "../../../redux/actions/providerActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Form.module.css";
import useForm from "../useForm";
import validate from "../validate";
import DialogFormProduct from "./DialogFormProduct";
import ProductCard from "../../Products/ProductCard";
import { ContainerForm } from "../../Admin/CommonStyled";

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
    <ContainerForm>
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
                label="Product name"
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
                label="Description"
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
                label="Price"
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
                label="Location"
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
                label="Image"
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
                <InputLabel id="demo-multiple-name-label">Provider</InputLabel>

                <Select
                  onChange={(e) => handleProductChange(e)}
                  value={product.productProvider || ""}
                  MenuProps={MenuProps}
                  name="productProvider"
                  sx={{
                    color: "white !Important",
                  }}
                >
                  {providers.providers?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            {Object.keys(errors).length === 0 ? (
              <DialogFormProduct
                type="submit"
                variant="outlined"
                nameProd={dataProduct.name}
              />
            ) : (
              <Button>Create</Button>
            )}
          </form>
        </div>
      </Box>
      <Box sx={{ width: 345 }}>
        <ProductCard
          name={dataProduct.name}
          description={dataProduct.description}
          location={dataProduct.location}
          imagen={dataProduct.image}
        />
      </Box>
    </ContainerForm>
  );
}
