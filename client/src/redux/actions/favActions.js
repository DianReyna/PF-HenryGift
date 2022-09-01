import axios from "axios";
import {
  //addFav,
  removeFav,
  getFavs,
} from "../reducer/favSlice";

import { URL } from "../../utils/index";

export const getFavorites = (email) => (dispatch) => {
  axios
    .get(`${URL}/favourites?user_id=${email}`)
    .then((res) => dispatch(getFavs(res.data)))
    .catch((err) => console.log(err));
};

export const addFavorite = (box_id, user_id) => (dispatch) => {
  console.log(box_id, user_id);
  axios.post(`${URL}/favourites?box_id=${box_id}&user_id=${user_id}`);
  // .then((res) => dispatch(addFav(res.data)))
  // .catch((err) => console.log(err));
};

export const removeFavorite = (box_id) => (dispatch) => {
  axios
    .delete(`${URL}/favourites/${box_id}`)
    .then((res) => dispatch(removeFav(res.data)))
    .catch((err) => console.log(err));
};
