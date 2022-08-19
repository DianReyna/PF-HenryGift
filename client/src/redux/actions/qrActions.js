import axios from "axios";
import {
 getInformation,
} from "../reducer/qrSlice";

export const qrInformation = (userId,productId) => (dispatch) => {
  axios(
    `https://henrygift-api.herokuapp.com/redeem/qr?userId=${userId}&productId=${productId}`
  )
    .then((res) => dispatch(getInformation(res.data)))
    .catch((err) => console.log(err));
};