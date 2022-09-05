import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cartSlice";
import drawerSlice from "./drawer-slice";
import productListSlice from "./productListSlice";

const store = configureStore({
    reducer:{
        drawer:drawerSlice.reducer,
        auth:authSlice.reducer,
        productList:productListSlice.reducer,
        cart:cartSlice.reducer,
    }
})
export default store;