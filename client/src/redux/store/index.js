import { configureStore } from "@reduxjs/toolkit";
import boxes from "../reducer/boxesSlice";
import filters from "../reducer/filtersSlice";
import providers from "../reducer/providerSlice";
import categories from "../reducer/categorySlice";
import products from "../reducer/productsSlice";
import cartReducer from "../reducer/cartSlice";
import query from "../reducer/querySlice";
import users from "../reducer/userSlice";
import productDelete from "../reducer/productsSlice";

export default configureStore({
  reducer: {
    boxes,
    filters,
    providers,
    categories,
    products,
    cart: cartReducer,
    query,
    users,
    productDelete,
  },
});
