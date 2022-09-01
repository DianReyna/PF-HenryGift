import axios from "axios";
import { getInformation } from "../reducer/qrSlice";

import { URL } from "../../utils/index";

export const qrInformation = (userId, productId) => (dispatch) => {
  axios(`${URL}/redeem/qr?userId=${userId}&productId=${productId}`)
    .then((res) => dispatch(getInformation(res.data)))
    .catch((err) => console.log(err));
};
