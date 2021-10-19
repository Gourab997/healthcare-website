import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpeg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Carousel id='home' className='' fade>
        <Carousel.Item>
          <div>
            <img
              className='d-block w-100 image-banner'
              src={banner1}
              alt='First slide'
            />

            <Carousel.Caption>
              <h1 className='text-danger'>Emergency</h1>
              <h4 className='text-info'>Just Dial "16333"</h4>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 image-banner'
            src={banner2}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h1 className='text-warning'>24 / 7</h1>
            <h4 className='text-primary'>Open For You</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 image-banner'
            src={banner3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h1 className='text-success'>Close to you</h1>
            <h4>Better Care and Better Understanding.</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
