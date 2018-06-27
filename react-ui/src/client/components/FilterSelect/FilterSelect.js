import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterSelect.sass';

const FilterSelect = (props) => (
	<select id={props.id} className={styles.select} onChange={props.onChange}>
		<option value={props.defaultValue} defaultValue>{props.placeholder}</option>
		{
			props.options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)
		}
	</select>
);

FilterSelect.defaultProps = {
	options: []
};

FilterSelect.propTypes = {
	id: PropTypes.string,
	defaultValue: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string,
		value: PropTypes.string
	}))
}

export default FilterSelect;
