import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import './HeroSection.css'

import rainbow from '../assets/images/rainbow.jpeg';
import driving2012 from '../assets/images/driving2012.jpeg';
import studentjumping from '../assets/images/studentjumping.jpeg';

export class BootstrapCarousel extends Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      setIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  render() {  
    return (  
      // <div style={{ display: 'block', width: 700, padding: 30 }}>
      <div className='container-fluid'>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active my__carousel_main"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="my__carousel_main"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="my__carousel_main"></li>
          </ol>
            <Carousel.Item style={{'height': "800px"}}>
              <img style={{'height': "800px",
                'background-size': "cover",
                'background-position': "center"}}
                className="d-block w-100 .active"
                // className=".hero-container"
                // src={'assets/images/driving2012.jpeg'}/>
                src={studentjumping}
                alt='Student Jumping'/>
              <Carousel.Caption>
                <h3>First Caption </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': "800px"}}>
              <img style={{'height': "800px",
                'background-size': "cover",
                'background-position': "center"}}
                className="d-block w-100"
                // className=".hero-container"
                src={rainbow}
                alt='Rainbow'/>
              <Carousel.Caption>
                <h3>Second Caption</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': "800px"}}>
              <img style={{'height': "800px",
                'background-size': "cover",
                'background-position': "center"}}
                className="d-block w-100"
                // className=".hero-container"
                src={driving2012}
                alt='Driving'/>
              <Carousel.Caption>
                <h3>Third Caption</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default BootstrapCarousel;