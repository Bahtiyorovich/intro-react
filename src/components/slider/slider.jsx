// Slider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'swiper/css';
import 'slick-carousel/slick/slick-theme.css';
import { slideData } from '../../constants/data';

const SimpleSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    loop: true,
    dots: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings}>
      {slideData.map(slide =>(
        <div key={slide.title}>
          <div className='flex items-center justify-start w-[100vw] h-[80vh]'>
            <img src={slide.image} alt={slide.title} className='w-1/2 h-3/2'/>
            <div>
              <h3 className='text-8xl font-semibold mb-8'>{slide.title}</h3>
              <p className='text-slate-500'>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
