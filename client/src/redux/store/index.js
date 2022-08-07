import {configureStore} from "@reduxjs/toolkit";
import boxes from "../reducer/boxesSlice"
import providers from "../reducer/providerSlice"
import categories from "../reducer/categorySlice"

export default configureStore({
    reducer:{
        boxes,
        providers,
        categories
         // products: products
    }
})