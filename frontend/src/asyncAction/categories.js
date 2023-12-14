import { fetchCategoriesSuccess } from "../store"

export const fetchCategoriesData = () => {
    return function(dispatch){
        let url = 'http://localhost:3333/categories/all'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(fetchCategoriesSuccess(data)))
    }
}
