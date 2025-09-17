import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    burgerBuns :1000
}
const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        orderBurger : (state, action)=>{
            state.burgerBuns--;
        }
    }
})

export const burgerActions = burgerSlice.actions;
export default burgerSlice.reducer;
