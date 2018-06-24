import airports from '../../../data/airports.json'
import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS
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

export const fetchAirports = () => (dispatch) => {
	dispatch(requestAirports());
	setTimeout(function() {
		return dispatch(receiveAirports(airports));
	}, 2000);
	// return fetch(`https://gateway.marvel.com:443/v1/public/comics?format=comic&offset=${offsetComics}&limit=${limitComics}&orderBy=-onsaleDate&apikey=d86beaee5f52cf5b1205630a7e35b24b`)
	// 	.then(response => response.json())
	// 	.then((json) => {
	// 	if (json.code === 200) {
	// 		if (gettingMoreComics) {
	// 		return dispatch(receiveMoreComics(json.data.results));
	// 		}
	// 		return dispatch(receiveComics(json.data.results));
	// 	}
	// 	throw json.status;
	// 	})
	// 	.catch((error) => {
	// 	console.log(`There has been a problem with your fetch operation: ${error}`);
	// 	});
};