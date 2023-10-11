import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
          "This is one of the most attractive food delivering services out
          there. The service is really good for a business at such early stage.
          I expect a lot from this service in the future."
        </p>
        <div className=' slider__content d-flex align-items-center gap-3 '>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Andrei Ionut</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          "This is one of the most attractive food delivering services out
          there. The service is really good for a business at such early stage.
          I expect a lot from this service in the future."
        </p>
        <div className='slider__content d-flex align-items-center gap-3 '>
          <img src={ava02} alt='avatar' className=' rounded' />
          <h6>Mihaela Andreea</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          "This is one of the most attractive food delivering services out
          there. The service is really good for a business at such early stage.
          I expect a lot from this service in the future.!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3 '>
          <img src={ava03} alt='avatar' className=' rounded' />
          <h6>Stefan Alex</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
