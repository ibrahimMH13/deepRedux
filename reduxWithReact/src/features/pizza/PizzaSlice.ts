import { PIZZA_ORDER, pizzaAction, pizzaState } from "./PizzaType";



const initialPizzaOrderState  = {
    pizzaBase :100,
};



const pizzaReducer = (state: pizzaState = initialPizzaOrderState,action:pizzaAction)=>{

    switch(action.type){

        case PIZZA_ORDER:
            console.log(PIZZA_ORDER);
            return {
                ... state,
                pizzaBase: state.pizzaBase - 1,
            }
        default:
            return state;
    }
};

export default pizzaReducer;