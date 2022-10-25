import React from 'react';
import { Carousel } from 'react-bootstrap';
import FirstSlide from './firstslide.png';
import SecondSlide from './second.png';
import ThirdSlide from './thirdslide.png';

const carousal = () => {
  return (
    <div><Carousel  >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={FirstSlide}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={SecondSlide}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={ThirdSlide}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel></div>
  )
}

export default carousal