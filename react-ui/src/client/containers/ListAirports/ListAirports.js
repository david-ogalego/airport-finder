import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAirports, loadMore } from '../../redux/actions';
import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
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
		hasMoreAirports: PropTypes.bool,
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
		const { airports, countries, hasMoreAirports } = this.props;
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
				{
					hasMoreAirports ?
					<div className={styles.containerButton}>
						<Button onClick={this.props.loadMore} text={'Load More'}/> 
					</div>
					: null
				}
				<Spinner />
				{/* {loadingAirports ? <Spinner /> : null } */}
			</section>
		);
	}
}

const mapStateToProps = state => ({
	airports: state.airports.airports,
	loadingAirports: state.airports.loadingAirports,
	countries: state.countries.countries,
	hasMoreAirports: state.airports.hasMoreAirports
})

const mapDispatchToProps = dispatch => ({
	onMountComponent: () => dispatch(fetchAirports({})),
	loadMore: () => {
		dispatch(loadMore());
		dispatch(fetchAirports({ }));
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListAirports)
