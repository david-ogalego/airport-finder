import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS,
	RECEIVE_TYPES
} from './actionTypes';

export const requestAirports = () => ({
	type: REQUEST_AIRPORTS,
	loadingAirports: true
});

export const receiveAirports = airports => ({
	type: RECEIVE_AIRPORTS,
	airports,
	loadingAirports: false,
});

export const fetchAirports = ({ filterName, filterType }) => (dispatch) => {
	dispatch(requestAirports());
	let filterUrl = '';
	if (filterName || filterType) {
		filterUrl = '?';
	}
	if (filterName) {
		filterUrl += `name=${filterName}&`;
	}
	if (filterType) {
		filterUrl += `type=${filterType}`;
	}
	return fetch(`/airports${filterUrl}`)
		.then(response => response.json())
		.then((json) => {
			return dispatch(receiveAirports(json));
		})
		.catch((error) => {
			console.log(`There has been a problem with your fetch operation: ${error}`);
		});
};

export const receiveTypes = types => ({
	type: RECEIVE_TYPES,
	types
});

export const fetchTypes = () => (dispatch) => {
	return fetch('/types')
		.then(response => response.json())
		.then((json) => {
			return dispatch(receiveTypes(json));
		})
		.catch((error) => {
			console.log(`There has been a problem with your fetch operation: ${error}`);
		});
}