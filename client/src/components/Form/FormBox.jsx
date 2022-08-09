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

export default function FormBox() {
  const dispatch = useDispatch();

  const {
    handleChange,
    input,
    errors, 
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
