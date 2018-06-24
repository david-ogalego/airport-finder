import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterText from '../../components/FilterText';
import FilterSelect from '../../components/FilterSelect';
import { fetchAirports } from '../../redux/actions';
import styles from './Sidebar.sass';

class Sidebar extends Component {
	static propTypes = {
		onChangeFilter: PropTypes.func
	}
	state = {
		filterName: '',
		filterType: ''
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
	render() {
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
						options={[
							{
								value: 'airport',
								text: 'airport'
							},{
								value: 'heliport',
								text: 'heliport'
							}
						]}
						onChange={this.onChangeType}
					/>
				</div>
			</section>
		);
	}
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
	onChangeFilter: (filters) => {
		dispatch(fetchAirports(filters));
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar)
