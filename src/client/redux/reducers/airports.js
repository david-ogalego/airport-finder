import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS
} from '../actions/actionTypes';

const airports = (state = [], action) => {
	switch (action.type) {
	case REQUEST_AIRPORTS:
		return {
			...state,
			loadingAirports: action.loadingAirports
		};
	case RECEIVE_AIRPORTS:
		return Object.assign({}, state, {
			airports: action.airports,
			loadingAirports: action.loadingAirports,
		});
	default:
		return state
	}
}
  
  export default airports;