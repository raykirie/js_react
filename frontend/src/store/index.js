import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './categoriesReducer';
import { thunk } from 'redux-thunk'; 
import { productListReducer } from './productListReducer';
import { productInfoReducer } from './productInfoReducer';
import { basketReducer } from './basketReducer';




export const fetchCategoriesSuccess = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  payload: categories,
});


const rootReducer = combineReducers({
  categories: categoriesReducer,
  productList: productListReducer, 
  productInfo: productInfoReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
