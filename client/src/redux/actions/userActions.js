import axios from "axios";
import { getAllUsers } from "../reducer/userSlice";

export const getUsers = () => (dispatch) => {
  axios("http://localhost:3001/getAllUsers")
<<<<<<< HEAD
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersAdmin = () => (dispatch) => {
  axios("http://localhost:3001/users")
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersAdmin = () => (dispatch) => {
  axios("http://localhost:3001/users")
=======
>>>>>>> origin/dev
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersAdmin = () => (dispatch) => {
  axios("http://localhost:3001/users")
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};
