import { combineReducers } from 'redux';
import todolist from './todolist-reducer';
import products from './products-reducer';

export default combineReducers({
	todolist,
	products,
});