import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  updateProduct,
} from "../../../redux/actions/productsActions";
import { getProvider } from "../../../redux/actions/providerActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import {
  Edit,
  StyledEditProvider,
  StyledForm,
  PrimaryButton,
  ImagePreview,
} from "../CommonStyled";

export default function EditProduct({ prodId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const [currentProd, setCurrentProd] = useState({});
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    price: "",
    image: "",
    location: "",
    description: "",
    provider: "",
  });

  const providers = useSelector((state) => state.providers);
  const itemsProducts = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProvider());
    dispatch(getProducts());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);

    let selectProd = itemsProducts.products.filter((el) => el.id === prodId);
    selectProd = selectProd[0];

    setCurrentProd(selectProd);
    setPreview(selectProd.image);
    setInput({
      name: selectProd.name,
      price: selectProd.price,
      image: selectProd.image,
      location: selectProd.location,
      description: selectProd.description,
      provider: selectProd.Provider.name,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setPreview(value);
    setInput({
      ...input,
      [e.target.name]: value,
    });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: value,
      })
    );
  };
  const handleCompare = () => {
    if (
      input.name !== currentProd.name ||
      input.price !== currentProd.price ||
      input.location !== currentProd.location ||
      input.image !== currentProd.image ||
      input.description !== currentProd.description ||
      input.provider !== currentProd.Provider.name
    ) {
      return true;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && handleCompare()) {
      dispatch(
        updateProduct({
          id: prodId,
          product: {
            name: input.name,
            price: input.price,
            image: input.image,
            location: input.location,
            description: input.description,
            provider: input.provider,
          },
        })
      );
      setTimeout(() => {
        dispatch(getProducts());
      }, 2000);
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
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <input
                type="text"
                name="image"
                placeholder="Image"
                onChange={(e) => handleOnChange(e)}
              />
              {errors.image && (
                <DialogContentText>{errors.image}</DialogContentText>
              )}
              <input
                type="text"
                name="name"
                defaultValue={input.name}
                onChange={(e) => handleOnChange(e)}
                placeholder="Name"
                required
              />
              {errors.name && (
                <DialogContentText>{errors.name}</DialogContentText>
              )}
              <input
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={input.price}
                onChange={(e) => handleOnChange(e)}
                required
              />
              {errors.price && (
                <DialogContentText>{errors.price}</DialogContentText>
              )}
              <input
                type="text"
                name="location"
                placeholder="Location"
                defaultValue={input.location}
                onChange={(e) => handleOnChange(e)}
                required
              />
              {errors.location && (
                <DialogContentText>{errors.location}</DialogContentText>
              )}
              <select
                onChange={(e) => handleOnChange(e)}
                defaultValue={input.provider}
                name="provider"
              >
                {providers.providers?.map(({ name, id }) => {
                  return (
                    <option key={id} name="provider" value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
              {errors.provider && (
                <DialogContentText>{errors.provider}</DialogContentText>
              )}
              <input
                type="text-area"
                name="description"
                placeholder="Description"
                defaultValue={input.description}
                onChange={(e) => handleOnChange(e)}
                required
              />
              {errors.description && (
                <DialogContentText>{errors.description}</DialogContentText>
              )}
              <PrimaryButton type="submit">
                {status ? "Submitting" : "Submit"}
              </PrimaryButton>
            </StyledForm>
            <ImagePreview>
              {preview ? (
                <>
                  <img src={preview} alt="product image" />
                </>
              ) : (
                <p>Product image upload preview will appear here!</p>
              )}
            </ImagePreview>
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

  return errors;
};
