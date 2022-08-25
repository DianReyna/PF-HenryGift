import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Create, ContentDialog } from "../Admin/CommonStyled";
import {
  createReviews,
  getUserReviews,
} from "../../redux/actions/reviewsActions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField,
} from "@mui/material/";
import { CreateNew, ViewDetail, Cancel } from "../Admin/CommonStyled";

export default function UserReview({ box_id, user_id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const [reviewUser, setReviewUser] = useState({
    status: "false",
    value: "",
    message: "",
  });

  const review = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getUserReviews(user_id));
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
    const find = review.reviews?.find((item) => item.box_id === box_id);

    if (find) {
      setReviewUser({
        status: "true",
        value: find.scoreBox,
        message: find.menssageBox,
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaved = () => {
    toast.warning("The review of this box already exists", {
      position: "top-right",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      user: user_id,
      box: box_id,
    };
    dispatch(createReviews(info, value, message));
    setMessage("");
    setValue(0);
    toast.success("Register to leave your review", {
      position: "top-right",
    });
  };

  return (
    <div>
      <Create onClick={handleClickOpen}>Review</Create>

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
          {"Write a costumer review"}
        </DialogTitle>
        <ContentDialog>
          {reviewUser.status === "true" ? (
            <div>
              <Rating
                name="read-only"
                value={reviewUser.value}
                readOnly
                sx={{ background: "black" }}
              />

              <div>
                <TextField
                  disabled={false}
                  name="message"
                  defaultValue={reviewUser.message}
                  placeholder="Write a review"
                  size="small"
                  sx={{
                    input: {
                      color: "black",
                    },
                  }}
                />
                <Button
                  color="success"
                  size="md"
                  variant="solid"
                  onClick={handleSaved}
                >
                  Saved
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Rating
                name="simple-controlled"
                value={value}
                sx={{ background: "black" }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                style={{ color: "red" }}
              />
              <div>
                <TextField
                  disabled={false}
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Write a review"
                  size="small"
                  sx={{
                    input: {
                      color: "black",
                    },
                  }}
                />
                <Button
                  color="success"
                  size="md"
                  variant="solid"
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </div>
            </div>
          )}
        </ContentDialog>
        <DialogActions>
          <Cancel onClick={handleClose}>Cancel</Cancel>
        </DialogActions>
      </Dialog>
    </div>
  );
}
