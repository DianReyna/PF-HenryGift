import axios from "axios";
import { getUserCart } from "../reducer/cartSlice";

import URL from "../../utils/backRoutes";

export const getCart = (user) => (dispatch) => {
  axios(` ${URL}/orders/cart?user=${user}`)
    .then((res) => dispatch(getUserCart(res.data)))
    .catch((err) => console.log(err));
};
