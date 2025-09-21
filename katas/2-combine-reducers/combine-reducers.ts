import { combineReducers, createStore } from "redux";


type pizzaStateType = {
    pizzaBase: number;
}

type burgerStateType = {
    burgerBuns: number;
}

type actionType = {
    type :string;
}

const initialPizzaState = {
    pizzaBase : 1000
}

const initialBurgerState = {
    burgerBuns: 1000
}

const ORDER_BURGER = 'order_burger';
const ORDER_PIZZA = 'order_pizza';


const orderPizzaActionCreator = ()=>{
    return {
        type: ORDER_PIZZA
    }
}

const orderBurgerActionCreator = () =>{
    return {
        type: ORDER_BURGER
    }
}

const pizzaReducer = (state : pizzaStateType = initialPizzaState, action : actionType) =>{
    
    switch(action.type){
        case ORDER_PIZZA:
            return {
                ... state,
                pizzaBase : --state.pizzaBase
            }
        default:
           return state;
    }
}

const burgerReducer = (state :burgerStateType = initialBurgerState,action :actionType) =>{
        switch(action.type){
            case ORDER_BURGER:
                return {
                    ...state,
                    burgerBuns : --state.burgerBuns
                }
            default :
            return state;
        }
}

const reducer = combineReducers({
    burgerReducer,
    pizzaReducer
})
const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(orderPizzaActionCreator());
store.dispatch(orderBurgerActionCreator());