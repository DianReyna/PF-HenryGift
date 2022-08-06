import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const boxesSlice = createSlice({
    name:"boxes",
    initialState: {
        boxes: []
    }, 
    reducers:{
        getAllBoxes: (state, action) =>{
            state.boxes= action.payload
        },
    }
})

export const { getAllBoxes } = boxesSlice.actions
export default boxesSlice.reducer

