import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoxesAdmin,
  updateBoxes,
} from "../../../redux/actions/boxesActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {
  Edit,
  StyledEditProvider,
  StyledForm,
  PrimaryButton,
  ImagePreview,
} from "../CommonStyled";
import { DialogContentText } from "@mui/material";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";

export default function EditBox({ boxId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const [currentBox, setCurrentBox] = useState({});
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    price: "",
    image: "",
    person: "",
    detail: "",
    ranking: "",
    expiration: "",
  });

  const itemsBox = useSelector((state) => state.boxes);

  useEffect(() => {
    dispatch(getBoxesAdmin());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);

    let selectBox = itemsBox.boxes.filter((el) => el.id === boxId);
    selectBox = selectBox[0];

    setCurrentBox(selectBox);
    setPreview(selectBox.image);
    setInput({
      name: selectBox.name,
      price: selectBox.price,
      image: selectBox.image,
      person: selectBox.person,
      detail: selectBox.detail,
      ranking: selectBox.ranking,
      expiration: selectBox.expiration_date,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
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
      input.name !== currentBox.name ||
      input.price !== currentBox.price ||
      input.person !== currentBox.person ||
      input.image !== currentBox.image ||
      input.detail !== currentBox.detail ||
      input.expiration !== currentBox.expiration ||
      input.ranking !== currentBox.ranking
    ) {
      return true;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0 && handleCompare()) {
      dispatch(
        updateBoxes({
          id: boxId,
          boxes: {
            name: input.name,
            price: input.price,
            image: input.image,
            person: input.person,
            detail: input.detail,
            ranking: input.ranking,
            expiration_date: input.expiration,
          },
        })
      );
      setTimeout(() => {
        dispatch(getBoxesAdmin());
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
        maxWidth={"mx"}
      >
        <DialogTitle>Edit Box</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <input
                type="text"
                name="image"
                placeholder="Image"
                onChange={(e) => handleChange(e)}
                label="Image"
              />
              {errors.image && (
                <DialogContentText>{errors.image}</DialogContentText>
              )}
              <input
                type="text"
                name="name"
                defaultValue={input.name}
                placeholder="Name"
                onChange={(e) => handleChange(e)}
                required
                label="Name"
              />
              {errors.name && (
                <DialogContentText>{errors.name}</DialogContentText>
              )}
              <Input
                type="number"
                id="standard-adornment-amount"
                defaultValue={input.price}
                lable="Price"
                name="price"
                placeholder="Price"
                onChange={(e) => handleChange(e)}
                required
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
              {errors.price && (
                <DialogContentText>{errors.price}</DialogContentText>
              )}

              <input
                type="number"
                name="person"
                defaultValue={input.person}
                placeholder="Person"
                onChange={(e) => handleChange(e)}
                required
                label="Person"
              />
              {errors.person && (
                <DialogContentText>{errors.person}</DialogContentText>
              )}
              <input
                type="text"
                name="ranking"
                defaultValue={input.ranking}
                placeholder="Ranking"
                onChange={(e) => handleChange(e)}
                required
                label="Ranking"
              />
              {errors.ranking && (
                <DialogContentText>{errors.ranking}</DialogContentText>
              )}

              <input
                id="date"
                label="Expiration Date"
                type="date"
                name="expiration"
                defaultValue={input.expiration}
                sx={{ width: 220 }}
                onChange={(e) => handleChange(e)}
              />
              {errors.expiration && (
                <DialogContentText>{errors.expiration}</DialogContentText>
              )}
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                onChange={(e) => handleChange(e)}
                defaultValue={input.detail}
                name="detail"
                style={{ width: 200 }}
                label="Detail"
              />
              {errors.detail && (
                <DialogContentText>{errors.detail}</DialogContentText>
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
