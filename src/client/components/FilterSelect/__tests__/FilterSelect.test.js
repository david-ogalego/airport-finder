import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterSelect from '../';
import styles from '../FilterSelect.sass';

describe('Filter is rendered', () => {
	test('Element exists', () => {
		const selectWrapper = mount(<FilterSelect />);
		expect(selectWrapper.find(FilterSelect).length).toBe(1);
	});

	test('FilterSelect has correct class', () => {
		const selectWrapper = shallow(<FilterSelect />);
		expect(selectWrapper.hasClass(styles.select)).toBe(true);
	});

	test('FilterSelect options', () => {
		const selectWrapper = shallow(<FilterSelect />);
		expect(selectWrapper.find('option').length).toBe(1);
		const selectWrapperWithOptions = shallow(<FilterSelect options={[{value:'1', text: 'Text1'},{value:'2', text: 'Text2'}]}/>);
		expect(selectWrapperWithOptions.find('option').length).toBe(3);
	});

	test('FilterSelect options', () => {
		const onChangeSpy = jest.fn();
		const selectWrapper = shallow(<FilterSelect onChange={onChangeSpy} />);
		selectWrapper.find('select').simulate('change', { target: { value : 'Text2' }})
		expect(onChangeSpy).toHaveBeenCalled();
	});
});