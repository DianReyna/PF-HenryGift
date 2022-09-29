import React from "react";
import { useEffect, useState } from "react";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
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
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Rating,
  TextField,
  Typography,
} from "@mui/material/";
import SendIcon from "@mui/icons-material/Send";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./UserReview.css";

export default function UserReview({ box_id, user_id, box_name }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const [reviewUser, setReviewUser] = useState({
    status: "false",
    value: "",
    message: "",
  });
  const [errors, setErrors] = useState({
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

  const handleBlur = (val) => {
    const error = {};
    if (message == "") {
      error.message = "You must add your experience with this box";
    }
    if (value === 0) {
      error.value = "Add a rating";
    }
    setErrors(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      user: user_id,
      box: box_id,
    };
    handleBlur();
    if (Object.keys(errors).length === 0) {
      dispatch(createReviews(info, value, message));
      setOpen(false);
      setMessage("");
      setValue(0);
      toast.success("The review has been saved", {
        position: "top-right",
      });
    }
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
        <div className="containerTitle">
          <Typography
            sx={{
              mt: 3,
              mb: 3,
              display: "inline",
              color: "",
              marginLeft: 4,
            }}
            textalign="center"
            id="alert-dialog-title"
            variant="h4"
            component="div"
          >
            {box_name}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{ marginRight: 3, fontWeight: 500 }}
          >
            X
          </IconButton>
        </div>
        <ContentDialog className="containerDialog">
          {reviewUser.status === "true" ? (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}
              aria-label="contacts"
            >
              <ListItem disablePadding>
                <Typography color="secondary">
                  <Rating
                    name="read-only"
                    value={reviewUser.value}
                    readOnly
                    sx={{
                      marginLeft: 12,
                      fontSize: 35,
                    }}
                  />
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <Grid xs={12} sm={6} item>
                  <Typography variant="subtitle1" sx={{ marginLeft: 12 }}>
                    {"Write a costumer review"}
                  </Typography>
                  <TextField
                    id="outlined-textarea"
                    multiline
                    rows={4}
                    disabled={false}
                    name="message"
                    defaultValue={reviewUser.message}
                    placeholder="Write a review"
                    fullWidth
                    color="primary"
                    sx={{
                      marginLeft: 6,
                    }}
                  />
                </Grid>
              </ListItem>
            </List>
          ) : (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}
              aria-label="contacts"
            >
              <ListItem disablePadding>
                <Typography color="secondary">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onBlur={handleBlur}
                    sx={{
                      marginLeft: 10,
                      fontSize: 35,
                    }}
                  />
                </Typography>
                {errors.value && (
                  <Typography sx={{ color: "red !Important", fontSize: 13 }}>
                    {errors.value}
                  </Typography>
                )}
              </ListItem>
              <ListItem disablePadding>
                <Grid xs={12} sm={6} item>
                  <Typography variant="subtitle1" sx={{ marginLeft: 11 }}>
                    {"Write a costumer review"}
                  </Typography>
                  <TextField
                    id="outlined-textarea"
                    multiline
                    rows={4}
                    disabled={false}
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    onBlur={handleBlur}
                    placeholder="Write a review"
                    fullWidth
                    color="primary"
                    sx={{
                      marginLeft: 6,
                    }}
                  />
                </Grid>
              </ListItem>
              {errors.message && (
                <Typography
                  sx={{ color: "red !Important", fontSize: 13, marginLeft: 7 }}
                >
                  {errors.message}
                </Typography>
              )}
            </List>
          )}
        </ContentDialog>
        <DialogActions>
          {reviewUser.status === "true" ? (
            <Button
              size="md"
              variant="contained"
              sx={{
                marginLeft: 1,
                marginRight: 3,
              }}
              onClick={handleSaved}
            >
              Saved
              <ErrorOutlineIcon sx={{ marginLeft: 1 }} />
            </Button>
          ) : (
            <Button
              size="md"
              variant="contained"
              sx={{
                marginLeft: 1,
                marginRight: 3,
              }}
              onClick={handleSubmit}
            >
              Send
              <SendIcon sx={{ marginLeft: 1 }} />
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
