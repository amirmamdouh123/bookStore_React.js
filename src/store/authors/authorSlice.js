import { createSlice } from "@reduxjs/toolkit";
import getAuthors from "./Async/getAuthors";

const initialState= {
    items:[],
    status:"idle",
    error:null
}
const authorSlice=  createSlice({
    name:"author",
    initialState,    
    reducers: {
        // Define regular reducers here if needed
    },
    extraReducers:(builder)=>{
        builder.addCase(getAuthors.pending,(state,action)=>{
            state.status="pending"
            state.error=null;
        });
        builder.addCase(getAuthors.fulfilled,(state,action)=>{
            state.items=action.payload
            state.status="succeed"
        });
        builder.addCase(getAuthors.rejected,(state,action)=>{
            state.error=action.payload
            state.status="failed"
        })
    }
})

export default authorSlice.reducer;