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
import DialogTitle from "@mui/material/DialogTitle";
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

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");

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
    setImage(selectProd.image);
    setName(selectProd.name);
    setPrice(selectProd.price);
    setLocation(selectProd.location);
    setDescription(selectProd.description);
    setProvider(selectProd.Provider.name);
    console.log(prodId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setPreview(value);
    setImage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: prodId,
        product: {
          name: name,
          price: price,
          image: image,
          location: location,
          description: description,
          provider: provider,
        },
      })
    );
    setStatus(true);
    handleClose();
  };

  return (
    <div>
      <Edit onClick={handleClickOpen}>Edit</Edit>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <input
                type="text"
                name="image"
                placeholder="Image"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <select
                onChange={(e) => setProvider(e.target.value)}
                defaultValue={provider}
              >
                {providers.providers?.map(({ name, id }) => {
                  return (
                    <option key={id} name="provider" value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
              <input
                type="text-area"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
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
    </div>
  );
}
