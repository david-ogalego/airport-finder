import React from 'react';
import { shallow, mount } from 'enzyme';
import Sidebar from '../';
import FilterText from '../../../components/FilterText';
import FilterSelect from '../../../components/FilterSelect';
import styles from '../Sidebar.sass';

describe('Sidebar is rendered', () => {
	test('Sidebar exists', () => {
		const sidebarWrapper = mount(<Sidebar />);
		expect(sidebarWrapper.find(Sidebar).length).toBe(1);
	});

	test('Sidebar has correct class', () => {
		const sidebarWrapper = shallow(<Sidebar />);
		expect(sidebarWrapper.hasClass(styles.container)).toBe(true);
		expect(sidebarWrapper.find('div.filter').length).toBe(2);
	});

	test('Sidebar has components', () => {
		const sidebarWrapper = shallow(<Sidebar />);
		expect(sidebarWrapper.find(FilterText).length).toBe(1);
		expect(sidebarWrapper.find(FilterSelect).length).toBe(1);
	});
});