import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './client/App';
import store from './client/redux/store';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
