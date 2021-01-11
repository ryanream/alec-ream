import React from 'react';

import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		// <Router>
		<div className='nav-container'>
			<div className='navbar'>
				<div>
					<FadeIn transitionDuration={800}>
						<details>
							<summary className='nav-link'>Navigation</summary>
							<ul className='drop-menu'>
								<Link to='/contact'>
									<li>Contact </li>
								</Link>

								<Link to='/'>
									<li>Home </li>
								</Link>
							</ul>
						</details>
					</FadeIn>
				</div>
				<div>
					<FadeIn transitionDuration={800}>
						<div className='nav-menu'>
							<a className='nav-link' href='/contact'>
								Contact
							</a>{' '}
							<a className='nav-link' href='/resume'>
								Résumé
							</a>
						</div>
					</FadeIn>
				</div>
			</div>
			<div className='nav-border'></div>
		</div>
		// </Router>
	);
};

export default Navbar;
