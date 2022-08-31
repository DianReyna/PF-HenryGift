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
import styles from "../Form.css";
import useForm from "../useForm";
import validate from "./validateBox.js";
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
    handleChangeBoxImg,
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
            width: "32ch",
          },
        }}
      >
        <div className={styles.formContainer}>
          <form autoComplete="off" onSubmit={handleBoxSubmit}>
            <div className={styles.formContainer}>
              <TextField
                type="file"
                accept="image/"
                name="imagebox"
                onChange={(e) => handleChangeBoxImg(e)}
                size="small"
                required
              />
              <TextField
                onChange={(e) => handleChangeBox(e)}
                name="boxName"
                value={input.boxName}
                required
                size="small"
                label="Box name"
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
                label="Box Detail"
                size="small"
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
                label="Persons"
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
                label="Price"
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
                type="date"
                name="boxExpirationDate"
                value={input.boxExpirationDate || ""}
                onChange={(e) => handleChangeBox(e)}
              />
              {errors.boxExpirationDate && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.boxExpirationDate}
                </DialogContentText>
              )}
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Products</InputLabel>
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
                >
                  {products.products?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
                {errors.boxProducts && (
                  <DialogContentText
                    sx={{ color: "red !Important", fontSize: 13 }}
                  >
                    {errors.boxProducts}
                  </DialogContentText>
                )}
              </FormControl>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">
                  Categories
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
                >
                  {categories.categories?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
                {errors.boxCategories && (
                  <DialogContentText
                    sx={{ color: "text.primary", fontSize: 13 }}
                  >
                    {errors.boxCategories}
                  </DialogContentText>
                )}
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
      <Box sx={{ width: 345 }} className="previewCard">
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
