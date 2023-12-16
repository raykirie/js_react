
const defaultState = {
    items: [],
  };
  

  const ADD_TO_BASKET = 'ADD_TO_BASKET';
  const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
  
  export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_TO_BASKET:
        return { ...state, items: [...state.items, action.payload],};
        case REMOVE_FROM_BASKET:
      return { ...state,items: state.items.filter(item => item.id !== action.payload.id), };
      default:
        return state;
    }
  };
  
  export const addToBasketAction = (payload) => ({ type: ADD_TO_BASKET, payload });
  export const removeFromBasketAction = (payload) => ({ type: REMOVE_FROM_BASKET, payload });
  