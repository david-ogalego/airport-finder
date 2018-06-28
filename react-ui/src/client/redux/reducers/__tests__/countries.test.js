import countries from '../countries';
import {
	RECEIVE_COUNTRIES,
} from '../../actions/actionTypes';

describe('countries reducer', () => {
	it('RECEIVE_COUNTRIES', () => {
		expect(countries(undefined, {
			type: RECEIVE_COUNTRIES,
			countries: [ 'c1', 'c2 ']
		})).toEqual(
			{
				countries: [ 'c1', 'c2 ']
			}
		)
	})
	it('countries default', () => {
		expect(countries({ countries: [ 'c1', 'c2 ']}, {
			countries: [ 'c1', 'c2 ']
		})).toEqual(
			{
				countries: [ 'c1', 'c2 ']
			}
		)
	})
})