import * as React from "react";
import Rating from "@mui/material/Rating";
import styled from "styled-components";
import Reviews from "../Reviews/Reviews";
import { useState } from "react";

export default function ReviewBar({ id }) {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  return (
    <ReviewContent
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <div sx={{ cursor: "pointer" }} onClick={handleClick}>
          {status ? <span>close</span> : <span>Write a costumer review</span>}
        </div>
        {status ? (
          <>
            <input placeholder="Write your review" />
            <button>Send</button>
          </>
        ) : null}
      </div>
      <div>
        <Reviews id={id} />
      </div>
    </ReviewContent>
  );
}

export const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
