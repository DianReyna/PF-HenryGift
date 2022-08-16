import React, { useEffect, useState } from "react";
import { Box, TextField, Button, FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postCategory } from "../../../redux/actions/categoryActions";

export default function FormCategory() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
  });
  const handleOnChange = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      name: value,
    });
    setErrors(
      validateForm({
        ...input,
        name: value,
      })
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(
        postCategory({
          name: input.name,
        })
      );
      setInput({
        name: "",
      });
      setStatus(true);
      toast.success("Save data update", {
        position: "top-right",
      });
    } else {
      setStatus(false);
      toast.error("Incorrect data, check againt", {
        position: "top-right",
      });
    }
  };
  return (
    <Box
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
      <form
        sx={{ color: "white !Important" }}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormControl>
          <TextField
            onChange={(e) => handleOnChange(e)}
            name="providerName"
            value={input.name}
            required
            label="Nombre del proveedor"
            sx={{
              input: {
                color: "white",
              },
            }}
          />
          {errors.name && <p sx={{ color: "red !Important" }}>{errors.name}</p>}
          <Button variant="outlined" type="submit">
            CREATE
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

const validateForm = (input) => {
  let errors = {};
  if (!input.name.trim()) {
    errors.name = "Name is required";
  } else if (input.name.length < 4) {
    errors.name = "name must have more than 4 letters";
  }

  return errors;
};
