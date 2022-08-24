import axios from "axios";
import {
  getAllBoxes,
  getDetailBox,
  getDetailProduct,
  deleteBox,
  getAllBoxesAdmin,
  editBoxes,
  postBox,
} from "../reducer/boxesSlice";
// const URL=" https://henrygift-api.herokuapp.com/register"
const URL = "http://localhost:3001";

export const getBoxes = () => (dispatch) => {
  axios(` ${URL}/boxes`)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesPerPage = (query) => (dispatch) => {
  axios(
    ` ${URL}/test?offset=${query.page}&limit=4&name=${query.name}&col=${query.sort.col}&dir=${query.sort.dir}&category=${query.filters.category}&num=${query.filters.person}`
  )
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const searchBox = (name) => (dispatch) => {
  axios(` ${URL}/boxes?name=` + name)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const createProvider = (payload) => () => {
  axios.post(`${URL}/providers`, payload);
};

export const createBox = (payload) => (dispatch) => {
  axios
    .post(`${URL}/boxes`, payload)
    .then((res) => dispatch(postBox(res.data)))
    .catch((err) => console.log(err));
};

export const detailBox = (id) => (dispatch) => {
  axios(` ${URL}/boxes/${id}`)
    .then((res) => dispatch(getDetailBox(res.data)))
    .catch((err) => console.log(err));
};

export const createProduct = (payload) => () => {
  console.log("action payload", payload);
  axios.post(` ${URL}/products`, payload);
};

export const detailProduct = (id) => (dispatch) => {
  axios
    .get(` ${URL}/products/${id}`)
    .then((res) => dispatch(getDetailProduct(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesAdmin = () => (dispatch) => {
  axios(` ${URL}/boxes/admin`)
    .then((res) => dispatch(getAllBoxesAdmin(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const destroyBox = (id) => (dispatch) => {
  axios
    .delete(` ${URL}/boxes/${id}`)
    .then((res) => dispatch(deleteBox(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const updateBoxes = (data) => (dispatch) => {
  axios
    .put(` ${URL}/boxes/${data.id}`, data.boxes)
    .then((res) => dispatch(editBoxes(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const putStateBoxes = (data) => (dispatch) => {
  console.log(data);
  axios
    .put(`${URL}/boxes/status/${data.id}`, data.boxes)
    .then((res) => dispatch(editBoxes(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const getBox = (id) => (dispatch) => {
  axios(` ${URL}/boxes/${id}` + id)
    .then((res) => dispatch(getBoxId(res.data)))
    .catch((err) => console.log(err));
};
