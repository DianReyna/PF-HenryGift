import axios from "axios";
import {
  getAllProduct,
  deleteProduct,
  editProduct,
} from "../reducer/productsSlice";

export const getProducts = () => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/products`)
    .then((res) => dispatch(getAllProduct(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProduct = (id) => (dispatch) => {
  axios
    .delete(` https://henrygift-api.herokuapp.com/products/${id}`)
    .then((res) => dispatch(deleteProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
export const updateProduct = (data) => (dispatch) => {
  console.log(data);
  axios
    .put(
      ` https://henrygift-api.herokuapp.com/products/${data.id}`,
      data.product
    )
    .then((res) => dispatch(editProduct(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
