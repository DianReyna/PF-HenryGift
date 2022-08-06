import axios from 'axios';
import { getAllBoxes, getDetailBox } from '../reducer/boxesSlice';

export const getBoxes=()=>(dispatch)=>{
    axios('http://localhost:3001/boxes')
    .then(res=>dispatch(getAllBoxes(res.data)))
    .catch (err=>console.log(err))
}

export const getBoxesPerPage=(pag)=>(dispatch)=>{
    axios(`http://localhost:3001/boxes?offset=${pag}&limit=4`)
    .then(res=>dispatch(getAllBoxes(res.data)))
    .catch (err=>console.log(err))
}

export const searchBox=(name)=>(dispatch)=>{
    axios('http://localhost:3001/boxes?name=' + name)
    .then(res=>dispatch(getAllBoxes(res.data)))
    .catch (err=>console.log(err))
}

export const createProvider=(payload)=>()=>{
    axios.post('http://localhost:3001/providers', payload)
}

export const createBox=(payload)=>()=>{

    var json = axios.post('http://localhost:3001/boxes', payload)
    return json
}

export const detailBox = (id) => (dispatch) => {
    axios(`http://localhost:3001/boxes/${id}`)
    .then(res => dispatch(getDetailBox(res.data)))
    .catch(err => console.log(err))
    axios.post('http://localhost:3001/boxes', payload)
}

export const createProduct=(payload)=>()=>{
    axios.post('http://localhost:3001/products', payload)
}