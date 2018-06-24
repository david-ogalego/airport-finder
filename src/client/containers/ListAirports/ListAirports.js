import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAirports } from '../../redux/actions';
import Table from '../../components/Table';
import styles from './ListAirports.sass';

class ListAirports extends Component {
	static propTypes = {
		airports: PropTypes.arrayOf(PropTypes.object),
		loadingAirports: PropTypes.bool,
		onMountComponent: PropTypes.func
	}
	static defaultProps = {
		airports: []
	}
	componentDidMount() {
		const { onMountComponent } = this.props;
		onMountComponent();
	}
	render() {
		const { loadingAirports, airports } = this.props;
		if (loadingAirports) return 'loading';
		const airportsData = airports.map((airport) => ({
			name: airport.name,
			country: airport.iata,
			type: airport.type,
			state: airport.status,
			continent: airport.continent,
			size: airport.size
		}))
		return(
			<section className={styles.container}>
				<Table
					columnTitles={['Name', 'Country', 'Type', 'State', 'Continent', 'Size']}
					rowsData={airportsData}
				/>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	airports: state.airports.airports,
	loadingAirports: state.airports.loadingAirports
})

const mapDispatchToProps = dispatch => ({
	onMountComponent: () => dispatch(fetchAirports({}))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListAirports)
