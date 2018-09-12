import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../styles/app.scss';
import store from '../store/store';

import Routes from '../pages/routes';
import NavBar from './presentational/navbar/navbar';
import Footer from './presentational/footer/footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

library.add(faCopyright);

const App = () => (
	<Provider store={ store } >
		<div className="mern-app">
			<NavBar />
			<Routes />
			<Footer />
		</div>
	</Provider>
);

export default App;
