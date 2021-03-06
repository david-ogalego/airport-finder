import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS
} from '../actions/actionTypes';

const airports = (state = [], action) => {
	switch (action.type) {
	case REQUEST_AIRPORTS:
		return Object.assign({}, state, {
			loadingAirports: action.loadingAirports
		});
	case RECEIVE_AIRPORTS:
		return Object.assign({}, state, {
			airports: action.page > 1 ? state.airports.concat(action.airports) : action.airports,
			loadingAirports: action.loadingAirports,
			hasMoreAirports: action.hasMoreAirports
		});
	default:
		return state
	}
}
  
  export default airports;