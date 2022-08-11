import axios from "axios";
import { getAllProviders, deleteProvider } from "../reducer/providerSlice";

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
