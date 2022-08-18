import axios from "axios";
import { getAllCategories } from "../reducer/categorySlice";

export const getCategory = () => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/categories`)
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
};
