import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoxesAdmin, destroyBox } from "../../../redux/actions/boxesActions";
import { toast } from "react-toastify";
import { Delete } from "../CommonStyled";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material/";

export default function DeleteBoxes({ idBox }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const itemsBox = useSelector((state) => state.boxes);

  useEffect(() => {
    dispatch(getBoxesAdmin());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
    let selectBox = itemsBox.boxes.filter((el) => el.id === idBox);
    selectBox = selectBox[0];
    setName(selectBox.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(destroyBox(id));
    setOpen(false);
    toast.success("Box eliminated", {
      position: "top-right",
    });
  };

  return (
    <div>
      <Delete onClick={handleClickOpen}>
        <DeleteIcon />
      </Delete>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Box?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove the box: {name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleDelete(idBox)} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
