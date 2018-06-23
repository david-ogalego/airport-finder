import React from 'react';
import Nav from './components/Nav';
import Sidebar from './containers/Sidebar';
import styles from './App.sass';

const App = () => {
    return (
		<div className={styles.container} >
			<Nav />
			<Sidebar />
		</div>
    );
}

export default App;
