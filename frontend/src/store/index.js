import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './categoriesReducer';
import {thunk} from 'redux-thunk'; 
import { productListReducer } from './productListReducer';
import { productInfoReducer } from './productInfoReducer';
import { clickerReducer } from './clickerReducer';





export const fetchCategoriesSuccess = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  payload: categories,
});


const rootReducer = combineReducers({
  categories: categoriesReducer,
  productList: productListReducer, 
  productInfo: productInfoReducer,
  clicker: clickerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
