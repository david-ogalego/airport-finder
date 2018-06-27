import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.sass';

const Button = (props) => <button className={styles.button} onClick={props.onClick}>{props.text}</button>;

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string
};

export default Button;