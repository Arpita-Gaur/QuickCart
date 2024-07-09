import {thunk} from 'redux-thunk';
import {createStore,combineReducers, applyMiddleware} from 'redux';

import{ composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer ,getProductDetailsReducer} from './reducers/ProductReducers';


const middleware=[thunk];

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProds: getProductDetailsReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
//...rest operator

export default store;