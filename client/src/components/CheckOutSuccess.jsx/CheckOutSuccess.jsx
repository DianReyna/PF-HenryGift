import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, getTotals } from "../../redux/reducer/cartSlice";
import { toast } from "react-toastify";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    async function sendCode() {
      const URL = "http://localhost:3001";
      await axios.post(`${URL}/orders/sendcode`, {
        userId: user._id,
      });
    }
    console.log("envio del codigo")
    sendCode();
  }, []);

  return (
    <Container>
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>We have sent you an email with all the payment information</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>giftsupport@gift.com</strong>
      </p>
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;
