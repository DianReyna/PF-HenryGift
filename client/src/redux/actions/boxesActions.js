import axios from 'axios';
import { getAllBoxes } from '../reducer/boxesSlice';

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

export const createBox=(payload)=>()=>{
    var json = axios.post('http://localhost:3001/boxes', payload)
    return json
}