import {createSlice} from "@reduxjs/toolkit"
import { burgerActions } from "../burger/burgerSlice";

const initialState = {
    pizzaBase: 1000
};

const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers:{
        //this way in toolkit without switch so here
        // pizza_order as action creator
        pizza_order:(state,action)=>{
            state.pizzaBase--;
        }
    },
    // when action suppose to handle with multi reducers
    extraReducers:(builder)=>{
        builder.addCase(burgerActions.orderBurger,(state)=>{
            state.pizzaBase--;
        })
    }
});
// here from createSlince we can export them in deaturet wahy
export const pizzaActions = pizzaSlice.actions;
export default pizzaSlice.reducer;