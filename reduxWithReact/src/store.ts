import { combineReducers, createStore, applyMiddleware } from 'redux'
import pizzaReducer from './features/pizza/PizzaSlice';
import burgerReducer from './features/burger/BurgerSlice';
import logger from "redux-logger";
import productReducers from './features/product/ProductSlice';
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
pizza:  pizzaReducer,
burger: burgerReducer,
product: productReducers
});
const MiddlewaresApplied = applyMiddleware(thunk,logger);
const store = createStore(rootReducer,MiddlewaresApplied);


export default store;