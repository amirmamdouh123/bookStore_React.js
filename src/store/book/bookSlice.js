import { createSlice } from "@reduxjs/toolkit";
import getBooks from "./Async/getBooks";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {
        // Define regular reducers here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state, action) => {
            state.error = null;
            state.status = 'pending';
        });
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'succeed';
        });
        builder.addCase(getBooks.rejected, (state, action) => {
            state.error = action.payload;
            state.status = 'failed';
        });
    }
});

export default bookSlice.reducer;
