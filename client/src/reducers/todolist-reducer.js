import { ADD_ITEM } from '../actions/types';

const initialState = {
	items: []
};
export default (state= initialState, action) => {
	switch(action.type) {
	case ADD_ITEM:
		return {
			...state,
			items: [ {name: 'this is a'}, {name: 'bs'} ]
		};
	default:
		return state;
	}
};
