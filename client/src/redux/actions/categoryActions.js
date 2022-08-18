import axios from "axios";
const { URL } = process.env;
import { getAllCategories } from "../reducer/categorySlice";

export const getCategory = () => (dispatch) => {
  axios(`${URL}categories`)
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
};
