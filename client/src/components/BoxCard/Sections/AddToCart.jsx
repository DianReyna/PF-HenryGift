import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../../redux/reducer/cartSlice";
import { getCart } from "../../../redux/actions/cartActions";
import { Button } from "@mui/material";
import axios from "axios";

const AddToCart = ({ box }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleAddToCart = (box) => {
    dispatch(addToCart(box));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    user && dispatch(getCart(user._id));
    console.log(1);
  }, []);

  const saveCart = async () => {
    // const URL = " https://henrygift-api.herokuapp.com";
    const URL = "http://localhost:3001";
    await axios.post(`${URL}/orders/cart`, {
      ...cart,
      user_id: user._id,
    });
    console.log(2);
  };

  useEffect(() => {
    setTimeout(saveCart, 1000);
  }, [cart.cartItems]);

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
