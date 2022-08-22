import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  destroyCategory,
} from "../../../redux/actions/categoryActions";
import { toast } from "react-toastify";
import { Delete } from "../CommonStyled";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dialog, DialogActions, DialogTitle } from "@mui/material/";
import { CreateNew, Cancel } from "../CommonStyled";

export default function DeleteCategory({ idCat }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const itemsCategory = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
    let selectCat = itemsCategory.categories.filter((el) => el.id === idCat);
    selectCat = selectCat[0];

    setName(selectCat.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(destroyCategory(id));
    setOpen(false);
    toast.success("Category eliminated", {
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
            fontFamily: "arial",
            textAlign: "center",
          }}
          id="alert-dialog-title"
        >
          {`Are you sure you want to remove the category ${name}?`}
        </DialogTitle>
        <DialogActions>
          <Cancel onClick={handleClose}>Cancel</Cancel>
          <CreateNew onClick={() => handleDelete(idProd)} autoFocus>
            Accept
          </CreateNew>
        </DialogActions>
      </Dialog>
    </div>
  );
}
