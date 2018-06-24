import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterText.sass'

const FilterText = (props) => (
	<input
		id={props.id}
		type='text'
		className={styles.input}
		onChange={props.onChange}
		placeholder={props.placeholder}
	/>
);

FilterText.propTypes = {
	id: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string
}

export default FilterText;
