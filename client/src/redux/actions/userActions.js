const { REACT_APP_URL } = process.env;
import axios from "axios";
import { useRef } from "react";
import {
  getAllUsers,
  userAdmin,
  userById,
  profileUpdate,
} from "../reducer/userSlice";

export const getUsers = () => (dispatch) => {
  axios(`${REACT_APP_URL}getAllUsers`)
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersAdmin = () => (dispatch) => {
  axios(`${REACT_APP_URL}users`)
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const putUsersAdmin = (data) => (dispatch) => {
  axios
    .put(`${REACT_APP_URL}users/admin/${data.id}`, data)
    .then((res) => dispatch(userAdmin(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersById = (id) => (dispatch) => {
  axios(`${REACT_APP_URL}users/${id}`)
    .then((res) => dispatch(userById(res.data)))
    .catch((err) => console.log(err));
};
export const putUsersUpdate = (id, user) => (dispatch) => {
  axios
    .put(`${REACT_APP_URL}users/user/${id}`, user)
    .then((res) => dispatch(profileUpdate(res.data)))
    .catch((err) => console.log(err));
};
