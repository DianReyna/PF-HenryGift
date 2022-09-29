import axios from "axios";
import {
  getAllProduct,
  deleteProduct,
  editProduct,
  postProduct,
} from "../reducer/productsSlice";

<<<<<<< HEAD
import URL from "../../utils/backRoutes";
=======
import { URL } from "../../utils/index";
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978

export const createProduct = (payload) => (dispatch) => {
  axios
    .post(`${URL}/products`, payload)
    .then((res) => dispatch(postProduct(res.data)))
    .catch((err) => console.log(err));
};
export const getProducts = () => (dispatch) => {
  axios(` ${URL}/products`)
    .then((res) => dispatch(getAllProduct(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProduct = (id) => (dispatch) => {
  axios
    .delete(` ${URL}/products/${id}`)
    .then((res) => dispatch(deleteProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
export const updateProduct = (data) => (dispatch) => {
  axios
    .put(` ${URL}/products/${data.id}`, data.product)
    .then((res) => dispatch(editProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const putStateProduct = (data) => (dispatch) => {
  axios
    .put(`${URL}/products/status/${data.id}`, data.product)
    .then((res) => dispatch(editProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
