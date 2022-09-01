import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import basketReducer from "./basket-reduser";
import { reducer as formReducer } from 'redux-form';

// комбайн со всеми редьюсерами
let reducer = combineReducers({
    basketPage: basketReducer,
    form: formReducer
});

//передача в стор
const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
});

window.store = store;
export default store;