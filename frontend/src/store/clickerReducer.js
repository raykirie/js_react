const defaultState = 1

const INCR = 'INC'
const DECR = 'DECR'

export const clickerReducer = (state = defaultState, action) => {
    switch(action.type){
        case INCR:
            return Math.max(1, state + action.payload)
        case DECR:
            return Math.max(1, state - action.payload)
        default:
            return state
    }
}


export const incrAction = (payload) => ({type: INCR, payload})
export const decrAction = (payload) => ({type: DECR, payload})