import {createSelector} from 'reselect';

const getTodoItems = state => state.todolist.items;
const getTodoFilter = state => state.todolist.filter;

export const getFilteredTodoItems = createSelector(
	[ getTodoItems, getTodoFilter ], (todo, filter) => {
		switch(filter) {
		case 'all':
			return todo;
		case 'completed':
			return todo.filter( ac => ac.isCompleted);
		case 'pending':
			return todo.filter( ac => !ac.isCompleted);
		default:
			return todo;
		}
	}
);
