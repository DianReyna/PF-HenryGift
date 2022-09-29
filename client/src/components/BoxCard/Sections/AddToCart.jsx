import React, { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../../redux/reducer/cartSlice";
import { getCart } from "../../../redux/actions/cartActions";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { URL } from "../../../utils/index";

const AddToCart = ({ box }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
=======
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
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611

  const handleAddToCart = (box) => {
    dispatch(addToCart(box));
  };

<<<<<<< HEAD
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    user && dispatch(getCart(user._id));
    console.log(1);
  }, [dispatch]);

  const saveCart = async () => {
=======
  const saveCart = async () => {
    // const URL=" https://henrygift-api.herokuapp.com/"
    const URL = "http://localhost:3001";
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
    await axios.post(`${URL}/orders/cart`, {
      ...cart,
      user_id: user._id,
    });
    console.log(2);
  };

<<<<<<< HEAD
  useEffect(() => {
    setTimeout(saveCart, 1000);
  }, [cart.cartTotalQuantity]);

  return (
    <Button
      sx={{ marginLeft: "3.8rem" }}
=======
  return (
    <Button
      sx={{
        color: "black",
        border: "1px solid black",
        marginLeft: "3.8rem",
        bgcolor: "white",
      }}
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
      variant="outlined"
      onClick={() => handleAddToCart(box)}
    >
      Add to Cart
<<<<<<< HEAD
      {/* <ShoppingCartIcon color="primary" /> */}
=======
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
    </Button>
  );
};

export default AddToCart;
