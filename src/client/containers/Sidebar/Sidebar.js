import React from 'react';
import FilterText from '../../components/FilterText';
import FilterSelect from '../../components/FilterSelect';
import styles from './Sidebar.sass';

const Sidebar = () => (
	<section className={styles.container}>
		<div className={styles.filter}>
			<FilterText
				id='select-filter-name'
				placeholder='Filter by name' />
		</div>
		<div className={styles.filter}>
			<FilterSelect
				id='select-filter-type'
				placeholder='Filter by type'
				options={[
					{
						value: '1',
						text: 'tipo1'
					},{
						value: '2',
						text: 'tipo2'
					}
				]}
			/>
		</div>
	</section>
);

export default Sidebar;
