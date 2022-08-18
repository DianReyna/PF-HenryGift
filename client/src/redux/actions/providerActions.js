const { REACT_APP_URL } = process.env;
import axios from "axios";
import {
  getAllProviders,
  deleteProvider,
  editProvider,
} from "../reducer/providerSlice";

export const getProvider = () => (dispatch) => {
  axios(`${REACT_APP_URL}providers`)
    .then((res) => dispatch(getAllProviders(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProvider = (id) => (dispatch) => {
  axios
    .delete(`${REACT_APP_URL}providers/${id}`)
    .then((res) => dispatch(deleteProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const updateProvider = (data) => (dispatch) => {
  axios
    .put(`${REACT_APP_URL}providers/${data.id}`, data.provider)
    .then((res) => dispatch(editProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
};
