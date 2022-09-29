import axios from "axios";
import { getInformation } from "../reducer/qrSlice";
<<<<<<< HEAD
import URL from "../../utils/backRoutes";
=======

import { URL } from "../../utils/index";

>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
export const qrInformation = (userId, productId) => (dispatch) => {
  axios(`${URL}/redeem/qr?userId=${userId}&productId=${productId}`)
    .then((res) => dispatch(getInformation(res.data)))
    .catch((err) => console.log(err));
};
