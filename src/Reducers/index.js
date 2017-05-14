import { combineReducers } from 'redux';

//importing 3 reducers
import Products from './productsReducer'
import Settings from './settingsReducer'
import Cart from './cartReducer'

//combining 3 reducers to one
const rootReducer = combineReducers({
    Products,
    Settings,
    Cart
});

export default rootReducer;
