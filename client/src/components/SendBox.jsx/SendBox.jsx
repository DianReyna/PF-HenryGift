import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SendBox.css";

const SendBox = () => {
  const cart = useSelector((state) => state.cart);

  

  // email: [...input.email, e.target.value],
  const [input, setInput] = useState([]);

  // const handleEmailChange = (e) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]:e.target.value
  //   });
  // };

  const handleEmailChange = (e) => {
    console.log(e.target.id);
    setInput(input[e.target.id] = e.target.value);
    console.log(input)
  };
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input.email);
  };
  let i = 0;
  return (
    <div className="main-send-cont">
      <div className="main-top-cont">
        <div className="left-send-side">
          {/* {console.log(cart.cartItems)} */}
          {cart?.cartItems.map((cartItem, i) => (
            <div key={cartItem.id} className="all-card-sed">
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
                      onChange={(e) => handleEmailChange(e)}
                      name='email'
                      id={i++}
                      type="text"
                      placeholder="Ingrese el email del agasajado"
                      className="place-email"
                      value={input.email}
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
              <div key={cartItem.id} className="summary-cart-box">
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
              <button className="go-payment-btn">Ir al pago</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendBox;
