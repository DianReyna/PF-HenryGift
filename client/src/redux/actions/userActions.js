import axios from "axios";
import { getAllUsers} from "../reducer/userSlice";

export const getUsers = () => (dispatch) => {
    axios("http://localhost:3001/userprofile")
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};