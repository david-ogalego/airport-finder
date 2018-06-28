import airports from '../airports';
import {
	RECEIVE_AIRPORTS,
	REQUEST_AIRPORTS,
} from '../../actions/actionTypes';

describe('airports reducer', () => {
	it('REQUEST_AIRPORTS', () => {
		expect(airports(undefined, {
			type: REQUEST_AIRPORTS,
			loadingAirports: true
		})).toEqual(
			{
				loadingAirports: true
			}
		)
	})
	it('RECEIVE_AIRPORTS', () => {
		expect(airports({ airports: [] }, {
			type: RECEIVE_AIRPORTS,
			airports: [ 'a1', 'a2' ],
			page: 1,
			hasMoreAirports: true,
			loadingAirports: true
		})).toEqual(
			{
				airports: [ 'a1', 'a2' ],
				hasMoreAirports: true,
				loadingAirports: true
			}
		)
	})
	it('airports default', () => {
		expect(airports({ airports: [ 'a1', 'a2 ']}, {
			airports: [ 'a1', 'a2 ']
		})).toEqual(
			{
				airports: [ 'a1', 'a2 ']
			}
		)
	})
})