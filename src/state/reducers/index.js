import { combineReducers } from 'redux';
import authReducer from './authReducers';
import restaurantReducer from './restaurantReducers';

export default combineReducers({
    auth: authReducer,
    restaurants: restaurantReducer
})