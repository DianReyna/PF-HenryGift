import axios from "axios";
import { getAllCategories } from "../reducer/categorySlice";

export const getCategory = () => (dispatch) => {
    axios("http://localhost:3001/categories")
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
}