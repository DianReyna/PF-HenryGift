import * as React from "react";
import Rating from "@mui/material/Rating";
import styled from "styled-components";
import Reviews from "../Reviews/Reviews";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviews } from "../../redux/actions/reviewsActions";
import { toast } from "react-toastify";
import { Button, TextField } from "@mui/material";
import styles from './ReviewBar.css'

export default function ReviewBar({ id }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");

  const { user } = useSelector((state) => state.auth);

  const handleBlur = () => {
    if (!user) {
      toast.warning("Register to leave your review", {
        position: "top-right",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const info = {
        user: user._id,
        box: id,
      };
      dispatch(createReviews(info, value, message));
      setMessage("");
    } else {
      toast.warning("Register to leave your review", {
        position: "top-right",
      });
    }
  };

  return (
    <ReviewContent
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <div className={styles.container}>
        <Rating
          name="simple-controlled"
          value={value}
          onBlur={handleBlur}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <div className={styles.textField}>
          <TextField
            disabled={false}
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Write a costumer review"
            size="small"
            sx={{
              input: {
                color: "white",
              }
            }}
          />
          <Button color="success" size="md" variant="solid" onClick={handleSubmit}>Send</Button>
        </div>
      </div>
      <div>
        <Reviews id={id} />
      </div>
    </ReviewContent>
  );
}

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
