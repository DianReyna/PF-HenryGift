import axios from "axios";
import { getUserCart } from "../reducer/cartSlice";

<<<<<<< HEAD
import URL from "../../utils/backRoutes";
=======
import { URL } from "../../utils/index";
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978

<<<<<<< HEAD
import { getUserCart } from "../reducer/cartSlice";

=======
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
export const getCart = (user) => (dispatch) => {
  axios(` ${URL}/orders/cart?user=${user}`)
    .then((res) => dispatch(getUserCart(res.data)))
    .catch((err) => console.log(err));
};
