import {
	RECEIVE_COUNTRIES
} from '../actions/actionTypes';

const countries = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_COUNTRIES:
		return Object.assign({}, state, {
			countries: action.countries
		});
	default:
		return state
	}
}
  
export default countries;