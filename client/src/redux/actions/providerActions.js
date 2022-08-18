import axios from "axios";
import {
  getAllProviders,
  deleteProvider,
  editProvider,
} from "../reducer/providerSlice";

export const getProvider = () => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/providers`)
    .then((res) => dispatch(getAllProviders(res.data)))
    .catch((err) => console.log(err));
};

export const destroyProvider = (id) => (dispatch) => {
  axios
    .delete(` https://henrygift-api.herokuapp.com/providers/${id}`)
    .then((res) => dispatch(deleteProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const updateProvider = (data) => (dispatch) => {
  axios
    .put(
      ` https://henrygift-api.herokuapp.com/providers/${data.id}`,
      data.provider
    )
    .then((res) => dispatch(editProvider(res.data)))
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
};
