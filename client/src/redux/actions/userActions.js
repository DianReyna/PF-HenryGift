import axios from "axios";
import { useRef } from "react";
import {
  getAllUsers,
  userAdmin,
  userById,
  profileUpdate,
} from "../reducer/userSlice";

export const getUsers = () => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/getAllUsers`)
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersAdmin = () => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/users`)
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const putUsersAdmin = (data) => (dispatch) => {
  axios
    .put(` https://henrygift-api.herokuapp.com/users/admin/${data.id}`, data)
    .then((res) => dispatch(userAdmin(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersById = (id) => (dispatch) => {
  axios(` https://henrygift-api.herokuapp.com/users/${id}`)
    .then((res) => dispatch(userById(res.data)))
    .catch((err) => console.log(err));
};
export const putUsersUpdate = (id, user) => (dispatch) => {
  axios
    .put(` https://henrygift-api.herokuapp.com/users/user/${id}`, user)
    .then((res) => dispatch(profileUpdate(res.data)))
    .catch((err) => console.log(err));
};
