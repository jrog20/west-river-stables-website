import React from 'react';
import rainbow from '../assets/images/rainbow.jpeg';
import './Home.css'

function Home() {
  return (
    <div className='background-image' style={{ backgroundImage: `url(${rainbow})` }} alt="Horse">
    </div>
  );
};

export default Home;
