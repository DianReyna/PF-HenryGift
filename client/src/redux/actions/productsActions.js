import axios from "axios";
import { getAllProduct, deleteProduct } from "../reducer/productsSlice";

export const getProducts = () => (dispatch) => {
  axios("http://localhost:3001/products")
    .then((res) => dispatch(getAllProduct(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProduct = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3001/products/${id}`)
    .then((res) => dispatch(deleteProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
