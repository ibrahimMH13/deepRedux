import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./features/product/ProductSlice";
import { createLogger } from 'redux-logger'


const logger = createLogger();

const store = configureStore({
    reducer:{
        products : productReducer
    },
    middleware: mid => mid().concat(logger),
});


export default store;