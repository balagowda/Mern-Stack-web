import {combineReducers} from 'redux';
import { getProductsReducer } from './reducers/Reducer';

const rootReducer = combineReducers({
    getproductsdata:getProductsReducer,
});

export default rootReducer;