const URL = process.env.REACT_APP_URL;
import axios from "axios";
import {
  getAllProduct,
  deleteProduct,
  editProduct,
} from "../reducer/productsSlice";

export const getProducts = () => (dispatch) => {
  axios(`${URL}products`)
    .then((res) => dispatch(getAllProduct(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProduct = (id) => (dispatch) => {
  axios
    .delete(`${URL}products/${id}`)
    .then((res) => dispatch(deleteProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
export const updateProduct = (data) => (dispatch) => {
  console.log(data);
  axios
    .put(`${URL}products/${data.id}`, data.product)
    .then((res) => dispatch(editProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
