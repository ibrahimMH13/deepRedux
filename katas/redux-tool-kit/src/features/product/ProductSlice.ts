import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ProductStateType = {
    loading: boolean,
    error: boolean,
    products: any []
} 

const initialState : ProductStateType = {
    loading: false,
    error:false,
    products: []
}

export const fetchProducts = createAsyncThunk('products/fetch',async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
});

const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        filteringProducts:(state,action)=>{
            state.products = state.products.map(p=>p.title);
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchProducts.pending,(state)=>{
                state.loading = true;
        }),
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = !!action.error.message
        }),
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = true;
            state.products = action.payload
        });
    }
    });

    export const ProductActions = ProductSlice.actions;
    export default ProductSlice.reducer;

