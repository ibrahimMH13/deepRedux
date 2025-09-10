import React from 'react'
import { connect } from 'react-redux'
import { orderBurger } from './BurgerActions'

const BurgerBox = (props) => {
    console.log(props);
  return (
    <div className='bg-green-600 p-5 border-2 text-white border-red-300'>
    BurgerBox <span className='text-red-800 text-8xl'>{props.burgerBuns}</span>
    <button className='text-black block mt-10 m-auto' onClick={()=>props.orderBurgerNow()}>
        order now
    </button>
    </div>
  )
}
const mapStateToProps= (state)=>{
    return {
        burgerBuns : state.burger.burgerBuns,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        orderBurgerNow : ()=> dispatch(orderBurger())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBox);