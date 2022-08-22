import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userDetail: {},
    gifts:[],
    //orders:[],
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    userAdmin: (state, action) => {
      state.users = action.payload;
    },
    userById: (state, action) => {
      //console.log("soy el userDetail", user)
      state.userDetail = action.payload;
    },
    profileUpdate: (state, action) => {
      state.users = action.payload;
    },
    getGiftUser: (state, action) => {
      state.gifts = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = action.payload;
    },
    // getAllOrdes: (state, action) => {
    //   state.orders = action.payload;
    // },
  },
});


export const { getAllUsers, userAdmin, userById, profileUpdate, getGiftUser, deleteUser, getAllOrdes } = userSlice.actions;
export default userSlice.reducer;
