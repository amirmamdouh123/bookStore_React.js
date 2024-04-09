import { createSlice } from "@reduxjs/toolkit";
import getCarts from "./Async/getCarts";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        booksFullInfo:[],
        status: 'idle',
        error: null
    },
    reducers: {
        addToCart:(state,action)=>{
            const bookId =action.payload.id;
            const quantity =action.payload.qty;
            state.items[bookId]=Number(quantity);
        },
        removeFromCart:(state,action)=>{
            delete state.items[action.payload]
        },
        clearCart:(state,action)=>{
            state.booksFullInfo =[]
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getCarts.pending, (state, action) => {
            state.error = null;
            state.status = 'pending';
        });
        builder.addCase(getCarts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.booksFullInfo = action.payload;
            state.status = 'succeed';
        });
        builder.addCase(getCarts.rejected, (state, action) => {
            state.error = action.payload;
            state.status = 'failed';
        });
    }
});

export default cartSlice.reducer;
export const { addToCart  ,removeFromCart ,clearCart}  = cartSlice.actions;
