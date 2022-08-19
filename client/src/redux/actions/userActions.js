import axios from "axios";
import { useRef } from "react";
import {
  getAllUsers,
  userAdmin,
  userById,
  profileUpdate,
  getGiftUser,
  deleteUser,
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

export const getUserGift = (user) => (dispatch) => {
  console.log(user);
  axios(`https://henrygift-api.herokuapp.com/redeem/usergifts?user=${user}`)
    .then((res) => dispatch(getGiftUser(res.data)))
    .catch((err) => console.log(err));
};
export const removeUser = (id) => (dispatch) => {
  axios
    .delete(`https://henrygift-api.herokuapp.com/users/${id}`)
    .then((res) => dispatch(deleteUser(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
