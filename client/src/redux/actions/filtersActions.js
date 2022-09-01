import axios from "axios";
import { setCategory, setPerson, clean } from "../reducer/filtersSlice";
import { getAllBoxes } from "../reducer/boxesSlice";
const URL = " https://henrygift-api.herokuapp.com";
// const URL = "http://localhost:3001";

export const filterCategory = (category) => (dispatch) => {
  dispatch(setCategory(category));
};

export const filterPerson = (person) => (dispatch) => {
  dispatch(setPerson(person));
};

export const filterBoxes = (filters) => (dispatch) => {
  console.log(filters);
  axios
    .get(` ${URL}/filters?category=${filters.category}&num=${filters.person}`)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const cleanFilters = () => (dispatch) => {
  dispatch(clean());
};

// https://henrygift-api.herokuapp.com/filters?num=2&category=aventura&min=100&max=100000
