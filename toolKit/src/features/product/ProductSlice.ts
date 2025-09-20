import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: [],
    error:''
}

const fetchProducts  = createAsyncThunk('product/fetchProduct',async ()=>{
            const response = await axios.get('https://fakestoreapi.com/products');
            return response.data;
    });
const ProductSlice = createSlice({
        name:'product',
        initialState,
        reducers: {},
        extraReducers:(builder)=>{
            builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                state.loading = false;
                state.products = action.payload
            }),
            builder.addCase(fetchProducts.pending,(state)=>{
                state.loading = true;
            }),
            builder.addCase(fetchProducts.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message as string
            })
        }
    });




export default ProductSlice.reducer;
export const products = fetchProducts