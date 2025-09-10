import { ORDER_BURGER } from "./BurgerType";


const initialBurgerState  = {
    burgerBuns : 100,
};



const burgerReducer = (state = initialBurgerState,action)=>{
    switch(action.type){
        case ORDER_BURGER:
            return {
                ... state,
                burgerBuns: state.burgerBuns - 1,
            }
        default:
            return initialBurgerState
    }

}


export default burgerReducer;