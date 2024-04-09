import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAuthors=createAsyncThunk("author/getAuthors",async(_,AsyncThunk)=>{
        const {rejectWithValue} = AsyncThunk
    try{
           const response= await axios.get("http://localhost:9090/authors");
           return response.data;
    }
    catch(error){
        return rejectWithValue(error.message)
    }
})

export default getAuthors;