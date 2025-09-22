import { connect } from "react-redux";
import {orderActionNow} from "./PizzaActionCreator";
import { useState } from "react";

const PizzaCard = (props) => {
  const [count,setCount] = useState(1);
  return (
    <>
      {props.pizzaNumber}
      <input value={count} onChange={(e)=>{setCount(e.target.value)}} /><button onClick={()=>{props.orderNow(count)}}>Order</button>
    </>
  )
}

const mapPropsToState =(state)=>{

  return {
      pizzaNumber: state.pizzaBase
  }
}
const mapDispatchToState =(dispatch)=>{

  return {
      orderNow: (n)=> dispatch(orderActionNow(n))
    }
}
export default connect(mapPropsToState,mapDispatchToState)(PizzaCard)
