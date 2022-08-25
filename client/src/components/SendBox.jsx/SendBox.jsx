import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SendBox.css";
import { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import PayButton from "../PayButton/PayButton";
import PersonIcon from "@mui/icons-material/Person";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

const SendBox = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

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
      const URL = " https://henrygift-api.herokuapp.com";
      // const URL = "http://localhost:3001";

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
                    <img
                      src={cartItem.image && cartItem.image.url}
                      alt={cartItem.name}
                    />
                  </div>
                  <div className="purchase-detail">
                    <div className="box-people">
                      <PersonIcon />
                      <h3> For {cartItem.person} persons</h3>
                    </div>
                    <div className="valid-till">
                      <InsertInvitationOutlinedIcon />
                      Valid until {cartItem.expiration_date}
                    </div>
                    <div className="box-amount">
                      <h1>${cartItem.price}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-bottom-send">
                <div className="receiver-form-title">
                  <h3>Insert the gift recipient email</h3>
                </div>
                <div className="email-place">
                  <form>
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
              <h3>Purchase summary</h3>
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
            <PayButton cartItems={cart.cartItems} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendBox;
