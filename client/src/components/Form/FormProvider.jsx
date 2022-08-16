import React, { useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
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

export default function FormProvider() {
  const dispatch = useDispatch();

  const { handleChange, input, handleProviderSubmit, errors } =
    useForm(validate);

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
          <form autoComplete="off" onSubmit={(e) => handleProviderSubmit(e)}>
            <div className={styles.formContainer}>
              <TextField
                onChange={(e) => handleChange(e)}
                name="providerName"
                value={input.providerName || ""}
                required
                label="Nombre del proveedor"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerName && <p>{errors.providerName}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="providerPhone"
                value={input.providerPhone || ""}
                required
                label="Numero de Telefono"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerPhone && <p>{errors.providerPhone}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="providerAddress"
                value={input.providerAddress || ""}
                required
                label="Direccion"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerAddress && <p>{errors.providerAddress}</p>}

              <TextField
                onChange={(e) => handleChange(e)}
                name="providerEmail"
                value={input.providerEmail || ""}
                required
                label="Email"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerEmail && <p>{errors.providerEmail}</p>}
            </div>
            <Button variant="outlined" type="submit">
              CREATE
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
}
