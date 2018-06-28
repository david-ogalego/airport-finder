import {
	RECEIVE_TYPES, APPLY_FILTERS, LOAD_MORE
} from '../actions/actionTypes';

const filters = (state = [], action) => {
	switch (action.type) {
	case APPLY_FILTERS:
		return Object.assign({}, state, {
			filterName: action.filterName,
			filterType: action.filterType,
			filterCountry: action.filterCountry,
			page: 1
		});
	case LOAD_MORE:
		return Object.assign({}, state, {
			page: state.page + 1
		});
	case RECEIVE_TYPES:
		return Object.assign({}, state, {
			types: action.types
		});
	default:
		return state
	}
}
  
export default filters;