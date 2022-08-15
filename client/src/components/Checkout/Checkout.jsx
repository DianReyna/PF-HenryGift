import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { clearCart } from "../../redux/reducer/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const stripePromise = loadStripe(
  "pk_test_51LVI0BEPq0jIoDO7fqMHkFIjYIZQJsboSluhKkWa0CCsU6GeCUsWOBFXCbSh294vG6sgbRKaVTmUIJs0T6kHmPm600kFKSmBLS"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post("http://localhost:3001/payment", {
          id,
          amount: cart.cartTotalAmount, //cents
        });

        console.log(data);

        if (data.message === "Successful Payment") {
          await axios.post("http://localhost:3001/orders/sendcode", {
            userId: "drowet0@4shared.com",
          });
          toast.success(`Importe abonado correctamente`, {
            position: "bottom-left",
          });
          dispatch(clearCart());
          navigate("/");
        } else {
          toast.error(`Error al abonar importe`, {
            position: "bottom-left",
          });
        }

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(!stripe);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Price: {cart.cartTotalAmount}$</h3>
      <div>
        <CardElement />
      </div>
      <button variant="outlined" disabled={!stripe}>
        Buy
      </button>
    </form>
  );
};

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <div>
        <div className="center">
          <div className="diome">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Checkout;
