import { productInfoAction } from "../store/productInfoReducer"





export function fetchProdutInfo(id){
    return function(dispatch){
        fetch('http://localhost:3333/products/'+id)
            .then(res => res.json())
            .then(data => dispatch(productInfoAction(data)))
    }
}
