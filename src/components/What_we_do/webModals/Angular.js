import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ContactPage from '../../ContactPage';

export default function Angular() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);
  const [imageHeight1, setImageHeight1] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      setImageHeight1(textRef1.current?.offsetHeight || 'auto');
    };

    const handleModalShown = () => {
      handleResize();
    };

    window.addEventListener('resize', handleResize);

    const modalElement = document.querySelector('#webAngular');
    if (modalElement) {
      modalElement.addEventListener('shown.bs.modal', handleModalShown);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (modalElement) {
        modalElement.removeEventListener('shown.bs.modal', handleModalShown);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#webAngular">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webAngular" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Angular/angular-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>Web development services</p>
                        <p className='bannerHeading' style={{marginBottom: '0px' }}>Angular development company</p>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>For the Angular Platform, we create dynamic websites.</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef1}>
                      <p className='heading'>Angular development services</p>
                      <p><b>SeaTech - A Leading Player in Angular Consulting</b></p>
                      <p>In the mobile-centered world of today, firms are more focused on creating applications that can work seamlessly across platforms. This approach is critical if you want to retain your customer who is conversant in multiple platforms. A slight tweak in your strategy and a choice of the best platform can bring you more than your desired results. Key is to choose the perfect web development platform for your company.Angular is one of the best platforms available in the market to build and deploy mobile and desktop web applications. The technology, created and developed by the Angular team at Google, is committed to improving the performance of your applications and consequently, user experience.</p>
                      <p>With Angular, you can overcome problems that are not solved by traditional front-end web technologies. Angular makes your app dreams come true. SeaTech is a leading player in the Angular consulting and implementation market today. We help set the perfect Angular roadmap for you, guide you through the entire implementation process, and stay back to help you derive the maximum benefit out of it.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/WebImage/Angular/We-build-powerful-Website-for-the-Angular-Platform.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px',marginBottom:'60px' }}>
                <div className='d-flex justify-content-center'>
                  <div className='col-md-6'>
                    <p className='text-center heading'>Why choose SeaTech for digital marketing services?</p>
                  </div>
                </div>
                <div className="mt-2">
                  <Swiper
                    onSwiper={setSwiperInstance}
                    spaceBetween={25}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}

                    breakpoints={{
                      0: { slidesPerView: 1 },
                      520: { slidesPerView: 2 },
                      950: { slidesPerView: 3 },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="swiper-container"
                  >
                    {cardData.map((card, index) => (
                      <SwiperSlide key={index} className="swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className='card' style={{ border: '2px solid #bdbdbd', borderRadius: '10px', minHeight: '340px' }}>
                          <div className='card-body' style={{ padding: '20px' }}>
                            <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '0px' }}>{card.heading1}</p>
                            <p style={{ fontSize: '24px', fontWeight: '900' }}>{card.heading2}</p>
                            <p>{card.paragraph}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <ContactPage />
            </div>
            <div className="modal-footer text-center" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn greenButton" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const cardData = [
  {
    heading1: "Angular Implementation",
    heading2: "& Migration",
    paragraph: "If you have never used Angular or are keen to migrate from an older version to the latest one, our Angular team can help you with an end-to-end implementation of the framework. We also migrate all your data from previous versions so as to avoid any disruptions in ongoing work and help you maintain a consistent customer experience.",
  },
  {
    heading1: "Angular",
    heading2: "Consulting",
    paragraph: "Our team at SeaTech is an expert on all versions of Angular. We assess your company's current requirements for mobile and desktop apps and come up with a viable roadmap on how to implement it on Angular. We help you decode the best practices of Angular and organize your project structure to fit well with it",
  },
  {
    heading1: "Angular",
    heading2: "Web Development",
    paragraph: "Angular is the platform of choice for front-end web development. It includes a number of helpful frameworks and plugins that appeal to both designers and developers. At SeaTech, we have an expert team that can help you build faster, high-performing apps with the help of Angular",
  },
  {
    heading1: "Our Angular",
    heading2: "Solutions Range",
    paragraph: "SeaTech has an expert team of professionals who are dedicated to understanding the language of your business and that of technology. We have worked together with a lot of clients across domains on various versions of Angular and hence, are best placed to address your Angular needs.",
  },
  {
    heading1: "Single",
    heading2: "Page Applications",
    paragraph: "We help you build Single Page Applications (SPA) using Angular. SPAS not only lead to easier deployment of applications but also result in faster refreshing of web pages and improved user experience.",
  },
  {
    heading1: "Real-Time",
    heading2: "Application",
    paragraph: "With the help of Angular, we can help set up scalable, real-time applications for your company. These applications are fast, high-performing, secure, and easy to navigate.",
  },
];
