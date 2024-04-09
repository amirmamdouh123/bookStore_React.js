import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import bookReducer from "./book/bookSlice"
import cartReducer from "./cart/cartSlice";
import authorReducer from "./authors/authorSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const reducers =combineReducers({
    book:bookReducer,
    cart:cartReducer,
    author:authorReducer
})

const config={
    key:"cart",
    storage,
    whitelist:['cart'] 
}

const persistedReducer =persistReducer(config,reducers)

const store = configureStore({
    reducer:persistedReducer
})

export const persistedStore = persistStore(store);
export default store; 