import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block"  style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/dgH8ZtF/heather-barnes-1p-JLk-DYasf-Y-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
       style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/dgH8ZtF/heather-barnes-1p-JLk-DYasf-Y-unsplash.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block" style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/dgH8ZtF/heather-barnes-1p-JLk-DYasf-Y-unsplash.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;