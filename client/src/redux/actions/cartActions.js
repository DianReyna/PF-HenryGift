import axios from "axios";

// const URL = " https://henrygift-api.herokuapp.com";
const URL = "http://localhost:3001";

import { getUserCart } from "../reducer/cartSlice";

export const getCart = (user) => (dispatch) => {
  axios(` ${URL}/orders/cart?user=${user}`)
    .then((res) => dispatch(getUserCart(res.data)))
    .catch((err) => console.log(err));
};
