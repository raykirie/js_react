
const defaultState = {
    category_name: '',
    productList: [],
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SALES_PRODUCTS = 'SALES_PRODUCTS'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const FILTER_BY_SALE = 'FILTER_BY_SALE'



export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {productList: action.payload.map(elem => {
                elem.isShow = true
                return elem
            })}
        case SALES_PRODUCTS:
            return {productList: action.payload}
        case PRODUCTS_BY_CATEGORY:
            return {productList: action.payload.data}
        case FILTER_BY_SALE:
            return {productList: state.productList.map(elem => {
                if (action.payload){
                    elem.isShow = (elem.discont_price) ? true : false
                } else {
                    elem.isShow = true
                }
                return elem
            })}
        default:
            return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload })
export const salesProductsAction = (payload) => ({type: SALES_PRODUCTS, payload })
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload })
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})

