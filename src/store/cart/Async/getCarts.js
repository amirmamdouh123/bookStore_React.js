import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const getCarts =createAsyncThunk('cart/getCarts'
    ,async (_,AsyncThunk)=>{
        const {rejectWithValue ,getState}=AsyncThunk
        try{
            const cart = getState().cart;
            
            if(Object.keys(cart.items).length==0){
                return []
            }
            const ids = Object.keys(cart.items).map((id)=>{
                return `id=${id}`
            }).join('&');

            const response = await axios.get(`http://localhost:9090/books?${ids}`)
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

export default getCarts;