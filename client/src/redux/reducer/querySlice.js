import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "query",
  initialState: {
     name:"",
     page:"",
     sort:{
      col:"",
      dir:""
     },
     filters:{
      category:"",
      person:"",
     }
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
      // console.log(state.category, 'lo que quedo guardado en el estado');
    },
    setPage: (state,action) => {
      state.page = action.payload
    },
    setCol: (state,action) => {
      state.sort.col = action.payload
    },
    setDir: (state,action) => {
      state.sort.dir = action.payload
    },
    setCategory: (state,action) => {
      state.filters.category = action.payload
    },
    setPerson: (state,action) => {
      state.filters.person = action.payload
    }
  },
});

export const { setCol, setDir,setCategory,setName,setPage,setPerson } = querySlice.actions;
export default querySlice.reducer;
