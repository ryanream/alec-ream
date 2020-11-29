import React from 'react';
import FadeIn from 'react-fade-in';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='navbar'>
        <div>
          <FadeIn transitionDuration={800}>
            <details>
              <summary className='nav-link'>Navigation</summary>
              <ul className='drop-menu'>
                <li>Here's a link</li>
                <li>Another One</li>
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
    </div>
  );
};

export default Navbar;
