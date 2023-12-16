
const defaultState = {
    items: [],
  };
  


  const ADD_TO_BASKET = 'ADD_TO_BASKET';
  
  export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_TO_BASKET:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      default:
        return state;
    }
  };
  
  export const addToBasketAction = (payload) => ({ type: ADD_TO_BASKET, payload });
  