import {
	APPLY_FILTERS,
	LOAD_MORE,
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS,
	RECEIVE_COUNTRIES,
	RECEIVE_TYPES
} from './actionTypes';

export const applyFilters = ({ filterName, filterType, filterCountry }) => ({
	type: APPLY_FILTERS,
	filterName,
	filterType,
	filterCountry
});

export const loadMore = () => ({
	type: LOAD_MORE
});

export const requestAirports = () => ({
	type: REQUEST_AIRPORTS,
	loadingAirports: true
});

export const receiveAirports = ({airports, page, hasMoreAirports }) => ({
	type: RECEIVE_AIRPORTS,
	airports,
	page,
	loadingAirports: false,
	hasMoreAirports
});

export const fetchAirports = () => (dispatch, getState) => {
	dispatch(requestAirports());
	let filterUrl = '';
	const itemsPerPage = 20;
	const currentState = getState();
	const take = currentState.filters.page * itemsPerPage;
	const skip = take - itemsPerPage;
	filterUrl += `?take=${take + 1}&skip=${skip}&`;
	if (currentState.filters.filterName) {
		filterUrl += `name=${currentState.filters.filterName}&`;
	}
	if (currentState.filters.filterType) {
		filterUrl += `type=${currentState.filters.filterType}&`;
	}
	if (currentState.filters.filterCountry) {
		filterUrl += `iso=${currentState.filters.filterCountry}&`;
	}
	return fetch(`/airports${filterUrl}`)
		.then(response => response.json())
		.then((json) => {
			const hasMoreAirports = json.length > itemsPerPage;
			const airports = hasMoreAirports ? json.slice(0, take - 1) : json;
			return dispatch(receiveAirports({
				airports,
				page: currentState.filters.page,
				hasMoreAirports
			}));
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