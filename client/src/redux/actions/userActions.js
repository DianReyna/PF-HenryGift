import axios from "axios";
import { useRef } from "react";
import { getAllUsers, userAdmin, userById, profileUpdate } from "../reducer/userSlice";

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

export const putUsersAdmin = (id) => (dispatch) => {
  axios
    .put(`http://localhost:3001/users/admin/${id}`)
    .then((res) => dispatch(userAdmin(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersById = (id) => (dispatch) => {
  axios(`http://localhost:3001/users/${id}`)
    .then((res) => dispatch(userById(res.data)))
    .catch((err) => console.log(err));
};
export const putUsersUpdate = (id, user) => (dispatch) => {
  axios.put(`http://localhost:3001/users/user/${id}`, user)
    .then((res) => dispatch(profileUpdate(res.data)))
    .catch((err) => console.log(err));
};