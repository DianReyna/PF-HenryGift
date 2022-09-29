import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
<<<<<<< HEAD
import URL from "../../utils/backRoutes";
const PayButton = ({ cartItems,handleSubmit }) => {
=======
import { URL } from "../../utils/index";

const PayButton = ({ cartItems, handleSubmit }) => {
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
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
        sx={{ bgcolor: "rgb(217, 79, 15)", color: 'text.primary' }}
        variant="contained"
        onClick={() => handleCheckOut()}
      >
        Check Out
      </Button>
    </div>
  );
};

export default PayButton;
