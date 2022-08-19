import axios from "axios";
import {
  getAllCategories,
  editCategory,
  deleteCategory,
} from "../reducer/categorySlice";

// const URL=" https://henrygift-api.herokuapp.com/register"
const URL = "http://localhost:3001";

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
