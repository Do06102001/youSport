import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <div className='hahaha'>
    <Carousel interval={2000}> {/* Đặt interval ở đây, ví dụ: 3000ms = 3 giây */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.yousport.vn/Media/Slides/%C4%91%E1%BA%B7t-%C4%91%E1%BB%99i.jpg?v=2"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.yousport.vn/Media/Slides/wweb-cover-2023.jpg?v=2"
          alt="Second slide"
        />
      </Carousel.Item>      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.yousport.vn/Media/Slides/wweb-cover-black-friday.jpg?v=2"
          alt="thirt slide"
        />
      </Carousel.Item>    </Carousel>
      </div>
  );
};

export default MyCarousel;
