import { allProductsAction } from "../store/productListReducer"


export function fetchAllProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(data => dispatch(allProductsAction(data)))
    }
}
