import("dotenv").config();
import axios from "axios";
const { URL } = process.env;
import { setCategory, setPerson, clean } from "../reducer/filtersSlice";
import { getAllBoxes } from "../reducer/boxesSlice";

export const filterCategory = (category) => (dispatch) => {
  dispatch(setCategory(category));
};

export const filterPerson = (person) => (dispatch) => {
  dispatch(setPerson(person));
};

export const filterBoxes = (filters) => (dispatch) => {
  console.log(filters);
  axios
    .get(`${URL}filters?category=${filters.category}&num=${filters.person}`)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const cleanFilters = () => (dispatch) => {
  dispatch(clean());
};

//${URL}filters?num=2&category=aventura&min=100&max=100000
