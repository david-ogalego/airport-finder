import filters from '../filters';
import {
	RECEIVE_TYPES,
	APPLY_FILTERS,
	LOAD_MORE
} from '../../actions/actionTypes';

describe('filters reducer', () => {
	it('RECEIVE_TYPES', () => {
		expect(filters(undefined, {
			type: RECEIVE_TYPES,
			types: [ 't1', 't2 ']
		})).toEqual(
			{
				types: [ 't1', 't2 ']
			}
		)
	})
	it('LOAD_MORE', () => {
		expect(filters({ page: 1 }, {
			type: LOAD_MORE
		})).toEqual(
			{
				page: 2
			}
		)
	})
	it('APPLY_FILTERS', () => {
		expect(filters(undefined, {
			type: APPLY_FILTERS,
			filterName: 'name1',
			filterType: 'type1',
			filterCountry: 'country1',
			page: 1
		})).toEqual(
			{
				filterName: 'name1',
				filterType: 'type1',
				filterCountry: 'country1',
				page: 1
			}
		)
	})
	it('filters default', () => {
		expect(filters({ filters: [ 'f1', 'f2 ']}, {
			filters: [ 'f1', 'f2 ']
		})).toEqual(
			{
				filters: [ 'f1', 'f2 ']
			}
		)
	})
})