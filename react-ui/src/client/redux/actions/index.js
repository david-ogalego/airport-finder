import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS,
	RECEIVE_COUNTRIES,
	RECEIVE_TYPES
} from './actionTypes';

export const requestAirports = ({ filterName, filterType, filterCountry, getMoreAirports, resetPagination }) => ({
	type: REQUEST_AIRPORTS,
	loadingAirports: true,
	filterName,
	filterType,
	filterCountry,
	getMoreAirports,
	resetPagination
});

export const receiveAirports = (airports, resetAirports) => ({
	type: RECEIVE_AIRPORTS,
	airports,
	loadingAirports: false,
	resetAirports
});

export const fetchAirports = ({ filterName, filterType, filterCountry, getMoreAirports, resetPagination }) => (dispatch, getState) => {
	dispatch(requestAirports({ filterName, filterType, filterCountry, getMoreAirports, resetPagination }));
	let filterUrl = '';
	const itemsPerPage = 20;
	const currentState = getState();
	const take = currentState.airports.page * itemsPerPage;
	const skip = take - itemsPerPage;
	filterUrl += `?take=${take}&skip=${skip}&`;
	if (currentState.airports.filterName) {
		filterUrl += `name=${currentState.airports.filterName}&`;
	}
	if (currentState.airports.filterType) {
		filterUrl += `type=${currentState.airports.filterType}&`;
	}
	if (currentState.airports.filterCountry) {
		filterUrl += `iso=${currentState.airports.filterCountry}&`;
	}
	return fetch(`/airports${filterUrl}`)
		.then(response => response.json())
		.then((json) => {
			return dispatch(receiveAirports(json, resetPagination));
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

export const receiveCountries = countries => ({
	type: RECEIVE_COUNTRIES,
	countries
});

export const fetchCountries = () => (dispatch) => {
	return fetch('/countries')
		.then(response => response.json())
		.then((json) => {
			return dispatch(receiveCountries(json));
		})
		.catch((error) => {
			console.log(`There has been a problem with your fetch operation: ${error}`);
		});
}