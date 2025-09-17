import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./store.js";
import { pizzaActions } from './features/pizza/PizzaSlice.js';
import { burgerActions } from './features/burger/burgerSlice.js';


console.log(store.getState());


const unsubscribe = store.subscribe(()=>{
  console.log("update state",store.getState() )
});
const order = pizzaActions.pizza_order;
store.dispatch(order());
store.dispatch(order());
store.dispatch(order());
store.dispatch(order());

console.log(store.getState());

const orderBurger = burgerActions.orderBurger;

store.dispatch(orderBurger());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
store.dispatch(orderBurger());


store.dispatch(orderBurger());
store.dispatch(orderBurger());






unsubscribe();

createRoot(document.getElementById('root')).render(

<StrictMode>
    
    <App />
  </StrictMode>,
)
