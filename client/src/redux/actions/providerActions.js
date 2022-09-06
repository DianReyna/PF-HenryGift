import axios from "axios";
import {
  getAllProviders,
  deleteProvider,
  editProvider,
} from "../reducer/providerSlice";

import { URL } from "../../utils/index";

export const getProvider = () => (dispatch) => {
  axios(` ${URL}/providers`)
    .then((res) => dispatch(getAllProviders(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProvider = (id) => (dispatch) => {
  axios
    .delete(` ${URL}/providers/${id}`)
    .then((res) => dispatch(deleteProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const updateProvider = (data) => (dispatch) => {
  axios
    .put(` ${URL}/providers/${data.id}`, data.provider)
    .then((res) => dispatch(editProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
};

export const putActiveProvider = (data) => (dispatch) => {
  axios
    .put(`${URL}/providers/${data.id}`, data)
    .then((res) => dispatch(editProvider(res.data)))
    .catch((err) => console.log(err));
};
