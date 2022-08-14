import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userDetail: {},
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    userAdmin: (state, action) => {
      state.users = action.payload;
    },
    userById: (state, action) => {
      state.userDetail = action.payload;
     // console.log(state.userDetail)
      
    },
    profileUpdate: (state, action)=> {
      state.users = action.payload;
      console.log(action.payload)

    }
  },
});

export const { getAllUsers, userAdmin, userById, profileUpdate } = userSlice.actions;
export default userSlice.reducer;
