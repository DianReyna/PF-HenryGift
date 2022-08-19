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

export const getBoxes = () => (dispatch) => {
  axios("http://localhost:3001/boxes")
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesPerPage = (query) => (dispatch) => {
  axios(
    `http://localhost:3001/test?offset=${query.page}&limit=4&name=${query.name}&col=${query.sort.col}&dir=${query.sort.dir}&category=${query.filters.category}&num=${query.filters.person}`
  )
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const searchBox = (name) => (dispatch) => {
  axios("http://localhost:3001/boxes?name=" + name)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const createProvider = (payload) => () => {
  axios.post("http://localhost:3001/providers", payload);
};

export const createBox = (payload) => (dispatch) => {
  axios
    .post("http://localhost:3001/boxes", payload)
    .then((res) => dispatch(postBox(res.data)))
    .catch((err) => console.log(err));
};

export const detailBox = (id) => (dispatch) => {
  axios(`http://localhost:3001/boxes/${id}`)
    .then((res) => dispatch(getDetailBox(res.data)))
    .catch((err) => console.log(err));
};

export const detailProduct = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/products/${id}`)
    .then((res) => dispatch(getDetailProduct(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesAdmin = () => (dispatch) => {
  axios(`http://localhost:3001/boxes/admin`)
    .then((res) => dispatch(getAllBoxesAdmin(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const destroyBox = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3001/boxes/${id}`)
    .then((res) => dispatch(deleteBox(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const updateBoxes = (data) => (dispatch) => {
  axios
    .put(`http://localhost:3001/boxes/${data.id}`, data.boxes)
    .then((res) => dispatch(editBoxes(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
export const getBox = (id) => (dispatch) => {
  axios(`http://localhost:3001/boxes/${id}` + id)
    .then((res) => dispatch(getBoxId(res.data)))
    .catch((err) => console.log(err));
};
