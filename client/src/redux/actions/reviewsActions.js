import axios from "axios";
import { getView, postViews } from "../reducer/reviewsSlice";

import URL from "../../utils/backRoutes";

export const getReviews = (id) => (dispatch) => {
  axios(` ${URL}/reviews?box_id=${id}`)
    .then((res) => dispatch(getView(res.data)))
    .catch((err) => console.log(err));
};
export const createReviews = (id, scoreBox, menssageBox) => (dispatch) => {
  const data = {
    scoreBox,
    menssageBox,
  };
  axios
    .post(`${URL}/reviews?user_id=${id.user}&box_id=${id.box}`, data)
    .then((res) => dispatch(postViews(res.data)))
    .catch((err) => console.log(err));
};
