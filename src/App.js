import React from 'react';

import Box from '@material-ui/core/Box';

import Navbar from './components/layout/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/layout/Footer';

import './App.css';

export default class App extends React.Component {
	render() {
		const Styles = {
			container: {
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				padding: '0',
				overflow: 'hidden'
			},
			footerContainer: {
				backgroundColor: 'green',
				height: '100%',
				width: '100%'
			}
		};

		return (
			<Box style={Styles.container} component="div">
				<Navbar />
				<HomePage />
				<Footer style={Styles.footerContainer} />
			</Box>
		);
	}
}
