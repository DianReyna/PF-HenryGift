import axios from "axios";

import { URL } from "../../utils/index";

import { getUserCart } from "../reducer/cartSlice";

export const getCart = (user) => (dispatch) => {
  axios(` ${URL}/orders/cart?user=${user}`)
    .then((res) => dispatch(getUserCart(res.data)))
    .catch((err) => console.log(err));
};
