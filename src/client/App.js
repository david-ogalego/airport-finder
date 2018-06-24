import React from 'react';
import Nav from './components/Nav';
import Sidebar from './containers/Sidebar';
import ListAirports from './containers/ListAirports';
import styles from './App.sass';

const App = () => {
    return (
		<div className={styles.container} >
			<Nav />
			<Sidebar />
			<ListAirports />
		</div>
    );
}

export default App;
