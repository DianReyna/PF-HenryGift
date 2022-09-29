import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, getTotals } from "../../redux/reducer/cartSlice";
<<<<<<< HEAD
import URL from "../../utils/backRoutes";
=======
import { URL } from "../../utils/index";

>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearCart());
    dispatch(getTotals());
  }, [dispatch]);

  useEffect(() => {
    async function sendCode() {
<<<<<<< HEAD
      
=======
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
      await axios.post(`${URL}/orders/sendcode`, {
        userId: user._id,
      });
    }
<<<<<<< HEAD
    //console.log("envio del codigo")
=======
    console.log("envio del codigo");
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
    sendCode();
  }, []);

  return (
    <Container>
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Sooner you will get an email with all the payment information</p>
      <p>
        In case of any inqueries contact the support at{" "}
        <strong>giftsupport@gift.com</strong>
      </p>
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
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
