import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS,
	RECEIVE_COUNTRIES,
	RECEIVE_TYPES
} from './actionTypes';

export const requestAirports = ({ filterName, filterType, filterCountry, page }) => ({
	type: REQUEST_AIRPORTS,
	loadingAirports: true,
	filterName,
	filterType,
	filterCountry,
	page
});

export const receiveAirports = airports => ({
	type: RECEIVE_AIRPORTS,
	airports,
	loadingAirports: false,
});

export const fetchAirports = ({ filterName, filterType, filterCountry, getMoreAirports }) => (dispatch, getState) => {
		const currentState = getState();
	let page = currentState.airports.page;
	if (getMoreAirports) {
		page = currentState.airports.page + 1;
	} 
	dispatch(requestAirports({ filterName, filterType, filterCountry, page }));
	let filterUrl = '';
	const itemsPerPage = 20;
	const take = page * itemsPerPage;
	const skip = take - itemsPerPage;
	filterUrl += `?take=${take}&skip=${skip}&`;
	if (filterName) {
		filterUrl += `name=${filterName}&`;
	}
	if (filterType) {
		filterUrl += `type=${filterType}&`;
	}
	if (filterCountry) {
		filterUrl += `iso=${filterCountry}&`;
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