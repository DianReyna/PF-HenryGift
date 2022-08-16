import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProvider,
  updateProvider,
} from "../../../redux/actions/providerActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Edit,
  StyledEditProvider,
  StyledForm,
  PrimaryButton,
} from "../CommonStyled";
import { toast } from "react-toastify";
import { DialogContentText, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditProvider({ provId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const [currentProv, setCurrentProv] = useState({});

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const itemsProvider = useSelector((state) => state.providers);
  useEffect(() => {
    dispatch(getProvider());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);

    let selectProv = itemsProvider.providers.filter((el) => el.id === provId);
    selectProv = selectProv[0];

    setCurrentProv(selectProv);
    setInput({
      name: selectProv.name,
      phone: selectProv.phone,
      address: selectProv.address,
      email: selectProv.email,
      active: selectProv.active,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCompare = () => {
    if (
      input.name !== currentProv.name ||
      input.phone !== currentProv.phone ||
      input.address !== currentProv.address ||
      input.email !== currentProv.email
    ) {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0 && handleCompare()) {
      dispatch(
        updateProvider({
          id: provId,
          provider: {
            name: input.name,
            phone: input.phone,
            address: input.address,
            email: input.email,
          },
        })
      );
      setStatus(true);
      toast.success("Save data update", {
        position: "top-right",
      });
      handleClose();
    } else if (Object.keys(errors).length >= 1) {
      setStatus(false);
      toast.error("Incorrect data, check againt", {
        position: "top-right",
      });
    } else {
      setStatus(false);
      toast.error("No field was updated", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Edit onClick={handleClickOpen}>
        <EditIcon />
      </Edit>
      <Dialog
        // fullWidth={true}
        maxWidth={"md"}
        style={{ color: "white" }}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent !Important",
            },
          },
        }}
      >
        <DialogTitle>Edit Provider</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="name"
                defaultValue={input.name}
                placeholder="Name"
                onChange={(e) => handleOnChange(e)}
                size="small"
                required
              />
              {errors.name && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.name}
                </DialogContentText>
              )}
              <TextField
                type="text"
                name="phone"
                defaultValue={input.phone}
                placeholder="Phone"
                onChange={(e) => handleOnChange(e)}
                size="small"
                required
              />
              {errors.phone && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.phone}
                </DialogContentText>
              )}
              <TextField
                type="text"
                name="address"
                defaultValue={input.address}
                placeholder="Address"
                onChange={(e) => handleOnChange(e)}
                size="small"
                required
              />
              {errors.address && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.address}
                </DialogContentText>
              )}
              <TextField
                type="text"
                name="email"
                value={input.email}
                placeholder="Email"
                onChange={(e) => handleOnChange(e)}
                size="small"
                required
              />
              {errors.email && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.email}
                </DialogContentText>
              )}
              <PrimaryButton type="submit">
                {status ? "Submitting" : "Submit"}
              </PrimaryButton>
            </StyledForm>
          </StyledEditProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const validateForm = (input) => {
  let errors = {};
  if (!input.name.trim()) {
    errors.name = "Name is required";
  } else if (input.name.length < 4) {
    errors.name = "name must have more than 4 letters";
  }
  if (!input.phone) {
    errors.phone = "You must provider a phone number";
  } else if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      input.phone
    )
  ) {
    errors.phone = "Phone number should have a valid format";
  }

  if (!input.address.trim()) {
    errors.address = "You must privider an address";
  } else if (input.address.length < 10) {
    errors.address = "Address should have at least 10 letters";
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.email = "Insert a valid email format";
  }
  return errors;
};
