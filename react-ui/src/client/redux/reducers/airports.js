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
			page: action.resetPagination ? 1 : action.getMoreAirports ? state.page + 1 : 1
		});
	case RECEIVE_AIRPORTS:
		return Object.assign({}, state, {
			airports: action.resetAirports ? action.airports : state.airports.concat(action.airports),
			loadingAirports: action.loadingAirports,
		});
	default:
		return state
	}
}
  
  export default airports;