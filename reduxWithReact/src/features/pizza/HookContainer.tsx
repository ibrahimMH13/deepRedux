import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pizzaState } from './PizzaType';
import { OrderPizza } from './PizzaActions';

const HookContainer = () => {
   const pizzaBase = useSelector((state: pizzaState) => state.pizza.pizzaBase);
   const dispatch = useDispatch();

  return (
    <div>
        <h3 className='bg-amber-400 p-5 m-5 text-white text-6xl'>
            Number of Pizza available # {pizzaBase} #
        </h3>
      <button onClick={()=>{dispatch(OrderPizza())}}  className='border-5 p-40 border-green-500'>
            Order Now
      </button>
    </div>
  )
}


export default HookContainer
