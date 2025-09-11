import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './ProductCreator';

// so here is the old way to access state
const Products = (
//  props
) => {

    // const products = useSelector((state:any)=> state.product.products);
    // const loading = useSelector((state:any)=> state.product.loading);
    // const error = useSelector((state:any)=> state.product.error);
    // const dispatch = useDispatch();\

  //  const { products, loading, error} = props.product;

    // console.log("#inside Products",products);
    // console.log("#inside Products",loading);
    // console.log("#inside Products",error);
    // useEffect(()=>{
    //  props.fetchNow();
    // },[])

    // Hooks
    const { products } = useSelector((state:any)=> state.product);
    const dispatch = useDispatch<any>();

    useEffect(()=>{
      dispatch(fetchProducts());
    },[

    ])
  return (
    <div>
      {products.length > 0? (
        <div>
          {products.map(p=>(
            <ul>
              <li>{p}</li>
              </ul>
          ))}
        </div>
      ):(
        <p>No there are any products yet</p>
      )}
    </div>
  )
}

// const mapStateToProps = (state)=>{
//   return{
//     ... state,
//     product : state.product
//   }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return {
//        fetchNow : () => dispatch(fetchProducts())
//     }
// }
//export default connect(mapStateToProps,mapDispatchToProps)(Products);

export default Products;