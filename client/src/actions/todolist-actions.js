import * as AT from './types';
import axios from 'axios';

const TODO_LIST_URL = 'http://localhost:4000/todolist';

export const getTodoItems = () => {
	return dispatch => {
		axios.get(TODO_LIST_URL)
			.then( items => {
				dispatch({
					type: AT.GET_TODO_ITEMS,
					items: items.data
				});
			})
			.catch(err => console.log('err ',err));
		// dispatch({
		// 	type: AT.GET_TODO_ITEMS,
		// });
	};
};
export const addTodoItem = (item) => (
	dispatch => {
		axios.post(TODO_LIST_URL,item)
			.then( response => {
				if(response.data.item !== null) {
					dispatch({
						type: AT.ADD_ITEM,
						item: response.data.item,
					});
				} else {
					dispatch({
						type: AT.DUPLICATE_EXIST,
					});
				}
			});
	}
);

export const onDeleteItem = ( item ) => (
	dispatch => {
		axios.delete(`${ TODO_LIST_URL }/${ item }`)
			.then( response => {
				dispatch({
					type: AT.DELETE_ITEM,
					item: item
				});
			})
			.catch( err => console.log(err));
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

export const todoFilterSelected = (filter) => {
	return {
		type: AT.TODO_FILTER,
		filter: filter
	};
};