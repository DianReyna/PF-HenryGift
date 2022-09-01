import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoxesAdmin,
  updateBoxes,
  putStateBoxes,
} from "../../../redux/actions/boxesActions";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  DialogContentText,
  TextField,
} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import {
  Edit,
  StyledEditProvider,
  StyledForm,
  PrimaryButton,
  ImagePreview,
} from "../CommonStyled";

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
      person: selectBox.person,
      detail: selectBox.detail,
      expiration: selectBox.expiration_date,
    });
  };
  const [boxImg, setBoxImg] = useState("");

  const handleChangeBoxImg = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  const transformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBoxImg(reader.result);
      };
    } else {
      setBoxImg("");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
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
  };

  const handleCompare = () => {
    if (
      input.name !== currentBox.name ||
      input.price !== currentBox.price ||
      input.person !== currentBox.person ||
      input.detail !== currentBox.detail ||
      input.expiration !== currentBox.expiration ||
      boxImg !== ""
    ) {
      return true;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (boxImg == "" && Object.keys(errors).length === 0) {
      dispatch(
        putStateBoxes({
          id: boxId,
          boxes: {
            name: input.name,
            price: input.price,
            person: input.person,
            detail: input.detail,
            expiration_date: input.expiration,
          },
        })
      );
    }

    if (Object.keys(errors).length === 0 && handleCompare()) {
      dispatch(
        updateBoxes({
          id: boxId,
          boxes: {
            name: input.name,
            price: input.price,
            image: boxImg,
            person: input.person,
            detail: input.detail,
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
        maxWidth={"md"}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent !Important",
            },
          },
        }}
      >
        <DialogTitle>Edit Box</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <TextField
                type="file"
                accept="image/"
                name="image"
                placeholder="Image"
                onChange={(e) => handleChangeBoxImg(e)}
                size="small"
              />
              <TextField
                type="text"
                name="name"
                defaultValue={input.name}
                placeholder="Name"
                onChange={(e) => handleChange(e)}
                required
                size="small"
                label="Name"
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
                id="standard-adornment-amount"
                defaultValue={input.price}
                label="Price"
                name="price"
                size="small"
                placeholder="Price"
                onChange={(e) => handleChange(e)}
                required
                startadornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
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
                name="person"
                defaultValue={input.person}
                placeholder="Person"
                onChange={(e) => handleChange(e)}
                required
                label="Person"
                size="small"
              />
              {errors.person && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.person}
                </DialogContentText>
              )}

              <TextField
                id="date"
                label="Expiration Date"
                type="date"
                name="expiration"
                defaultValue={input.expiration}
                sx={{ width: 220 }}
                onChange={(e) => handleChange(e)}
                size="small"
              />
              {errors.expiration && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.expiration}
                </DialogContentText>
              )}
              <TextField
                id="outlined-textarea"
                multiline
                rows={4}
                onChange={(e) => handleChange(e)}
                defaultValue={input.detail}
                label="Detail"
                name="detail"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "lightGrey !Important",
                    },
                  },
                }}
              />
              {errors.detail && (
                <DialogContentText
                  sx={{ color: "red !Important", fontSize: 13 }}
                >
                  {errors.detail}
                </DialogContentText>
              )}

              <PrimaryButton type="submit">
                {status ? "Submitting" : "Submit"}
              </PrimaryButton>
            </StyledForm>
            <ImagePreview>
              {boxImg ? (
                <>
                  <img src={boxImg} alt="box image" />
                </>
              ) : preview ? (
                <>
                  <img src={preview.url} alt="box image" />
                </>
              ) : (
                <p>Box image upload preview will appear here!</p>
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
  if (!input.price) {
    errors.price = "Enter box price";
  } else if (
    !/^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(.[0-9]{1,9})?$/.test(input.price)
  ) {
    errors.price = "Please enter a valid format";
  }

  if (!input.detail.trim()) {
    errors.detail = "Describe the detail of the box";
  } else if (input.detail.length < 25) {
    errors.detail = "The description must have at least 25 characters";
  }
  if (!input.expiration) {
    errors.expiration = "Enter the expiration date";
  }
  if (!input.person) {
    errors.person = "Enter the number of people";
  } else if (!/^[0-9]+$/.test(input.person)) {
    errors.person = "Enter a valid format (only integers)";
  }

  return errors;
};
