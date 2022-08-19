import axios from "axios";
import {
  getAllCategories,
  editCategory,
  deleteCategory,
} from "../reducer/categorySlice";

export const getCategory = () => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/categories`)
    .then((res) => dispatch(getAllCategories(res.data)))
    .catch((err) => console.log(err));
};

export const updateCategory = (data) => (dispatch) => {
  axios
    .put(
      `https://henrygift-api.herokuapp.com/categories/${data.id}`,
      data.category
    )
    .then((res) => dispatch(editCategory(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const destroyCategory = (id) => (dispatch) => {
  axios
    .delete(`https://henrygift-api.herokuapp.com/categories/${id}`)
    .then((res) => dispatch(deleteCategory(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const postCategory = (data) => () => {
  axios
    .post(`https://henrygift-api.herokuapp.com/categories/`, data)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};
