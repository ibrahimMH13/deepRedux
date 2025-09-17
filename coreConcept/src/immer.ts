import { createStore } from "redux";
import {produce} from "immer";

const ACTION = "FILLING";

const initialState = {
    "type":"Veggie",
    ingredients:{
        bread:"Whole Grain",
        filling:"Tomato",
        sauce:"mustard",
    }
}


const actionCreator = ()=>{
    return {
        type: ACTION,
        filling:"Lettuce"
    }
}


const reducer = (state = initialState, action:any)=>{

    switch(action.type){
        case ACTION:
            return {
                ...state,
                ingredients:{
                    ... state.ingredients,
                    filling: action.filling
                }
            }
        default:
           return state;
    }
}
const reducerWithImmer = (state = initialState, action:any)=>{

    switch(action.type){
        case ACTION:
            return produce(state,(draft)=>{
                draft.ingredients.filling = action.filling
            })
        default:
           return state;
    }
}


const store = createStore(reducerWithImmer);

console.log("initial state", store.getState())
store.subscribe(()=>{
    console.log(store.getState())
});

console.log("######################");
store.dispatch(actionCreator());