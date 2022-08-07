import { createSlice } from '@reduxjs/toolkit';



export const boxesSlice = createSlice({
    name:"boxes",
    initialState: {
        boxes: [],
        detail: {},
        detailProd:{}
    }, 
    reducers:{
        getAllBoxes: (state, action) =>{
            console.log(state.boxes)
            state.boxes = action.payload
        },
        getDetailBox: (state, action) => {
            state.detail = action.payload
        },
        getDetailProduct: (state, action) => {
            state.detailProd = action.payload
        }
    }
})


export const{ getAllBoxes, getDetailBox ,getDetailProduct} = boxesSlice.actions

export default boxesSlice.reducer

