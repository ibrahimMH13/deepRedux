import {configureStore} from "@reduxjs/toolkit";
import PizzaReducer from "./features/pizza/PizzaSlice";
import BurgerReducer from "./features/burger/burgerSlice";

//why we use this over create store
//1- auto combining multiple reduces
//2- auto add thunk middlewares
//3= auto setup redux developer tool
const store = configureStore({
    // here we add all reducers
    reducer:{
        pizza: PizzaReducer,
        burger: BurgerReducer
    },

});


export default store;