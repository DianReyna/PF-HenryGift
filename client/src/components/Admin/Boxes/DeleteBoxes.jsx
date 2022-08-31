import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoxesAdmin, destroyBox } from "../../../redux/actions/boxesActions";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dialog, DialogActions, DialogTitle } from "@mui/material/";
import { CreateNew, Cancel, Delete } from "../CommonStyled";

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
        <DialogTitle
          sx={{
            fontSize: 25,
            color: "#545454",
            textAlign: "center",
          }}
          id="alert-dialog-title"
        >
          {`Are you sure you want to remove the box ${name}?`}
        </DialogTitle>

        <DialogActions>
          <Cancel onClick={handleClose}>Cancel</Cancel>
          <CreateNew onClick={() => handleDelete(idBox)} autoFocus>
            Accept
          </CreateNew>
        </DialogActions>
      </Dialog>
    </div>
  );
}
