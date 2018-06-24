import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.sass';

const Table = (props) => (
	<ul className={styles.ul}>
		<li className={styles.header}>
			{
				props.columnTitles.map((title, index) => <span key={index}>{title}</span>)
			}
		</li>
		{
			props.rowsData.map((data, index) => 
				<li key={index} className={styles.row}>
					{
						Object.values(data).map((columnData, index) => <span key={index}>{columnData}</span>)
					}
				</li>
			)
		}
	</ul>
);

Table.defaultProps = {
	columnTitles: [],
	rowsData: []
}

Table.propTypes = {
	columnTitles: PropTypes.arrayOf(PropTypes.string),
	rowsData: PropTypes.arrayOf(PropTypes.object)
}

export default Table;