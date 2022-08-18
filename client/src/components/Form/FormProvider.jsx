import React, { useEffect } from "react";
import { Box, TextField, Button, DialogContentText } from "@mui/material";
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

  const {
    provider,
    errors,
    dataProvider,
    handleProviderChange,
    handleProviderSubmit,
  } = useForm(validate);

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
                onChange={(e) => handleProviderChange(e)}
                name="providerName"
                value={provider.providerName || ""}
                required
                label="Nombre del proveedor"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerName && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.providerName}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleProviderChange(e)}
                name="providerPhone"
                value={provider.providerPhone || ""}
                required
                label="Numero de Telefono"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerPhone && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.providerPhone}
                </DialogContentText>
              )}
              <TextField
                onChange={(e) => handleProviderChange(e)}
                name="providerAddress"
                value={provider.providerAddress || ""}
                required
                label="Direccion"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerAddress && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.providerAddress}
                </DialogContentText>
              )}

              <TextField
                onChange={(e) => handleProviderChange(e)}
                name="providerEmail"
                value={provider.providerEmail || ""}
                required
                label="Email"
                size="small"
                sx={{
                  input: {
                    color: "white",
                  },
                }}
              />
              {errors.providerEmail && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.providerEmail}
                </DialogContentText>
              )}
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
