import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../../redux/reducer/cartSlice";
import { getCart } from "../../../redux/actions/cartActions";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
  }, [dispatch]);

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
  }, [cart.cartTotalQuantity]);

  return (
    <Button
      sx={{ marginLeft: "3.8rem"}}
      variant="outlined"
      onClick={() => handleAddToCart(box)}
    >
      Add to Cart
      <ShoppingCartIcon sx={{ fill: "black" }} />
    </Button>
  );
};

export default AddToCart;
