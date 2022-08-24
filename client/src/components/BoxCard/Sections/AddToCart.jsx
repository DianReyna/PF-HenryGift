import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/reducer/cartSlice";
import { getCart } from "../../../redux/actions/cartActions";
import axios from "axios";

const AddToCart = ({ box }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    user && dispatch(getCart(user._id));
    console.log(1);
  }, []);

  useEffect(() => {
    setTimeout(saveCart, 1000);
  }, [cart.cartItems]);

  const handleAddToCart = (box) => {
    dispatch(addToCart(box));
  };

  const saveCart = async () => {
    // const URL=" https://henrygift-api.herokuapp.com/"
    const URL = "http://localhost:3001";
    await axios.post(`${URL}/orders/cart`, {
      ...cart,
      user_id: user._id,
    });
    console.log(2);
  };

  return (
    <Button
      sx={{
        color: "black",
        border: "1px solid black",
        marginLeft: "3.8rem",
        bgcolor: "white",
      }}
      variant="outlined"
      onClick={() => handleAddToCart(box)}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
