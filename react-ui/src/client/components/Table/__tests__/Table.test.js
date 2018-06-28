import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from '../';
import styles from '../Table.sass';

describe('Table is rendered', () => {
	test('Element exists', () => {
		const wrapper = mount(<Table />);
		expect(wrapper.find(Table).length).toBe(1);
	});
	test('Table has ul with correct class and header li with correct class', () => {
		const wrapper = shallow(<Table />);
		expect(wrapper.find('ul').hasClass(styles.ul)).toBe(true);
		expect(wrapper.find('li').first().hasClass(styles.header)).toBe(true);
	});
	test('Table has lis', () => {
		const rowsData = [
			{
				1: 'Test1'
			},{
				2: 'Test2'
			}
			
		];
		const wrapper = shallow(<Table rowsData={rowsData} />);
		expect(wrapper.find('li').length).toBe(3);
	});
});