import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from '../components/container/todolist/todolist';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/todolist" name={ TodoList } component={ TodoList } />
		</Switch>
	</BrowserRouter>
);

export default Routes;



