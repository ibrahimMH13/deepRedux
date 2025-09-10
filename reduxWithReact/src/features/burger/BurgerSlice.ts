import { ORDER_BURGER } from "./BurgerType";


const initialBurgerState  = {
    burgerBuns : 100,
};



const burgerReducer = (state = initialBurgerState,action)=>{
    console.log(action);
    switch(action.type){
        case ORDER_BURGER:
            return {
                ... state,
                burgerBuns: state.burgerBuns - action.payload.number,
            }
        default:
            return initialBurgerState
    }

}


export default burgerReducer;