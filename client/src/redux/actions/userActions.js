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

// const URL=" https://henrygift-api.herokuapp.com/register"
const URL = "http://localhost:3001";

export const getUsers = () => (dispatch) => {
  axios(` ${URL}/getAllUsers`)
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersAdmin = () => (dispatch) => {
  axios(` ${URL}/users`)
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((err) => console.log(err));
};

export const putUsersAdmin = (data) => (dispatch) => {
  axios
    .put(` ${URL}/users/admin/${data.id}`, data)
    .then((res) => dispatch(userAdmin(res.data)))
    .catch((err) => console.log(err));
};

export const getUsersById = (id) => (dispatch) => {
  axios(` ${URL}/users/${id}`)
    .then((res) => dispatch(userById(res.data)))
    .catch((err) => console.log(err));
};

export const putUsersUpdate = (id, user) => (dispatch) => {
  axios
    .put(` ${URL}/users/user/${id}`, user)
    .then((res) => dispatch(profileUpdate(res.data)))
    .catch((err) => console.log(err));
};

export const getUserGift = (user) => (dispatch) => {
  console.log(user);
  axios(`${URL}/redeem/usergifts?user=${user}`)
    .then((res) => dispatch(getGiftUser(res.data)))
    .catch((err) => console.log(err));
};
export const removeUser = (id) => (dispatch) => {
  axios
    .delete(`${URL}/users/${id}`)
    .then((res) => dispatch(deleteUser(res.data)))
    .catch((err) => {
      console.log(err);
    });
};

// export const getOrders = () => (dispatch) => {
//   axios(` ${URL}/users/getUserOrders`)
//     .then((res) => dispatch(getAllOrdes(res.data)))
//     .catch((err) => console.log(err));
// };
