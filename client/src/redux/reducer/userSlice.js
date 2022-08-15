import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userDetail: {},
    gifts:[]
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
    },
    profileUpdate: (state, action) => {
      state.users = action.payload;
    },
    getGiftUser: (state, action) => {
      state.gifts = action.payload;
    },
  },
});


export const { getAllUsers, userAdmin, userById, profileUpdate, getGiftUser } = userSlice.actions;
export default userSlice.reducer;
