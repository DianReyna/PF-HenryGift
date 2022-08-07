import axios from 'axios';
import { setCategory, setPerson } from '../reducer/filtersSlice';
import { getAllBoxes } from '../reducer/boxesSlice';

export const  filterCategory = (category) => (dispatch) => {
    dispatch(setCategory(category))
}

export const  filterPerson = (person) => (dispatch) => {
    dispatch(setPerson(person))
}

export const filterBoxes = (filters) => (dispatch) => {
    console.log(filters)
    axios.get(`http://localhost:3001/filters?category=${filters.category}&num=${filters.person}`)
    .then(res => dispatch(getAllBoxes(res.data))    )
    .catch (err => console.log(err))
}

//http://localhost:3001/filters?num=2&category=aventura&min=100&max=100000 
