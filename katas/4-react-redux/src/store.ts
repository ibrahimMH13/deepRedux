import { createStore } from "redux";
import pizzaReducer from "./features/pizza/PizzaReducer";



const store = createStore(pizzaReducer);



export default store;