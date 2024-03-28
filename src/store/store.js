import { configureStore, createReducer } from "@reduxjs/toolkit";
import bookReducer from "./book/bookSlice"
import cartReducer from "./cart/cartSlice";
const store = configureStore({
    reducer:{
        book:bookReducer,
        cart:cartReducer
    }
})

export default store;