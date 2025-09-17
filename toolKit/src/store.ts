import {configureStore} from "@reduxjs/toolkit";
import PizzaReducer from "./features/pizza/PizzaSlice";
import BurgerReducer from "./features/burger/burgerSlice";
import { createLogger } from "redux-logger";
//why we use this over create store
//1- auto combining multiple reduces
//2- auto add thunk middlewares
//3= auto setup redux developer tool
const logger = createLogger();
const store = configureStore({
    // here we add all reducers
    reducer:{
        pizza: PizzaReducer,
        burger: BurgerReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
    
});


export default store;