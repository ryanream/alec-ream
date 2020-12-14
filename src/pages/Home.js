import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Resume from './Resume';
import Contact from './Contact';

const Home = () => {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='spacer'></div>
				<Navbar />
				<Body />

				<Footer />
			</div>
		</Router>
	);
};

export default Home;
