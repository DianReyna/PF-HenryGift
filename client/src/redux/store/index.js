import {configureStore} from "@reduxjs/toolkit";
import boxes from "../reducer/boxesSlice"
import filters from "../reducer/filtersSlice"
import providers from "../reducer/providerSlice"
import categories from "../reducer/categorySlice"
import products from '../reducer/productsSlice'
import query from "../reducer/querySlice"
export default configureStore({
    reducer:{
        boxes,
        filters,
        providers,
        categories,
        products,
        query

    }
})
