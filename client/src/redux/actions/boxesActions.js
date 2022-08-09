import axios from "axios";
import { getAllBoxes, getDetailBox,getDetailProduct} from "../reducer/boxesSlice";

export const getBoxes = () => (dispatch) => {
    axios("http://localhost:3001/boxes")
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesPerPage = (query) => (dispatch) => {

  

    axios(`http://localhost:3001/test?offset=${query.page}&limit=4&name=${query.name}&col=${query.sort.col}&dir=${query.sort.dir}&category=${query.filters.category}&num=${query.filters.person}`)

    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const searchBox = (name) => (dispatch) => {
    axios("http://localhost:3001/boxes?name=" + name)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const createProvider = (payload) => () => {
    console.log('action payload', payload)
    axios.post("http://localhost:3001/providers", payload);
};

export const createBox = (payload) => () => {
    console.log(payload)
    var json = axios.post("http://localhost:3001/boxes", payload);
    return json;
};

export const detailBox = (id) => (dispatch) => {
    axios(`http://localhost:3001/boxes/${id}`)
    .then((res) => dispatch(getDetailBox(res.data)))
    .catch((err) => console.log(err));
};

export const createProduct = (payload) => () => {
    console.log('action payload', payload)
    axios.post("http://localhost:3001/products", payload);
};

export const detailProduct = (id) => (dispatch) => {
    axios.get(`http://localhost:3001/products/${id}`)
    .then((res) =>dispatch(getDetailProduct(res.data)))
    .catch((err) => console.log(err));
};


