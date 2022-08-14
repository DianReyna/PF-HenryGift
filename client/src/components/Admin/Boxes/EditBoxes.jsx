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

export default function EditBox({ boxId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const [currentProv, setCurrentProv] = useState({});
  const [preview, setPreview] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [person, setPerson] = useState("");
  const [detail, setDetail] = useState("");
  const [ranking, setRanking] = useState("");
  const [expiration, setExpiration] = useState("");

  const itemsBox = useSelector((state) => state.boxes);

  useEffect(() => {
    dispatch(getBoxesAdmin());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
    let selectBox = itemsBox.boxes.filter((el) => el.id === boxId);
    selectBox = selectBox[0];
    setCurrentProv(selectBox);
    setName(selectBox.name);
    setPrice(selectBox.price);
    setImage(selectBox.image);
    setPreview(selectBox.image);
    setPerson(selectBox.person);
    setDetail(selectBox.detail);
    setRanking(selectBox.ranking);
    setExpiration(selectBox.expiration_date);
    console.log(boxId);
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
      updateBoxes({
        id: boxId,
        provider: {
          name: name,
          price: price,
          image: image,
          person: person,
          detail: detail,
          ranking: ranking,
          expiration_date: expiration,
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
        maxWidth={"mx"}
      >
        <DialogTitle>Edit Box</DialogTitle>
        <DialogContent>
          <StyledEditProvider>
            <StyledForm onSubmit={handleSubmit}>
              <Input
                type="text"
                name="image"
                placeholder="Image"
                onChange={(e) => handleChange(e)}
                label="Image"
              />
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
                label="Name"
              />
              <Input
                type="number"
                id="standard-adornment-amount"
                value={price}
                lable="Price"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                required
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />

              <Input
                type="number"
                name="person"
                value={person}
                placeholder="Person"
                onChange={(e) => setPerson(e.target.value)}
                required
                label="Person"
              />
              <Input
                type="text"
                name="ranking"
                value={ranking}
                placeholder="Ranking"
                onChange={(e) => setRanking(e.target.value)}
                required
                label="Ranking"
              />

              <Input
                id="date"
                label="Expiration Date"
                type="date"
                defaultValue={expiration}
                sx={{ width: 220 }}
                onChange={(e) => setExpiration(e.target.value)}
              />

              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                onChange={(e) => setDetail(e.target.value)}
                value={detail}
                style={{ width: 200 }}
                label="Detail"
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
