import React from "react";
import { Carousel } from "react-bootstrap";
import FirstSlide from './about.png';
import SecondSlide from './contact.png';
import ThirdSlide from './locatin.png';

class HomePage extends React.Component{
 
    render(){
      
        return(
            <Carousel style={{width: '1280px'}} >
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
          </Carousel>
        );
    }
}
export default HomePage;