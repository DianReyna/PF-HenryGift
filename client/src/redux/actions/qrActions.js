import axios from "axios";
import { getInformation } from "../reducer/qrSlice";
// const URL=" https://henrygift-api.herokuapp.com/register"
const URL = "http://localhost:3001";
export const qrInformation = (userId, productId) => (dispatch) => {
  axios(`${URL}/redeem/qr?userId=${userId}&productId=${productId}`)
    .then((res) => dispatch(getInformation(res.data)))
    .catch((err) => console.log(err));
};
