import axios from 'axios';
import { getAllBoxes } from '../reducer/boxesSlice';

export const filterBoxes = (num, category, min, max) => (dispatch) => {
    console.log(category)
    axios.get(`http://localhost:3001/filters?category=${category}`)
    .then(res => dispatch(getAllBoxes(res.data))    )
    .catch (err => console.log(err))
}