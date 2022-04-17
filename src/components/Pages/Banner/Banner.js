import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block"  style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/2h8VMwd/garrett-parker-Dlk-F4-db-COU-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption>

      <h1 style={{color: "pink", fontSize:'60px',marginBottom:"260px"}}>Tour De Vacation</h1>
      <h3 style={{color: "black", fontSize:'60px'}}>The mountain is calling...........</h3>
      <p> A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area,</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
       style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/txXBcF5/anders-jilden-c-Yr-MQA7a3-Wc-unsplash.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      
    <h1 style={{color: "white", fontSize:'60px',marginBottom:"260px"}}>Tour De Vacation</h1>
      <h3 style={{color: "red", fontSize:'60px'}}>The evening is calling.............</h3>
      <p>Evening is the period of a day from the end of the afternoon to the beginning of night. The exact times when evening begins and ends depend on location, time of year</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block" style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/mX9jqcg/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      
    <h1 style={{color: "black", fontSize:'60px',marginBottom:"260px"}}>Tour De Vacation</h1>
      <h3 style={{color: "blue", fontSize:'60px'}}>The sea is calling...........</h3>
      <p>
In terms of geography, seas are smaller than oceans and are usually located where the land and ocean meet. Typically, seas are partially enclosed by land. Seas are found</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;