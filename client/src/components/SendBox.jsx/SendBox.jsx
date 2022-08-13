import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SendBox.css";

const SendBox = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartTotalQuantity);

  const [input, setInput] = useState(Array(cart.cartItems.length).fill(""));
  //console.log(input);

  const handleEmailChange = (e, position) => {
    //console.log(e.target.value, position);
    //console.log(cart);
    setInput((prev) =>
      prev.map((el, index) => {
        if (index === position) el = e.target.value;
        return el;
      })
    );
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    try {
      let total = cart.cartItems.map((item, i) => {
        const id = item.id;
        const quantity = item.cartQuantity;
        const name = item.name;
        const recipient = input[i];
        return { id, quantity, name, recipient };
      });

      axios.post("http://localhost:3001/orders", {
        amount: cart.cartTotalAmount,
        userId: "drowet0@4shared.com",
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
            <div className="all-card-sed">
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
                  <h2>¿Es para regalar?</h2>
                </div>
                <div className="email-place">
                  <form onSubmit={handleSubmit}>
                    <input
                      onChange={(e) => handleEmailChange(e, index)}
                      value={input[index]}
                      type="text"
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
            {cart?.cartItems.map((cartItem) => (
              <div className="summary-cart-box">
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
            <Link to="/payment">
              <button onClick={handleSubmit} className="go-payment-btn">
                Ir al pago
              </button>
            </Link>
          </div>
        </div>
      </div>
      PROBANDO COSAS
    </div>
  );
};

export default SendBox;