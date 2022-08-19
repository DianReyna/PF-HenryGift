import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Create, ContentDialog } from "../../Admin/CommonStyled";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../redux/actions/productsActions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";

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

  const handleView = () => {
    setOpen(false);
    setTimeout(() => {
      dispatch(getProducts());
      let selectProduct = itemsProducts.products.filter(
        (el) => el.name === product.name
      );
      selectProduct = selectProduct[0];
      navigate(`/product/${selectProduct.id}`);
    }, 3000);
  };

  const handleClickOpen = () => {
    setOpen(true);
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
        <DialogTitle id="alert-dialog-title">
          {"What do you want to do?"}
        </DialogTitle>
        <ContentDialog>
          <DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Create
              </Button>
            </DialogActions>
          </DialogContent>
          <DialogContent>
            <DialogActions>
              <Button onClick={handleView} autoFocus>
                View Detail
              </Button>
            </DialogActions>
          </DialogContent>
        </ContentDialog>
        <DialogActions>
          <Button
            onClick={() => {
              navigate(`/admin`);
            }}
          >
            Home
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
