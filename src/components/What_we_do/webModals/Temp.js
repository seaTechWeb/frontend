import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import the main Swiper CSS
import SwiperCore, { Autoplay } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const PythonLibraries = () => {
  const libraries = [
    { src: 'https://cdn.fullestop.com/images/pandas-logo.svg', alt: 'Pandas', name: 'Pandas' },
    { src: 'https://cdn.fullestop.com/images/numPy-logo.svg', alt: 'Numpy', name: 'Numpy' },
    { src: 'https://cdn.fullestop.com/images/matplotlib-logo.svg', alt: 'Matplotlib', name: 'Matplotlib' },
    { src: 'https://cdn.fullestop.com/images/scikit-logo.svg', alt: 'Scikit-Learn', name: 'Scikit-Learn' },
    { src: 'https://cdn.fullestop.com/images/scipy-logo.svg', alt: 'Scipy', name: 'Scipy' },
    { src: 'https://cdn.fullestop.com/images/nltk-logo.svg', alt: 'NLTK', name: 'NLTK' },
    { src: 'https://cdn.fullestop.com/images/tensorflow-logo.svg', alt: 'TensorFlow', name: 'TensorFlow' },
    { src: 'https://cdn.fullestop.com/images/keras1-logo.svg', alt: 'Keras', name: 'Keras' },
    { src: 'https://cdn.fullestop.com/images/theano-logo.svg', alt: 'Theano', name: 'Theano' },
    { src: 'https://cdn.fullestop.com/images/scrapy-logo.svg', alt: 'Scrapy', name: 'Scrapy' },
  ];

  return (
    <div className="pt-2 pt-md-4">
      <div className="container">
        <h2 className="heading text-start text-md-center mb-4">Python libraries and frameworks We Use</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          speed={2000} // Adjust this value to control the speed of the animation
          autoplay={{
            delay: 1, // Set delay to 1ms to create smooth continuous movement
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {libraries.map((library, index) => (
            <SwiperSlide key={index}>
              <div className="box-card-layout" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <figure>
                  <img src={library.src} alt={library.alt} loading="lazy" />
                </figure>
                <strong>{library.name}</strong>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PythonLibraries;
