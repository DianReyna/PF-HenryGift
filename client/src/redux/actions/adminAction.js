import axios from "axios";
import { getBoxes, getUsers, getBoxSales } from "../reducer/adminSlice";

<<<<<<< HEAD
import URL from "../../utils/backRoutes";
=======
import { URL } from "../../utils/index";
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978

export const getBestBoxes = () => (dispatch) => {
  axios(` ${URL}/admin/raiting`)
    .then((res) => dispatch(getBoxes(res.data)))
    .catch((err) => console.log(err));
};
export const getUsersBuy = () => (dispatch) => {
  axios(` ${URL}/admin/sales`)
    .then((res) => dispatch(getUsers(res.data)))
    .catch((err) => console.log(err));
};
export const getSalesBox = () => (dispatch) => {
  axios(` ${URL}/admin/`)
    .then((res) => dispatch(getBoxSales(res.data)))
    .catch((err) => console.log(err));
};
