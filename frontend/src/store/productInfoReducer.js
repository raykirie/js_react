const defaultState = {
    count: 1,
    productInfo: {
      items: [],
    }
  };
  
  const INCR = 'INC';
  const DECR = 'DECR';
  const PRODUCT_INFO = 'PRODUCT_INFO';
  
  export const productInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
      case INCR:
        return {
          ...state,
          count: Math.max(1, state.count + action.payload),
        };
      case DECR:
        return {
          ...state,
          count: Math.max(1, state.count - action.payload),
        };
      case PRODUCT_INFO:
        return {
          ...state,
          productInfo: action.payload[0],
        };
      default:
        return state;
    }
  };
  
  export const incrAction = (payload) => ({ type: INCR, payload });
  export const decrAction = (payload) => ({ type: DECR, payload });
  export const productInfoAction = (payload) => ({ type: PRODUCT_INFO, payload });
  