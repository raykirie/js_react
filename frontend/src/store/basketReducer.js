const dataMap = JSON.parse(localStorage.getItem('items')) || []


const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const CHANGE_COUNT = 'CHANGE_COUNT'
const REMOVE_ITEM = 'REMOVE_ITEM'

function changeCountItem(array, id, count) {
  return array.map((elem) => {
    if (elem.id === id) {
      elem.count = Math.max(1, elem.count + count);
    }
    return elem
  })
}

export const basketReducer = (state = { items: dataMap, count: 1 }, action)  => {
  switch (action.type) {
  case ADD_NEW_ITEM:
      let { id, title, image, price, count, discont_price } = action.payload
      if (state.items.find((elem) => elem.id === id)) {
        return {
          ...state,
          items: changeCountItem(state.items, id, count)
        }
      } else {
        let new_item = {
          id,
          title,
          image,
          price,
          count,
          discont_price
        }
        return {
          ...state,
          items: [...state.items, new_item]
        }
      }
  case CHANGE_COUNT:
      let findItem = state.items.find((elem) => elem.id === action.payload.id)
      if (action.payload.count === -1 && findItem.count === 1) {
        return {
          ...state,
          items: state.items.filter((elem) => elem.id !== action.payload.id)
        }
      } else {
        return {
          ...state,
          items: changeCountItem(state.items, action.payload.id, action.payload.count)
        }
      }

      case REMOVE_ITEM:
        return {
            ...state,
            items: state.items.filter((elem) => elem.id !== action.payload.id)
        };
        default:
          return state;
    }
}


export const addNEwItemAction = (payload) => ({type: ADD_NEW_ITEM, payload}) 
export const changeCountAction = (payload) => ({type: CHANGE_COUNT, payload}) 
export const removeItemAction = (payload) => ({ type: REMOVE_ITEM, payload })