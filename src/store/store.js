import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
