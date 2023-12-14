import { productsByCategoryAction } from "../store/productListReducer"



export function fetchCategoryById(id){
    return function(dispatch){
        fetch('http://localhost:3333/categories/'+id)
            .then(res => res.json())
            .then(data => dispatch(productsByCategoryAction(data)))
    }
}
