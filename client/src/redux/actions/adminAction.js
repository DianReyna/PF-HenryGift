import axios from "axios";
import { getBoxes, getUsers, getBoxSales } from "../reducer/adminSlice";

// const URL = " https://henrygift-api.herokuapp.com";
const URL = "http://localhost:3001";

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
