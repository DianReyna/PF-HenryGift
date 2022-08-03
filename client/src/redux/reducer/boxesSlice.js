import { createSlice } from '@reduxjs/toolkit';


export const boxesSlice = createSlice({
    name:"boxes",
    initialState: {
        boxes: []
    }, 
    reducers:{
        getAllBoxes: (state, action) =>{
            console.log("soy el action", action.payload)
            state.boxes=[...action.payload]
        },
    }
})

export const{ getAllBoxes } = boxesSlice.actions
export default boxesSlice.reducer
