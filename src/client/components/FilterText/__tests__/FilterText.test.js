import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterText from '../';
import styles from '../FilterText.sass';

describe('Filter is rendered', () => {
	test('Element exists', () => {
		const filterWrapper = mount(<FilterText />);
		expect(filterWrapper.find(FilterText).length).toBe(1);
	});

	test('FilterText has correct class', () => {
		const filterWrapper = shallow(<FilterText />);
		expect(filterWrapper.hasClass(styles.input)).toBe(true);
	});

	test('FilterText options', () => {
		const onChangeSpy = jest.fn();
		const filterWrapper = shallow(<FilterText onChange={onChangeSpy} />);
		filterWrapper.find('input').simulate('change', { target: { value : 'Text2' }})
		expect(onChangeSpy).toHaveBeenCalled();
	});
});