import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../styles/app.scss';
import store from '../store/store';
import Routes from '../pages/routes';

const App = () => (
	<Provider store={ store } >
		<Nav />
		<Routes />
		<Footer />
	</Provider>
);

export default App;
