import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../static/images/plane.png'
import styles from './Nav.sass';

const Nav = (props) =>
	<nav className={styles.container}>
		<img className={styles.logo} src={logo} />
		<span className={styles.title}>{props.title}</span>
	</nav>;

Nav.propTypes = {
	title: PropTypes.string
}

export default Nav;
