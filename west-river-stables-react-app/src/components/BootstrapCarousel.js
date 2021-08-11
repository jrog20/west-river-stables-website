import React, { Component } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import rainbow from '../assets/images/rainbow.jpeg';
import driving2012 from '../assets/images/driving2012.jpeg';
import studentjumping from '../assets/images/studentjumping.jpeg';

export class BootstrapCarousel extends Component {  
  render() {  
    return (  
      <div>
        <div className='container-fluid'>
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div className="col-sm-12 btn btn-warning">
              This is my Bootstrap Carousel
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <Carousel>
            <Carousel.Item style={{'height':"300px"}}>
              <img style={{'height':"300px"}}
                className="d-block w-100 active"
                // src={'assets/images/driving2012.jpeg'}/>
                src={studentjumping}/>
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}}>
              <img style={{'height':"300px"}}
              className="d-block w-100"
              src={rainbow}/>
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}}>
              <img style={{'height':"300px"}}
                className="d-block w-100"
                src={driving2012}/>
              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default BootstrapCarousel;