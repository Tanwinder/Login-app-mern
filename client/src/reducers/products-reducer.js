import * as AT from '../actions/types';

const initialState = {
	items: [],
	filter: 'all'
};
export default (state= initialState, action) => {
	switch(action.type) {
	case AT.GET_TODO_ITEMS:
		return {
			...state,
		};
	case AT.ADD_ITEM:
		return {
			...state,
			items: [ ...state.items, action.item ]
		};
	case AT.DELETE_ITEM:
		return {
			...state,
			items: state.items.filter( ac => ac.id !== action.item)
		};
	case AT.ON_CHECKBOX_CHANGE:
		return {
			...state,
			items: action.items,
		};
	case AT.TODO_FILTER:
		return {
			...state,
			filter: action.filter
		};
	default:
		return state;
	}
};
