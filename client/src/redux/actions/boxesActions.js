import axios from "axios";
import { getAllBoxes, getDetailBox,getDetailProduct} from "../reducer/boxesSlice";

export const getBoxes = () => (dispatch) => {
    axios("http://localhost:3001/boxes")
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const getBoxesPerPage = (pag) => (dispatch) => {
<<<<<<< HEAD
  axios.get(`http://localhost:3001/boxes?offset=${pag}&limit=4`)
=======
    axios(`http://localhost:3001/boxes?offset=${pag}&limit=4`)
>>>>>>> 3f45f211ef3a1fdf632642d29222ea1d251ddd92
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const searchBox = (name) => (dispatch) => {
    axios("http://localhost:3001/boxes?name=" + name)
    .then((res) => dispatch(getAllBoxes(res.data)))
    .catch((err) => console.log(err));
};

export const createProvider = (payload) => () => {
    axios.post("http://localhost:3001/providers", payload);
};

export const createBox = (payload) => () => {
    var json = axios.post("http://localhost:3001/boxes", payload);
    return json;
};

export const detailBox = (id) => (dispatch) => {
    axios(`http://localhost:3001/boxes/${id}`)
    .then((res) => dispatch(getDetailBox(res.data)))
    .catch((err) => console.log(err));
};

export const createProduct = (payload) => () => {
    axios.post("http://localhost:3001/products", payload);
};

<<<<<<< HEAD
export const detailProduct = (id) => (dispatch) => {
    axios.get(`http://localhost:3001/products/${id}`)
    .then((res) =>dispatch(getDetailProduct(res.data)))
    .catch((err) => console.log(err));
};
=======
export const sortBoxes = (col,dir) => (dispatch) => {
    axios(`http://localhost:3001/sort?col=${col}&dir=${dir}`)
    .then((res)=>dispatch(getAllBoxes(res.data)))
    .catch((err)=>console.log(err))
}

>>>>>>> 3f45f211ef3a1fdf632642d29222ea1d251ddd92
