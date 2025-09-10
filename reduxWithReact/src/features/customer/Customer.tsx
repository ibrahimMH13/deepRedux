import React, { useState } from 'react'
import { orderBurger } from '../burger/BurgerActions';
import { connect } from 'react-redux';

const Customer = (props) => {
    console.log(props);
    const [number, setNumber] = useState(1);
  return (
    <div>
        <input value={number} onChange={e => setNumber(Number(e.target.value))} />
        <button onClick={()=>props.orderNow(number)}>
            Order noW
        </button>
    </div>
  )
}

const mapStateToProps =(state)=>{
    return {
        burgerBuns: state.burger.burgerBuns
    }
}

const mapDispatchToProps = (dispatch)=>{
return {
    orderNow :(number)=> dispatch(orderBurger(number))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Customer);