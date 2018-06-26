import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS
} from '../actions/actionTypes';

const airports = (state = [], action) => {
	switch (action.type) {
	case REQUEST_AIRPORTS:
		return Object.assign({}, state, {
			loadingAirports: action.loadingAirports,
			filterName: action.filterName,
			filterType: action.filterType,
			filterCountry: action.filterCountry,
			page: action.page
		});
	case RECEIVE_AIRPORTS:
		return Object.assign({}, state, {
			airports: state.airports.concat(action.airports),
			loadingAirports: action.loadingAirports,
		});
	default:
		return state
	}
}
  
  export default airports;