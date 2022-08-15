import axios from "axios";
import {
  getAllCategories,
  editCategory,
  deleteCategory,
} from "../reducer/categorySlice";

export const getCategory = () => (dispatch) => {
  axios("http://localhost:3001/categories")
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
};

export const updateCategory = (data) => (dispatch) => {
  axios
    .put(`http://localhost:3001/categories/${data.id}`, data.category)
    .then((res) => dispatch(editCategory(res.data)))
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
};

export const destroyCategory = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3001/categories/${id}`)
    .then((res) => dispatch(deleteCategory(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const postCategory = (data) => () => {
  axios
    .post(`http://localhost:3001/categories/`, data)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};
