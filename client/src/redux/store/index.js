import {configureStore} from "@reduxjs/toolkit";
import boxes from "../reducer/boxesSlice"

export default configureStore({
    reducer:
        boxes,
        // products: products
    

})