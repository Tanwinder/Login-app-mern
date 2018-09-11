import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../styles/app.scss';
import store from '../store/store';

import TodoList from '../components/container/todolist/todolist';

const App = () => (
	<Provider store={ store } >
		<div>
			<TodoList />
		</div>
	</Provider>
);

export default App;
