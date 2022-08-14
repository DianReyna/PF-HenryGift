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

export default function EditProvider({ provId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const [currentProv, setCurrentProv] = useState({});

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const itemsProvider = useSelector((state) => state.providers);
  useEffect(() => {
    dispatch(getProvider());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
    let selectProv = itemsProvider.providers.filter((el) => el.id === provId);
    selectProv = selectProv[0];
    setCurrentProv(selectProv);
    setName(selectProv.name);
    setPhone(selectProv.phone);
    setAddress(selectProv.address);
    setEmail(selectProv.email);
    console.log(provId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateProvider({
        id: provId,
        provider: {
          name: name,
          phone: phone,
          address: address,
          email: email,
        },
      })
    );
    setStatus(true);
    handleClose();
  };

  return (
    <div>
      <Edit onClick={handleClickOpen}>Edit</Edit>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Provider</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                name="phone"
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
    </div>
  );
}
