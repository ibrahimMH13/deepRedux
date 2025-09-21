
import { createStore } from 'redux';


type initialStateType = {
    pizzaBase: number;
    burgerBins: number;
}

type actionType = {
    type: string;
}


const initialState = {

    pizzaBase:1000,
    burgerBins:1000
}

const PIZZA_ORDER = 'pizza_order';
const BURGER_ORDER = 'burger_order';
function pizzaOrderActionCreator (){
    return {
        type: PIZZA_ORDER
    }
}
const reducer = (state: initialStateType = initialState,action: actionType)=>{

    switch(action.type){
        case PIZZA_ORDER:
            return {
                ... state,
                pizzaBase : state.pizzaBase -1
            }
        default:
            return state;    
    }
}


const store = createStore(reducer)

console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch(pizzaOrderActionCreator());