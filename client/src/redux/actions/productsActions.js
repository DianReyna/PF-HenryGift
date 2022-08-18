const { REACT_APP_URL } = process.env;
import axios from "axios";
import {
  getAllProduct,
  deleteProduct,
  editProduct,
} from "../reducer/productsSlice";

export const getProducts = () => (dispatch) => {
  axios(`${REACT_APP_URL}products`)
    .then((res) => dispatch(getAllProduct(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProduct = (id) => (dispatch) => {
  axios
    .delete(`${REACT_APP_URL}products/${id}`)
    .then((res) => dispatch(deleteProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
export const updateProduct = (data) => (dispatch) => {
  console.log(data);
  axios
    .put(`${REACT_APP_URL}products/${data.id}`, data.product)
    .then((res) => dispatch(editProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
