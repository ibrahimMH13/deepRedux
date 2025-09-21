import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import {thunk} from "redux-thunk"
import axios from "axios";

const REQUEST_ACTION = {
    REQUEST_PENDING:'request_pending',
    REQUEST_FETCH:'request_fetch',
    REQUEST_ERROR:'request_error'
}

type pizzaStateType = {
    pizzaBase: number;
}

type actionType =  {
    type: string;
    payload: any
}
type productStateType = {
    loading: boolean;
    error: boolean;
    products: any[]
}

const initialProductState = {
   loading: false,
   error: false,
   products: []
}


const productReducer = (state : productStateType = initialProductState,action: actionType)=>{

    switch(action.type){
        case REQUEST_ACTION.REQUEST_PENDING:
            return {
                ... state,
                loading: true
            }
        case REQUEST_ACTION.REQUEST_FETCH:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
        case REQUEST_ACTION.REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: !!action.payload.error
            }
        default:
          return  state
    }
}


const fetchProductActionCreator = (products:any)=>{
        return {
            type: REQUEST_ACTION.REQUEST_FETCH,
            payload:{
                products:products
            }
        }
}

const errorProductActionCreator = ()=>{
        return {
            type: REQUEST_ACTION.REQUEST_ERROR
        }
}

const pendingProductActionCreator =()=> {
        return {
            type: REQUEST_ACTION.REQUEST_PENDING
        }
}
const fetchProducts = ()=>{
    return async(dispatch:any)=>{
        try{
            dispatch(pendingProductActionCreator());
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch(fetchProductActionCreator(response.data))
        }catch(e){
            dispatch(errorProductActionCreator());
        }

    }
}
const logger = createLogger();
const mid = applyMiddleware(thunk,logger);
const store = createStore(productReducer,mid);
store.dispatch(fetchProducts());

