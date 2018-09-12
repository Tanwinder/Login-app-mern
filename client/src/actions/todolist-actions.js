import * as AT from './types';

export const getTodoItems = () => {
	return {
		type: AT.GET_TODO_ITEMS,
	};
};
export const addTodoItem = (item) => (
	dispatch => {
		dispatch({
			type: AT.ADD_ITEM,
			item
		});
	}
);

export const onDeleteItem = ( item ) => (
	dispatch => {
		dispatch({
			type: AT.DELETE_ITEM,
			item: item
		});
	}
);

export const onChangeCheckbox = (items) => (
	dispatch => {
		dispatch({
			type: AT.ON_CHECKBOX_CHANGE,
			items,
		});
	}
);