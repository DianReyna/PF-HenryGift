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
import "../Form.css";
import useForm from "../useForm";
import validate from "./validateProduct.js";
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
    handleChangeProductImg,
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
            width: "32ch",
          },
        }}
      >
        <div className="formContainer">
          <form autoComplete="off" onSubmit={handleProductSubmit}>
            <div className="formContainer">
              <TextField
                type="file"
                accept="image/"
                onChange={(e) => handleChangeProductImg(e)}
                name="productImage"
                required
                size="small"
              />

              <TextField
                className="textField"
                onChange={(e) => handleProductChange(e)}
                name="productName"
                value={product.productName || ""}
                required
                label="Product name"
                size="small"
              />
              {errors.productName && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.productName}
                </DialogContentText>
              )}

              <TextField
                id="outlined-textarea"
                multiline
                rows={4}
                onChange={(e) => handleProductChange(e)}
                name="productDescription"
                value={product.productDescription || ""}
                required
                label="Description"
                size="small"
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
              />
              {errors.productLocation && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.productLocation}
                </DialogContentText>
              )}

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Provider</InputLabel>
                <Select
                  onChange={(e) => handleProductChange(e)}
                  value={product.productProvider || ""}
                  MenuProps={MenuProps}
                  name="productProvider"
                >
                  {providers.providers?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
                {errors.productProvider && (
                  <DialogContentText
                    sx={{ color: "red !Important", fontSize: 13 }}
                  >
                    {errors.productProvider}
                  </DialogContentText>
                )}
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
      <Box sx={{ width: 345 }} className="previewCard">
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
