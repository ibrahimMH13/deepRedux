import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductAction"
import axios from "axios";
import Products from "./Products";


export const fetchRequest = ()=>{

    return {
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = (products)=>{

    return {
        type: FETCH_SUCCESS,
        payload:{
            products
        }
    }
}
export const fetchError = (error)=>{

    return {
        type: FETCH_ERROR,
        payload:{
            error
        }
    }
}
//this for props way
export const fetchProducts = () =>{

    return async (dispatch) =>{
        try{
            dispatch(fetchRequest);
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log('inside fetchProducts creator',response.data);
            const products = response.data.map(p=>p.title);
            dispatch(fetchSuccess(products));
        }catch(e){
            //console.log(e);
           // dispatch(fetchError(e.message))
        }
    }
}
export const fetchProductsWithHook = () =>{

    return async (dispatch: any) =>{
        try{
            dispatch(fetchRequest);
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log('inside fetchProducts creator',response.data);
            const products = response.data.map(p=>p.title);
            dispatch(fetchSuccess(products));
        }catch(e){
            //console.log(e);
           // dispatch(fetchError(e.message))
        }
    }
}