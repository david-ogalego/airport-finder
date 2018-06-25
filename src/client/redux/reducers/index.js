import { combineReducers } from 'redux';
import airports from './airports';
import filters from './filters';

const rootReducer = combineReducers({
	airports,
	filters
});

export default rootReducer;