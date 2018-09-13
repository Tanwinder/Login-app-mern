import * as AT from './types';
import axios from 'axios';

export const getTodoItems = () => {
	return dispatch => {
		// axios.get('http://localhost:4000/todolist')
		// 	.then( data => {
		// 		console.log('data ',data);
		// 		dispatch({
		// 			type: AT.GET_TODO_ITEMS,
		// 			items: data.data
		// 		});
		// 	})
		// 	.catch(err => console.log('err ',err));
		dispatch({
			type: AT.GET_TODO_ITEMS,
		});
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