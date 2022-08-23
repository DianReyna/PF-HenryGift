import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userDetail: {},
    gifts:[],
    orderDetail:[],
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
    getOrderUser: (state, action) => {
      state.orderDetail = action.payload;
    },
  },
});


export const { getAllUsers, userAdmin, userById, profileUpdate, getGiftUser, deleteUser, getAllOrdes, getOrderUser } = userSlice.actions;
export default userSlice.reducer;
