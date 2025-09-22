
import {orderActionNow} from "./PizzaActionCreator";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

const PizzaCard = () => {
  const [count,setCount] = useState(1);
  const dispatch = useDispatch();
  const pizzaCount = useSelector((state)=> state.pizzaBase);
  return (
    <>
      {pizzaCount}
      <input value={count} onChange={(e)=>{setCount(e.target.value)}} /><button onClick={()=>{dispatch(orderActionNow(count))}}>Order using hook</button>
    </>
  )
}


export default PizzaCard
