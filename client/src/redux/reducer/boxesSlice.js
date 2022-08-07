import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const boxesSlice = createSlice({
    name:"boxes",
    initialState: {
        boxes: [],
        detail: {}
    }, 
    reducers:{
        getAllBoxes: (state, action) =>{
            state.boxes = action.payload
        },
        getDetailBox: (state, action) => {
            state.detail = action.payload
        }
    }
})


export const{ getAllBoxes, getDetailBox } = boxesSlice.actions

export default boxesSlice.reducer

