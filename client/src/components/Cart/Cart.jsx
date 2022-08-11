import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = (e) => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Tu carrito se encuentra momentaneamente vacio</p>
          <div className="start-shopping">
            <Link to="/">
              <ArrowBackIcon />
              <span>Empezar a comprar</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Producto</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Cantidad</h3>
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
                      <PersonIcon /> Para {cartItem.person} persona/s
                    </p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Eliminar
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
              Limpiar Carrito
            </Button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Impuestos incluidos</p>
              <Link to="/send">
                <button>Siguiente</button>

              </Link>
              <div className="continue-shopping">
                <Link to="/">
                  <ArrowBackIcon />
                  <span>Continuar comprando</span>
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
