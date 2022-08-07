import axios from "axios";
import { getAllProduct } from "../reducer/productsSlice";

export const getProducts = () => (dispatch) => {
    axios("http://localhost:3001/products")
    .then((res) => dispatch(getAllProduct(res.data)))
    .catch((err) => console.log(err));
};