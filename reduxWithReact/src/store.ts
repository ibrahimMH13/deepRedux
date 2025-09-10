import { combineReducers, createStore, applyMiddleware } from 'redux'
import pizzaReducer from './features/pizza/PizzaSlice';
import burgerReducer from './features/burger/BurgerSlice';
import logger from "redux-logger";


const rootReducer = combineReducers({
pizza:  pizzaReducer,
burger: burgerReducer
});
const store = createStore(rootReducer,applyMiddleware(logger));


export default store;