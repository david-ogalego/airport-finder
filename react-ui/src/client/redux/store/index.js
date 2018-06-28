import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux';
import rootReducer from '../reducers';
import initialState from './initialState';

export default createStore(
    rootReducer,
    initialState,
	applyMiddleware(
		thunkMiddleware
	)
);