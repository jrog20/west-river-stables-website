import React from 'react';
// import fieldrogerdrivingwhite from '../assets/images/fieldrogerdrivingwhite.jpeg';
import './HeroSection.css'
import { Button } from './Button';
import '../App.css';

function HeroSection() {
  return (
    // this is where the slideshow will go
    <div className='hero-container'>
      {/* <a href className='image' src={fieldrogerdrivingwhite} /> */}
        {/* <video src={fieldrogerdrivingwhite} autoPlay loop muted /> */}
        {/* <h1>WEST RIVER STABLES</h1> */}
        <div className='hero-btns'>
          {/* buttons currently link to login - need to change to left and right arrow buttons for slideshow */}
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            ARROW LEFT
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            ARROW RIGHT <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
  );
};

export default HeroSection;
