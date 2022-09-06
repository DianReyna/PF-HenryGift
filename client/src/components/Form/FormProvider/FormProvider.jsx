import React, { useEffect } from "react";
import { Box, TextField, Button, DialogContentText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "../Form.css";
import useForm from "../useForm";
import validate from "./validateProvider";

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
  const { provider, errors, handleProviderChange, handleProviderSubmit } =
    useForm(validate);

  return (
    <div>
      <Box
        className="formsContainer"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <div className="formContainer">
          <form autoComplete="off" onSubmit={(e) => handleProviderSubmit(e)}>
            <div className="formContainer">
              <TextField
                onChange={(e) => handleProviderChange(e)}
                name="providerName"
                value={provider.providerName || ""}
                required
                label="Provider name"
                size="small"
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
                label="Phone"
                size="small"
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
                label="Addres"
                size="small"
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
              Create
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
}
