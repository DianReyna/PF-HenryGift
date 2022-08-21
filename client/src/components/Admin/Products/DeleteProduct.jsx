import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  destroyProduct,
} from "../../../redux/actions/productsActions";
import { toast } from "react-toastify";
import { Delete } from "../CommonStyled";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dialog, DialogActions, DialogTitle } from "@mui/material/";
import { CreateNew, Cancel } from "../CommonStyled";

export default function DeleteProduct({ idProd }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const itemsProducts = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
    let selectProd = itemsProducts.products.filter((el) => el.id === idProd);
    selectProd = selectProd[0];
    setName(selectProd.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(destroyProduct(id));
    setOpen(false);
    toast.success("Product eliminated", {
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
          {`Are you sure you want to remove the product ${name} ?`}
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
