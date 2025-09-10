
import { FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS} from "./ProductAction";


const initialState = {
    loading: false,
    error:false,
    products:[]
}


const productReducers = (state = initialState,action)=>{

        switch(action.type){

            case FETCH_REQUEST:
                return{
                    ... state,
                    loading: true
                };
            case FETCH_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    products: action.payload.products
                };
            case FETCH_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: true
                }    
            default:
               return state;
        }
}


export default productReducers;