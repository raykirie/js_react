
const defaultState = {
    category_name: '',
    productList: [],
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SALES_PRODUCTS = 'SALES_PRODUCTS'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'


export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {productList: action.payload.map(elem => {
                elem.isShowSale = true
                elem.isShowPrice = true
                return elem
            })}
        case SALES_PRODUCTS:
            return {productList: action.payload}
        case PRODUCTS_BY_CATEGORY:
            return {category_name: action.payload.category.title, productList: action.payload.data}
        case FILTER_BY_SALE:
            return {productList: state.productList.map(elem => {
                if (action.payload){
                    elem.isShowsale = (elem.discont_price) ? true : false
                } else {
                    elem.isShowSale = true
                }
                return elem
            })}
        case FILTER_BY_PRICE:
            const {max, min} = action.payload
            return {productList: state.productList.map(elem => { 
                    elem.isShowPrice = (!(elem.price >= min && elem.price <= max)) ? false : true
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
export const filterByPriceAction = (payload) => ({type:FILTER_BY_PRICE, payload })

