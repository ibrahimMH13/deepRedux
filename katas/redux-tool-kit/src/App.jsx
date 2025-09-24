import { useSelector , useDispatch } from 'react-redux'
import './App.css'
import {  useEffect } from 'react';
import { fetchProducts , ProductActions } from './features/product/ProductSlice';


function App() {

  const data = useSelector(data=> data.products.products);
  const dispatch = useDispatch();
  useEffect(()=>{
       dispatch(fetchProducts());
  },[dispatch]);

  console.log(data);
  return (
    <>
     <h1><button onClick={()=>{ dispatch(ProductActions.filteringProducts())}}>Filter</button></h1>
    </>
  )
}

export default App
