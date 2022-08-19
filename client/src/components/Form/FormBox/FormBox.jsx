import React, { useEffect, useState } from "react";
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
import { getCategory } from "../../../redux/actions/categoryActions";
import { getProducts } from "../../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Form.module.css";
import useForm from "../useForm";
import validate from "../validate";
import DialogFormBox from "./DialogFormBox";
import BoxCard from "../../BoxCard/BoxCard";
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

export default function FormBox() {
  const dispatch = useDispatch();

  const {
    input,
    errors,
    dataBox,
    handleBoxSubmit,
    handleChangeBox,
    handleChangeProd,
    handleChangeCat,
  } = useForm(validate);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  return (
    <ContainerForm>
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
                onChange={(e) => handleChangeBox(e)}
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
                onChange={(e) => handleChangeBox(e)}
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
                onChange={(e) => handleChangeBox(e)}
                id="outlined-textarea"
                multiline
                rows={4}
                name="boxDetail"
                value={input.boxDetail || ""}
                required
                label="Descripcion de la box"
                size="small"
                sx={{
                  textarea: {
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
                onChange={(e) => handleChangeBox(e)}
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
              <TextField
                onChange={(e) => handleChangeBox(e)}
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
              <FormLabel sx={{ fontSize: 12 }}>Expiration Date</FormLabel>
              <TextField
                id="date"
                // label="Expiration Date"
                type="date"
                name="boxExpirationDate"
                value={input.boxExpirationDate || ""}
                onChange={(e) => handleChangeBox(e)}
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
              <FormControl sx={{ m: 1, width: 300, color: "white" }}>
                <InputLabel id="demo-multiple-name-label">Productos</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={input.boxProducts || []}
                  name="boxProducts"
                  onChange={(e) => handleChangeProd(e)}
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
                  onChange={(e) => handleChangeCat(e)}
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
            {Object.keys(errors).length === 0 ? (
              <DialogFormBox
                type="submit"
                variant="outlined"
                nameBox={dataBox.name}
              />
            ) : (
              <Button>Create</Button>
            )}
          </form>
        </div>
      </Box>
      <Box sx={{ width: 345 }}>
        <BoxCard
          name={dataBox.name}
          detail={dataBox.detail}
          price={dataBox.price}
          person={dataBox.person}
          image={dataBox.image}
          expiration_date={dataBox.expiration_date}
        />
      </Box>
    </ContainerForm>
  );
}
