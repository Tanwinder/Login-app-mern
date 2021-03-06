import * as AT from '../actions/types';

const initialState = {
	items: [],
	filter: 'all',
	duplicate: false
};
export default (state= initialState, action) => {
	switch(action.type) {
	case AT.GET_TODO_ITEMS:
		return {
			...state,
			items: action.items,
			duplicate: false
		};
	case AT.ADD_ITEM:
		return {
			...state,
			items: [ ...state.items, action.item ],
			duplicate: false
		};
	case AT.DELETE_ITEM:
		return {
			...state,
			items: state.items.filter( ac => ac._id !== action.item),
			duplicate: false
		};
	case AT.ON_CHECKBOX_CHANGE:
		return {
			...state,
			items: action.items,
			duplicate: false
		};
	case AT.TODO_FILTER:
		return {
			...state,
			filter: action.filter,
			duplicate: false
		};
	case AT.DUPLICATE_EXIST:
		return {
			...state,
			duplicate: true
		};
	default:
		return state;
	}
};
