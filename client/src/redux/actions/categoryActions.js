import axios from "axios";
import {
  getAllCategories,
  editCategory,
  deleteCategory,
} from "../reducer/categorySlice";

<<<<<<< HEAD
import URL from "../../utils/backRoutes";
=======
import { URL } from "../../utils/index";
>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978

export const getCategory = () => (dispatch) => {
  axios(` ${URL}/categories`)
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
};

export const updateCategory = (data) => (dispatch) => {
  axios
    .put(`${URL}/categories/${data.id}`, data.category)
    .then((res) => dispatch(editCategory(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const destroyCategory = (id) => (dispatch) => {
  axios
    .delete(`${URL}/categories/${id}`)
    .then((res) => dispatch(deleteCategory(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const postCategory = (data) => () => {
  axios
    .post(`${URL}/categories/`, data)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};
