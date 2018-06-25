import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from './components/Nav';
import Sidebar from './containers/Sidebar';
import ListAirports from './containers/ListAirports';
import { fetchCountries } from './redux/actions';
import styles from './App.sass';

class App extends Component {
	static propTypes = {
		countries: PropTypes.arrayOf(PropTypes.object),
		onMountComponent: PropTypes.func
	}
	static defaultProps = {
		countries: []
	}
	componentDidMount() {
		const { onMountComponent } = this.props;
		onMountComponent();
	}
	render() {
		const { countries } = this.props;
		return (
			<div className={styles.container} >
				<Nav title='Airport finder' />
				<Sidebar countries={countries}/>
				<ListAirports countries={countries}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	countries: state.countries.countries
});

const mapDispatchToProps = dispatch => ({
	onMountComponent: () => dispatch(fetchCountries())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
