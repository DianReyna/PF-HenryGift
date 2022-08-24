import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Create, ContentDialog } from "../../Admin/CommonStyled";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../redux/actions/productsActions";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";
import { CreateNew, ViewDetail, Cancel } from "../../Admin/CommonStyled";

export default function DialogFormProduct({ nameProd }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({
    name: "",
  });

  const itemsProducts = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const view = () => {
    let selectProduct = itemsProducts.products.filter(
      (el) => el.name === product.name
    );
    selectProduct = selectProduct[0];
    console.log(selectProduct);
    navigate(`/product/${selectProduct.id}`);
  };

  const handleView = () => {
    setTimeout(() => {
      dispatch(getProducts());
      view();
    }, 3000);
    view();
    setOpen(false);
  };

  const handleClickOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
    setProduct({
      name: nameProd,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Create onClick={handleClickOpen}>Create</Create>

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
          {"What do you want to do?"}
        </DialogTitle>
        <ContentDialog>
          <DialogContent>
            <DialogActions>
              <CreateNew onClick={handleClose} autoFocus>
                Create new box
              </CreateNew>
            </DialogActions>
          </DialogContent>
          <DialogContent>
            <DialogActions>
              <ViewDetail onClick={handleView}>View Detail</ViewDetail>
            </DialogActions>
          </DialogContent>
          <DialogContent>
            <DialogActions>
              <Cancel onClick={handleClose}>Cancel</Cancel>
            </DialogActions>
          </DialogContent>
        </ContentDialog>
      </Dialog>
    </div>
  );
}
