const { REACT_APP_URL } = process.env;
import axios from "axios";
import { getAllCategories } from "../reducer/categorySlice";

export const getCategory = () => (dispatch) => {
  axios(`${REACT_APP_URL}categories`)
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
};
