import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  updateCategory,
} from "../../../redux/actions/categoryActions";
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
} from "../CommonStyled";

export default function EditCategory({ catId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const [currentCat, setCurrentCat] = useState({});
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
  });

  const itemsCategory = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);

    let selectCat = itemsCategory.categories.filter((el) => el.id === catId);
    selectCat = selectCat[0];

    setCurrentCat(selectCat);
    setInput({
      name: selectCat.name,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      name: value,
    });
    setErrors(
      validateForm({
        ...input,
        name: value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && input.name !== currentCat.name) {
      dispatch(
        updateCategory({
          id: catId,
          category: {
            name: input.name,
          },
        })
      );
      setTimeout(() => {
        dispatch(getCategory());
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
        <DialogTitle>Edit Categoria</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
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

              <PrimaryButton type="submit">
                {status ? "Submitting" : "Submit"}
              </PrimaryButton>
            </StyledForm>
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
