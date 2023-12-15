
const defaultState = {
    items: [],
}

const PRODUCT_INFO = 'PRODUCT_INFO'


export const productInfoReducer = (state = defaultState, action) => {
    switch(action.type){
        case PRODUCT_INFO: 
            return action.payload[0]
        default:
            return state
    }
}

export const productInfoAction = (payload) => ({type: PRODUCT_INFO, payload })

