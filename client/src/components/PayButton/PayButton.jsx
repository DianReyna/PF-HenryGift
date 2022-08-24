import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
// const URL = `http://127.0.0.1:5173`
const URL = `https://henry-gift.vercel.app`;

const PayButton = ({ cartItems, handleSubmit }) => {
  const { user } = useSelector((state) => state.auth);

  const handleCheckOut = () => {
    axios
      .post(`${URL}/stripe/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
    handleSubmit();
  };

  return (
    <div>
      <Button
        sx={{ bgcolor: "rgb(217, 79, 15)" }}
        variant="contained"
        onClick={() => handleCheckOut()}
      >
        Check Out
      </Button>
    </div>
  );
};

export default PayButton;
