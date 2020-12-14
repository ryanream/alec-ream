import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Navbar = () => {
	return (
		<Router>
			<div className='nav-container'>
				<div className='navbar'>
					<div>
						<FadeIn transitionDuration={800}>
							<details>
								<summary className='nav-link'>Navigation</summary>
								<ul className='drop-menu'>
									<li>Contact </li>
									<li>Resume </li>
									<li>And a 3rd</li>
								</ul>
							</details>
						</FadeIn>
					</div>
					<div>
						<FadeIn transitionDuration={800}>
							<a className='nav-link' href=''>
								Résumé
							</a>
						</FadeIn>
					</div>
				</div>
				<div className='nav-border'></div>
			</div>{' '}
		</Router>
	);
};

export default Navbar;
