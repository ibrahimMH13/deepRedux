import { ORDER_BURGER } from "./BurgerType"




export const orderBurger = (number) =>{
    return {
        type: ORDER_BURGER,
        payload:{
            number
        }
    }
}