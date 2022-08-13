import axios from "axios";
import {
  getAllProduct,
  deleteProduct,
  editProduct,
} from "../reducer/productsSlice";

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
export const updateProduct = (data) => (dispatch) => {
  console.log(data);
  axios
    .put(`http://localhost:3001/products/${data.id}`, data.product)
    .then((res) => dispatch(editProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
