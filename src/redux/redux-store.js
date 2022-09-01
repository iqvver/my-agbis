import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import basketReducer from "./basket-reduser";

// комбайн со всеми редьюсерами
let reducer = combineReducers({
    basketPage: basketReducer,
});

//передача в стор
const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
});

window.store = store;
export default store;