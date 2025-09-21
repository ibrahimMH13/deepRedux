import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";


const initialState = {
    pizzaBase :1000
}
type pizzaStateType = {
    pizzaBase : number;
}

type actionType = {
    type: string;
}

const ORDER_PIZZA = 'pizza_order'
const pizzaOrderActionCreator = ()=>{
    return {
        type: ORDER_PIZZA
    }
}

const pizzaReducer = (state: pizzaStateType = initialState,action: actionType)=>{
        switch(action.type){
            case ORDER_PIZZA:
                return {
                    ...state,
                    pizzaBase: -- state.pizzaBase
                }
            default:
                return state;
        }
}

const midLogger = createLogger();
const middlewares = applyMiddleware(midLogger);
const store = createStore(pizzaReducer,middlewares);


store.dispatch(pizzaOrderActionCreator());
store.dispatch(pizzaOrderActionCreator());
store.dispatch(pizzaOrderActionCreator());
store.dispatch(pizzaOrderActionCreator());