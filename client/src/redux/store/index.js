import {configureStore} from "@reduxjs/toolkit";
import boxes from "../reducer/boxesSlice"
import filters from "../reducer/filtersSlice"


import products from '../reducer/productsSlice'

export default configureStore({
    reducer:{
        boxes,
        products,
        filters
    }
})