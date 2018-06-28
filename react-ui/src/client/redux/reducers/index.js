import { combineReducers } from 'redux';
import airports from './airports';
import countries from './countries';
import filters from './filters';

const rootReducer = combineReducers({
	airports,
	countries,
	filters
});

export default rootReducer;