import axios from "axios";
import { getUserCart } from "../reducer/cartSlice";

// const URL=" https://henrygift-api.herokuapp.com/register"
const URL = "http://localhost:3001";

export const getCart = (user) => (dispatch) => {
  axios(` ${URL}/orders/cart?user=${user}`)
    .then((res) => dispatch(getUserCart(res.data)))
    .catch((err) => console.log(err));
};
