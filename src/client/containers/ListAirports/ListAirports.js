import React from 'react';
import Table from '../../components/Table';

const ListAirports = () => (
	<Table
		columnTitles={['Name', 'Country', 'Type', 'State', 'Continent', 'Size']}
		rowsData={[{
			name: 'name1',
			country: 'country1',
			type: 'type1',
			state: 'state1',
			continent: 'continent1',
			size: 'size1'
		},{
			name: 'name1',
			country: 'country1',
			type: 'type1',
			state: 'state1',
			continent: 'continent1',
			size: 'size1'
		}]}
	/>
);

export default ListAirports;