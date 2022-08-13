import axios from "axios";
import { getAllUsers, userAdmin } from "../reducer/userSlice";

export const getUsers = () => (dispatch) => {
  axios("http://localhost:3001/getAllUsers")
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersAdmin = () => (dispatch) => {
  axios("http://localhost:3001/users")
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const putUsersAdmin = (data) => (dispatch) => {
  axios
    .put(`http://localhost:3001/users/admin/${data.id}`, data)
    .then((res) => dispatch(userAdmin(res.data)))
    .catch((err) => console.log(err));
};
