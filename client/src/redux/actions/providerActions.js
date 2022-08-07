import axios from "axios";
import { getAllProviders } from "../reducer/providerSlice";

export const getProvider = () => (dispatch) => {
    axios("http://localhost:3001/providers")
    .then((res) => dispatch(getAllProviders(res.data)))
    .catch((err) => console.log(err));
}