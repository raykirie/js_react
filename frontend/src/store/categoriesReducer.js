

const defaultState = [];

export const categoriesReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'FETCH_CATEGORIES_SUCCESS':
      return [...action.payload]
    default: 
      return state
  }
}