import axios from "axios";
import {
  getAllProviders,
  deleteProvider,
  editProvider,
} from "../reducer/providerSlice";

export const getProvider = () => (dispatch) => {
  axios("http://localhost:3001/providers")
    .then((res) => dispatch(getAllProviders(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProvider = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3001/providers/${id}`)
    .then((res) => dispatch(deleteProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const updateProvider = (data) => (dispatch) => {
  axios
    .put(`http://localhost:3001/providers/${data.id}`, data.provider)
    .then((res) => dispatch(editProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
};

export const putActiveProvider = (data) => (dispatch) => {
  axios
    .put(`http://localhost:3001/providers/${data.id}`, data)
    .then((res) => dispatch(editProvider(res.data)))
    .catch((err) => console.log(err));
};
