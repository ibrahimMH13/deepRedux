import { PIZZA_ORDER } from "./PizzaAction";


type pizzaStateType = {
    pizzaBase: number;
}

type pizzaActionType = {
    type: string;
    payload: any;
}

const initialPizzaState = {

    pizzaBase:1000
}

const pizzaReducer = (state: pizzaStateType = initialPizzaState, action : pizzaActionType)=>{
    switch(action.type){
        case PIZZA_ORDER:
            return {
                ... state,
                pizzaBase: state.pizzaBase - action.payload.count
            }
        default: 
            return state;
    }
}   



export default pizzaReducer;