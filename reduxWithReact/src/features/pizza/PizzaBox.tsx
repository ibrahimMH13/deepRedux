import React from 'react'
import { connect } from 'react-redux'
import {OrderPizza} from "./PizzaActions"

const PizzaBox = (props) => {
  console.log(props);
  return (
    <div className='bg-red-500 p-5 border-2 text-white border-red-300'>
      PizzaBox <span className='text-green-800 text-8xl'>{props.pizzaBase}</span>
      <button className='text-black block mt-10 m-auto' onClick={()=>{props.orderPizza()}}>
          order now
      </button>
      </div>
  )
}
const mapStateToProps =(state)=>{
  return {
    pizzaBase : state.pizzaBase
  }
}
const mapDispatchToProps = (dispatch)=>{
    return {
      orderPizza :()=> dispatch(OrderPizza())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox);