import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../';
import styles from '../Nav.sass';

describe('Nav is rendered', () => {
	test('Element exists', () => {
		const navWrapper = mount(<Nav />);
		expect(navWrapper.find(Nav).length).toBe(1);
	});

	test('Nav has correct class', () => {
		const navWrapper = shallow(<Nav />);
		expect(navWrapper.hasClass(styles.container)).toBe(true);
	});
});