import React from 'react';
import moustache from '../assets/moustache-vector.svg';

const Header = () => {
  return (
    <header className='App-header'>
      <img src={moustache} className='App-logo' alt='logo' />
    </header>
  );
};

export default Header;
