import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BookCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    {
      url: "https://www.buybooksindia.com/assets/images/banner/home/BBI-author-banner.jpg",
      alt: "Book 1"
    },
    {
      url: "https://www.buybooksindia.com/assets/images/banner/home/Bestseller-Books.jpg",
      alt: "Book 2"
    },
    {
      url: "https://www.buybooksindia.com/assets/images/banner/home/BBI-children-and-adult.jpg",
      alt: "Book 3"
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900">
      <div className="carousel-container m-0 p-0">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.alt} className="carousel-image w-full h-auto block m-0 p-0" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BookCarousel;
