import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems,handleSubmit }) => {
  const { user } = useSelector((state) => state.auth);

  const handleCheckOut = () => {
    axios
      .post(`http://localhost:3001/stripe/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
      handleSubmit()
  };

  return (
    <div>
      <button onClick={() => handleCheckOut()}>Check Out</button>
    </div>
  );
};

export default PayButton;
