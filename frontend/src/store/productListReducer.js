
const defaultState = {
    category_name: '',
    productList: [],
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SALES_PRODUCTS = 'SALES_PRODUCTS'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
const SORT_BY_NAME = 'SORT_BY_NAME'
const SORT_BY_PRICE = 'SORT_BY_PRICE'
const DEFAULT = 'DEFAULT'

export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {categories_name: 'All products', productList: action.payload.map(elem => {
                elem.isShowSale = true
                elem.isShowPrice = true
                return elem
            })}
        case SALES_PRODUCTS:
            return {categories_name: 'All sales', productList: action.payload.map(elem => {
                elem.isShowSale = true
                elem.isShowPrice = true
                return elem
            })}
        case PRODUCTS_BY_CATEGORY:
            return {category_name: action.payload.category.title, productList: action.payload.data.map(elem => {
                elem.isShowSale = true
                elem.isShowPrice = true
                return elem
            })}
        case FILTER_BY_SALE:
            return {productList: state.productList.map(elem => {
                if (action.payload){
                    elem.isShowSale = (elem.discont_price) ? true : false
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
            case SORT_BY_NAME:
                const sortedByName = [...state.productList].sort((a, b) => a.title.localeCompare(b.title));
                return { ...state, productList: sortedByName };

              case SORT_BY_PRICE:
                const sortedByPrice = state.productList.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                return { ...state, productList: sortedByPrice };
            case DEFAULT:
                const defaultOrder = [...state.productList].sort((a, b) => a.id - b.id);
                return { ...state, productList: defaultOrder };               
        default:
            return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload })
export const salesProductsAction = (payload) => ({type: SALES_PRODUCTS, payload })
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload })
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})
export const filterByPriceAction = (payload) => ({type:FILTER_BY_PRICE, payload })
export const sortByNameAction = (payload) => ({type:SORT_BY_NAME, payload})
export const sortByPriceAction = (payload) => ({type:SORT_BY_PRICE, payload})
export const defaultAction = () => ({ type: DEFAULT });
