import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const getOneBook =createAsyncThunk('book/getOneBook'
    ,async (id,AsyncThunk)=>{
        const {rejectWithValue}=AsyncThunk
        try{
        const response = await axios.get(`http://localhost:9090/books/${id}`)
        const data = await response.data
        return data;
    }catch(error){
        if(isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message)
        }
        else{
            return rejectWithValue("unexpected error")
        }
    }
})

export default getBooks;