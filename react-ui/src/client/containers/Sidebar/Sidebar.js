import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterText from '../../components/FilterText';
import FilterSelect from '../../components/FilterSelect';
import { fetchAirports, fetchTypes } from '../../redux/actions';
import styles from './Sidebar.sass';

class Sidebar extends Component {
	static propTypes = {
		countries: PropTypes.arrayOf(PropTypes.object),
		types: PropTypes.arrayOf(PropTypes.string),
		onChangeFilter: PropTypes.func,
		onMountComponent: PropTypes.func
	}
	static defaultProps = {
		types: [],
		countries: []
	}
	state = {
		filterName: '',
		filterType: ''
	}
	componentDidMount() {
		const { onMountComponent } = this.props;
		onMountComponent();
	}
	onChangeName = (event) => {
		const filterName = event.currentTarget.value;
		this.setState({
			filterName
		}, () => this.props.onChangeFilter(this.state));
	}
	onChangeType = (event) => {
		const filterType = event.currentTarget.value;
		this.setState({
			filterType
		}, () => this.props.onChangeFilter(this.state));
	}
	onChangeCountry = (event) => {
		const filterCountry = event.currentTarget.value;
		this.setState({
			filterCountry
		}, () => this.props.onChangeFilter(this.state));
	}
	render() {
		const { countries, types } = this.props;
		return (
			<section className={styles.container}>
				<div className={styles.filter}>
					<FilterText
						id='select-filter-name'
						placeholder='Filter by name'
						onChange={this.onChangeName}
					/>
				</div>
				<div className={styles.filter}>
					<FilterSelect
						id='select-filter-type'
						placeholder='Filter by type'
						defaultValue=''
						options={types.map((type) => ({
							value: type,
							text: type
						}))}
						onChange={this.onChangeType}
					/>
				</div>
				<div className={styles.filter}>
					<FilterSelect
						id='select-filter-country'
						placeholder='Filter by country'
						defaultValue=''
						options={countries.map((country) => ({
							value: country.code,
							text: country.name
						}))}
						onChange={this.onChangeCountry}
					/>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	types: state.filters.types,
	countries: state.countries.countries
});

const mapDispatchToProps = dispatch => ({
	onMountComponent: () => dispatch(fetchTypes()),
	onChangeFilter: (filters) => {
		dispatch(fetchAirports(filters));
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar)
