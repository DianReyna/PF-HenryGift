const URL = process.env.REACT_APP_URL;
import axios from "axios";
import { getAllCategories } from "../reducer/categorySlice";

export const getCategory = () => (dispatch) => {
  axios(`${URL}categories`)
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
};
