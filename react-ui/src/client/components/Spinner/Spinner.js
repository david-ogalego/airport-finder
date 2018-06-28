import React from 'react';
import styles from './Spinner.sass';

const Spinner = () =>
	<React.Fragment>
		<div className={styles.overlay} />
		<div className={styles.spinner} />
	</React.Fragment>

export default Spinner;