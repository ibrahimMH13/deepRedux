import { PIZZA_ORDER } from "./PizzaType";




export const OrderPizza =(n)=>{

    return {
        type: PIZZA_ORDER,
        payload:{
            count :n
        }
    }

}