import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TodoList from '../components/container/todolist/todolist';
import Products from '../components/container/products/products';
import Orders from '../components/container/orders/orders';
import About from '../components/presentational/about/about';

const Routes = () => (
	<Switch>
		<Route path="/" exact name={ TodoList } component={ TodoList } />
		<Route path="/todolist" name={ TodoList } component={ TodoList } />
		<Route path="/products" name={ Products } component={ Products } />
		<Route path="/orders" name={ Orders } component={ Orders } />
		<Route path="/about" name={ About } component={ About } />
		<Redirect to="/about" />
	</Switch>
);

export default Routes;



