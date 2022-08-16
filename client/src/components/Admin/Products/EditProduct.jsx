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
import {
  DialogContentText,
  FormLabel,
  TextareaAutosize,
  TextField,
} from "@mui/material";
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
    if (input.image !== currentProd.image && input.image !== "") {
      setPreview(value);
    }
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
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent !Important",
            },
          },
        }}
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="image"
                label="Image"
                size="small"
                placeholder="Image"
                onChange={(e) => handleOnChange(e)}
              />
              {errors.image && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.image}
                </DialogContentText>
              )}
              <TextField
                type="text"
                name="name"
                defaultValue={input.name}
                onChange={(e) => handleOnChange(e)}
                size="small"
                label="Name"
                placeholder="Name"
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
                name="price"
                size="small"
                placeholder="Price"
                label="Price"
                defaultValue={input.price}
                onChange={(e) => handleOnChange(e)}
                required
              />
              {errors.price && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.price}
                </DialogContentText>
              )}
              <TextField
                type="text"
                name="location"
                size="small"
                label="Location"
                placeholder="Location"
                defaultValue={input.location}
                onChange={(e) => handleOnChange(e)}
                required
              />
              {errors.location && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.location}
                </DialogContentText>
              )}

              <select
                onChange={(e) => handleOnChange(e)}
                size="small"
                label="Provider"
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
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.provider}
                </DialogContentText>
              )}

              <TextareaAutosize
                maxRows={5}
                type="text-area"
                name="description"
                label="Description"
                placeholder="Description"
                defaultValue={input.description}
                onChange={(e) => handleOnChange(e)}
                required
                style={{ width: 200, height: 90 }}
              />
              {errors.description && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.description}
                </DialogContentText>
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
  const errors = {};
  if (!input.name.trim()) {
    errors.name = "Name is required";
  } else if (input.name.length < 4) {
    errors.name = "Name must have more than 4 letters";
  }
  if (!input.description.trim()) {
    errors.description = "Describe the detail of your product ";
  } else if (input.description.length < 25) {
    errors.description = "The description must have at least 25 characters";
  }
  if (!input.price) {
    errors.price = "Enter product price";
  } else if (
    !/^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(.[0-9]{1,9})?$/.test(input.price)
  ) {
    errors.price = "Please enter a valid format";
  }
  if (!input.location.trim()) {
    errors.location =
      "You must enter the location where the service is provided";
  } else if (input.location.length < 10) {
    errors.location = "The address must have at least 10 letters";
  }
  if (!input.image.trim()) {
    errors.image = "Required field, enter an image";
  }

  return errors;
};
