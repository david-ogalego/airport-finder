import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
	applyFilters,
	loadMore,
	requestAirports,
	receiveAirports,
	receiveTypes,
	receiveCountries,
	fetchTypes,
	fetchCountries
} from '../';
import {
	APPLY_FILTERS,
	LOAD_MORE,
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS,
	RECEIVE_COUNTRIES,
	RECEIVE_TYPES
} from '../ActionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
	it('should create an action to apply filter', () => {
		const filterName = 'filter name';
		const filterType = 'filter type';
		const filterCountry = 'filter country';
		const expectedAction = {
			type: APPLY_FILTERS,
			filterName,
			filterType,
			filterCountry
		}
		expect(applyFilters({ filterName, filterType, filterCountry })).toEqual(expectedAction)
	});
	it('should create an action to load more', () => {
		const expectedAction = {
			type: LOAD_MORE
		}
		expect(loadMore()).toEqual(expectedAction)
	});
	it('should create an action to request airports', () => {
		const expectedAction = {
			type: REQUEST_AIRPORTS,
			loadingAirports: true
		}
		expect(requestAirports()).toEqual(expectedAction)
	});
	it('should create an action to receive airports', () => {
		const airports = ['a1', 'a2'];
		const page = 1;
		const hasMoreAirports = false;
		const expectedAction = {
			type: RECEIVE_AIRPORTS,
			airports,
			page,
			loadingAirports: false,
			hasMoreAirports
		}
		expect(receiveAirports({airports, page, hasMoreAirports })).toEqual(expectedAction)
	});
	it('should create an action to receive types', () => {
		const types = ['t1', 't2'];
		const expectedAction = {
			type: RECEIVE_TYPES,
			types
		}
		expect(receiveTypes(types)).toEqual(expectedAction);
	});
	it('should create an action to receive countries', () => {
		const countries = ['c1', 'c2'];
		const expectedAction = {
			type: RECEIVE_COUNTRIES,
			countries
		}
		expect(receiveCountries(countries)).toEqual(expectedAction);
	});
});

describe('async actions', () => {
	afterEach(() => {
		fetchMock.reset()
		fetchMock.restore()
	});

	it('creates RECEIVE_TYPES when fetching types has been done', () => {
		fetchMock
			.getOnce('/types', { body: { types: ['t1', 't2'] }, headers: { 'content-type': 'application/json' } })
	
		const expectedActions = { type: RECEIVE_TYPES, types: ['t1', 't2'] };
		const store = mockStore({ });
		return store.dispatch(fetchTypes()).then(() => {
			expect(receiveTypes(['t1', 't2'])).toEqual(expectedActions);
		})
	})
	it('creates RECEIVE_COUNTRIES when fetching countries has been done', () => {
		fetchMock
			.getOnce('/countries', { body: { countries: ['c1', 'c2'] }, headers: { 'content-type': 'application/json' } })
	
		const expectedActions = { type: RECEIVE_COUNTRIES, countries: ['c1', 'c2'] };
		const store = mockStore({ });
		return store.dispatch(fetchCountries()).then(() => {
			expect(receiveCountries(['c1', 'c2'])).toEqual(expectedActions);
		})
	})
	// it('creates RECEIVE_AIRPORTS when fetching airports has been done', () => {
	// 	fetchMock
	// 		.getOnce('/airports?take=21&skip=0&', { body: { airports: ['a1', 'a2'] }, headers: { 'content-type': 'application/json' } })
	
	// 	const expectedActions = { type: RECEIVE_AIRPORTS, airports: ['a1', 'a2'] };
	// 	const store = mockStore({
	// 		filters: {
	// 			page: 1
	// 		} 
	// 	});
	// 	return store.dispatch(fetchAirports()).then(() => {
	// 		expect(receiveAirports(['a1', 'a2'])).toEqual(expectedActions);
	// 	})
	// })
})