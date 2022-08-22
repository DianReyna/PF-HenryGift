import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SendBox.css";
import { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import PayButton from "../PayButton/PayButton";

const SendBox = () => {
  const cart = useSelector((state) => state.cart);
  
  const [input, setInput] = useState(Array(cart.cartItems.length).fill(""));



  const { user } = useSelector((state) => state.auth);


  const handleEmailChange = (e, position) => {
    setInput((prev) =>
      prev.map((el, index) => {
        if (index === position) el = e.target.value;
        return el;
      })
    );
  };

  const handleSubmit = (e) => {
    console.log(input);
    try {
      let total = cart.cartItems.map((item, i) => {
        const id = item.id;
        const quantity = item.cartQuantity;
        const name = item.name;
        const recipient = input[i];
        return { id, quantity, name, recipient };
      });
      // const URL=" https://henrygift-api.herokuapp.com/"
      const URL = "http://localhost:3001";

      axios.post(` ${URL}/orders`, {
        amount: cart.cartTotalAmount,
        userId: user._id,
        boxes: total,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-send-cont">
      <div className="main-top-cont">
        <div className="left-send-side">
          {cart?.cartItems.map((cartItem, index) => (
            <div className="all-card-sed" key={index}>
              <div className="container-all-send">
                <div className="box-title-send">
                  <h2>{cartItem.name}</h2>
                </div>
                <div className="box-info">
                  <div className="product-image">
                    <img src={cartItem.image} alt={cartItem.name} />
                  </div>
                  <div className="purchase-detail">
                    <div className="box-people">
                      <h3>Para {cartItem.person} personas</h3>
                    </div>
                    <div className="valid-till">Valido hasta 31/12/2022</div>
                    <div className="box-amount">
                      <h1>${cartItem.price}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-bottom-send">
                <div className="receiver-form-title">
                  <h3>Ingrese el email del destinatario</h3>
                </div>
                <div className="email-place">
                  <form >
                    <TextField
                      sx={{
                        input: {
                          color: "white",
                        },
                      }}
                      onChange={(e) => handleEmailChange(e, index)}
                      value={input[index]}
                      type="text"
                      fullWidth
                      placeholder="Ingrese el email del agasajado"
                      className="place-email"
                    />
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right-side">
          <div className="rigth-send-side">
            <div className="summary-cart-title">
              <h3>Resumen de Compra</h3>
            </div>
            {cart?.cartItems.map((cartItem, index) => (
              <div key={index} className="summary-cart-box">
                <h3>
                  {cartItem.name} x{cartItem.cartQuantity}
                </h3>
                <h3>${cartItem.price}</h3>
              </div>
            ))}
            <div className="total-summary">
              <h2>Total</h2>
              <h2>${cart.cartTotalAmount}</h2>
            </div>
          </div>
          <div className="go-payment">
            {user && user._id ? (
              <PayButton cartItems={cart.cartItems} handleSubmit={handleSubmit} />
            ) : (
              <Link to="/login">
                <Button variant="outlined">Login to Check Out</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendBox;
