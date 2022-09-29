import axios from "axios";

<<<<<<< HEAD
import URL from "../../utils/backRoutes";
=======
import { URL } from "../../utils/index";
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978

import { getUserCart } from "../reducer/cartSlice";

export const getCart = (user) => (dispatch) => {
  axios(` ${URL}/orders/cart?user=${user}`)
    .then((res) => dispatch(getUserCart(res.data)))
    .catch((err) => console.log(err));
};
