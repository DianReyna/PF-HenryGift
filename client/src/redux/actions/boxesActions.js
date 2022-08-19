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
  axios(` https://henrygift-api.herokuapp.com/boxes`)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesPerPage = (query) => (dispatch) => {
  axios(
    ` https://henrygift-api.herokuapp.com/test?offset=${query.page}&limit=4&name=${query.name}&col=${query.sort.col}&dir=${query.sort.dir}&category=${query.filters.category}&num=${query.filters.person}`
  )
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const searchBox = (name) => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/boxes?name=` + name)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const createProvider = (payload) => () => {
  axios.post("https://henrygift-api.herokuapp.com/providers", payload);
};

export const createBox = (payload) => (dispatch) => {
  axios
    .post("https://henrygift-api.herokuapp.com/boxes", payload)
    .then((res) => dispatch(postBox(res.data)))
    .catch((err) => console.log(err));
};

export const detailBox = (id) => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/boxes/${id}`)
    .then((res) => dispatch(getDetailBox(res.data)))
    .catch((err) => console.log(err));
};

export const createProduct = (payload) => () => {
  console.log("action payload", payload);
  axios.post(` https://henrygift-api.herokuapp.com/products`, payload);
};

export const detailProduct = (id) => (dispatch) => {
  axios
    .get(` https://henrygift-api.herokuapp.com/products/${id}`)
    .then((res) => dispatch(getDetailProduct(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesAdmin = () => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/boxes/admin`)
    .then((res) => dispatch(getAllBoxesAdmin(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const destroyBox = (id) => (dispatch) => {
  axios
    .delete(` https://henrygift-api.herokuapp.com/boxes/${id}`)
    .then((res) => dispatch(deleteBox(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const updateBoxes = (data) => (dispatch) => {
  axios
    .put(` https://henrygift-api.herokuapp.com/boxes/${data.id}`, data.boxes)
    .then((res) => dispatch(editBoxes(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
export const getBox = (id) => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/boxes/${id}` + id)
    .then((res) => dispatch(getBoxId(res.data)))
    .catch((err) => console.log(err));
};
