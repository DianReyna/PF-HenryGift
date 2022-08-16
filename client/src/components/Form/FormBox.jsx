import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormLabel,
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

export default function FormBox() {
  const dispatch = useDispatch();

  const { handleChange, input, errors, handleBoxSubmit } = useForm(validate);

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
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "23ch",
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
            onSubmit={handleBoxSubmit}
          >
            <div className={styles.formContainer}>
              <TextField
                onChange={(e) => handleChange(e)}
                name="boxName"
                value={input.boxName || ""}
                required
                size="small"
                label="Nombre de la nueva box"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.boxName && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxName}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxDetail"
                value={input.boxDetail || ""}
                required
                label="Descripcion de la box"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.boxDetail && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxDetail}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxPrice"
                value={input.boxPrice || ""}
                required
                size="small"
                label="Precio"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.boxPrice && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxPrice}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxRanking"
                value={input.boxRanking || ""}
                required
                size="small"
                label="Ranking de la box"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.boxRanking && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxRanking}
                </DialogContentText>
              )}
              <FormLabel sx={{ fontSize: 12 }}>Expiration Date</FormLabel>
              <TextField
                id="date"
                // label="Expiration Date"
                type="date"
                name="boxExpirationDate"
                value={input.boxExpirationDate || ""}
                onChange={(e) => handleChange(e)}
                sx={{
                  input: {
                    color: "white",
                  },
                  color: "white",
                }}
              />

              {errors.boxExpirationDate && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxExpirationDate}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxImage"
                value={input.boxImage || ""}
                required
                size="small"
                label="Imagen"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.boxImage && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxImage}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleChange(e)}
                name="boxPerson"
                value={input.boxPerson || ""}
                required
                size="small"
                label="Cantidad de personas"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.boxPerson && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxPerson}
                </DialogContentText>
              )}

              <FormControl sx={{ m: 1, width: 300, color: "white" }}>
                <InputLabel id="demo-multiple-name-label">Productos</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={input.boxProducts || []}
                  name="boxProducts"
                  onChange={(e) => handleChange(e)}
                  MenuProps={MenuProps}
                  size="small"
                  color="primary"
                  sx={{
                    color: "white",
                  }}
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
                  size="small"
                  sx={{
                    color: "white",
                  }}
                >
                  {categories.categories?.map(({ name, id }) => {
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
