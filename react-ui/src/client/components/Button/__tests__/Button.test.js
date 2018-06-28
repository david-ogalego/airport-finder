import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../';
import styles from '../Button.sass';

describe('Button is rendered', () => {
	test('Element exists', () => {
		const wrapper = mount(<Button />);
		expect(wrapper.find(Button).length).toBe(1);
	});
	test('Button has correct class', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.hasClass(styles.button)).toBe(true);
	});
	test('Button onClick called', () => {
		const onClickSpy = jest.fn();
		const wrapper = shallow(<Button onClick={onClickSpy} />);
		wrapper.find('button').simulate('click');
		expect(onClickSpy).toHaveBeenCalled();
	});
	test('Button has correct text', () => {
		const wrapper = shallow(<Button text={'Test'} />);
		expect(wrapper.text()).toBe('Test');
	});
});