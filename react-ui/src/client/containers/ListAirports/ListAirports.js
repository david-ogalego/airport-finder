import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAirports } from '../../redux/actions';
import Table from '../../components/Table';
import styles from './ListAirports.sass';

function getCountryNameFromAirport(countries, airport) {
	const country = countries.find((country) => airport.iso === country.code);
	if (country) {
		return country.name;
	}
	return '';
}

class ListAirports extends Component {
	static propTypes = {
		airports: PropTypes.arrayOf(PropTypes.object),
		countries: PropTypes.arrayOf(PropTypes.object),
		loadingAirports: PropTypes.bool,
		loadMore: PropTypes.func,
		onMountComponent: PropTypes.func
	}
	static defaultProps = {
		airports: [],
		countries: []
	}
	componentDidMount() {
		const { onMountComponent } = this.props;
		onMountComponent();
	}
	render() {
		const { loadingAirports, airports, countries } = this.props;
		const airportsData = airports.map((airport) => ({
			name: airport.name,
			country: getCountryNameFromAirport(countries, airport),
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
				<button onClick={this.props.loadMore}>Load More</button>
				{loadingAirports ? <div className={styles.spinner} /> : null }
			</section>
		);
	}
}

const mapStateToProps = state => ({
	airports: state.airports.airports,
	loadingAirports: state.airports.loadingAirports,
	countries: state.countries.countries
})

const mapDispatchToProps = dispatch => ({
	onMountComponent: () => dispatch(fetchAirports({})),
	loadMore: () => dispatch(fetchAirports({ getMoreAirports: true })),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListAirports)
