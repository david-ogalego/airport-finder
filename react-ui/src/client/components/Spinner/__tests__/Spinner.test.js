import React from 'react';
import { shallow, mount } from 'enzyme';
import Spinner from '../';
import styles from '../Spinner.sass';

describe('Spinner is rendered', () => {
	test('Element exists', () => {
		const wrapper = mount(<Spinner />);
		expect(wrapper.find(Spinner).length).toBe(1);
	});
	test('Spinner has two divs with correct classes', () => {
		const wrapper = shallow(<Spinner />);
		expect(wrapper.find('div').length).toBe(2);
		expect(wrapper.find('div').first().hasClass(styles.overlay)).toBe(true);
		expect(wrapper.find('div').last().hasClass(styles.spinner)).toBe(true);
	});
});