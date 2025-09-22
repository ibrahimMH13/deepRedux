import { PIZZA_ORDER } from "./PizzaAction"



export const orderActionNow = (n: number = 1)=>{
        return {
            type: PIZZA_ORDER,
            payload:{
                count: Number(n)
            }
        }
}