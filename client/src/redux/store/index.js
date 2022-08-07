import {configureStore} from "@reduxjs/toolkit";
import boxes from "../reducer/boxesSlice"


import products from '../reducer/productsSlice'

export default configureStore({
    reducer:{
        boxes,
        products
    }
})