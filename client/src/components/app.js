import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../styles/app.scss';
import store from '../store';

import ShoppingApp from '../components/container/shopping/shopping-app';

const App = () => (
	<Provider store={ store } >
		<div>
			<ShoppingApp />
		</div>
	</Provider>
);

export default App;
