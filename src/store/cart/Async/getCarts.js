// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios, { isAxiosError } from "axios";

// const getCarts =createAsyncThunk('cart/getCarts'
//     ,async (_,AsyncThunk)=>{
//         const {rejectWithValue}=AsyncThunk
//         try{
//         const response = await axios.get("http://localhost:9090/cart")
//         const data = await response.data
//         console.log("data" );
//         return data;
//     }catch(error){
//         if(isAxiosError(error)){
//             return rejectWithValue(error.response?.data.message || error.message)
//         }
//         else{
//             return rejectWithValue("unexpected error")
//         }
//     }
// })

// export default getBooks;