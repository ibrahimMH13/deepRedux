import { ORDER_BURGER } from "./BurgerType"




export const orderBurger = (number =1) =>{
    return {
        type: ORDER_BURGER,
        payload:{
            number: number
        }
    }
}