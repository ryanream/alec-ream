import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Body from '../components/Body';

const Home = () => {
  return (
    <div className='App'>
      <Header />
      <div className='spacer'></div>

      <Navbar />
      <Body />
    </div>
  );
};

export default Home;
