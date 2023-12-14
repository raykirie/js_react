
const defaultState = {
    category_name: '',
    productList: [],
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SALES_PRODUCTS = 'SALES_PRODUCTS'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'




export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {productList: action.payload}
        case SALES_PRODUCTS:
            return {productList: action.payload}
        case PRODUCTS_BY_CATEGORY:
            return {productList: action.payload.data}
        default:
            return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload })
export const salesProductsAction = (payload) => ({type: SALES_PRODUCTS, payload })
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload })


