import { createStore } from 'redux'
import pizzaReducer from './features/pizza/PizzaSlice';


const store = createStore(pizzaReducer);


export default store;