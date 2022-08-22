import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { getCart } from "../../redux/actions/cartActions";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "../../redux/reducer/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //console.log(cart);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    user && dispatch(getCart(user._id));
    console.log(1);
  }, []);

  const saveCart = async () => {
    await axios.post("http://localhost:3001/orders/cart", {
      ...cart,
      user_id: user._id,
    });
    console.log(2);
  };

  const handleRemoveFromCart = (cartItem) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(cartItem));
        Swal.fire("Eliminado!", "Tu item ha sido removido.", "success");
      }
    });
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = (e) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire("Eliminado!", "Tu carrito se ha limpiado.", "success");
      }
    });
  };

  useEffect(() => {
    setTimeout(saveCart, 1000);
  }, [cart.cartItems]);

  return (
    <div className="cart-container">
      <h2>Shopping cart</h2>
      {cart.cartItems && cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is momentaneously empty</p>
          <div className="start-shopping">
            <Link to="/">
              <ArrowBackIcon />
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p className="make-eaven-cart">
                      <PersonIcon /> For {cartItem.person} person/s
                    </p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.cartQuantity * cartItem.price}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <Button
              onClick={() => handleClearCart()}
              className="clear-btn"
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Clean Cart
            </Button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes included</p>
              <Link to="/send">
                <button>Continue</button>
              </Link>
              <div className="continue-shopping">
                <Link to="/">
                  <ArrowBackIcon />
                  <span>Keep shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
