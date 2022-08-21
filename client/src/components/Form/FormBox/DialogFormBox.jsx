import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Create, ContentDialog } from "../../Admin/CommonStyled";
import { useNavigate } from "react-router-dom";
import { getBoxesAdmin } from "../../../redux/actions/boxesActions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";

export default function DialogFormBox({ nameBox }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState({
    name: "",
  });
  const itemsBox = useSelector((state) => state.boxes);
  useEffect(() => {
    dispatch(getBoxesAdmin());
  }, [dispatch]);

  const handleView = () => {
    setOpen(false);
    setTimeout(() => {
      dispatch(getBoxesAdmin());
      let selectBox = itemsBox.boxes.filter((el) => el.name === box.name);
      selectBox = selectBox[0];
      navigate(`/box/${selectBox.id}`);
    }, 3000);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setBox({
      name: nameBox,
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
