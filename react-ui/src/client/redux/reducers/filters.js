import {
	RECEIVE_TYPES
} from '../actions/actionTypes';

const filters = (state = [], action) => {
	switch (action.type) {
	case RECEIVE_TYPES:
		return Object.assign({}, state, {
			types: action.types
		});
	default:
		return state
	}
}
  
export default filters;