import React, { useState,useRef,useEffect } from 'react';
import ContactPage from '../ContactPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function BrandingAndIdentity() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const brandingTextRef = useRef(null);
  const brandingImageRef = useRef(null);
  const [brandingImageHeight, setbrandingImageHeight] = useState('200px');
  useEffect(() => {
    const handleResize = () => {
      if (brandingTextRef.current && brandingImageRef.current) {
        const textHeight = brandingTextRef.current.clientHeight;
        setbrandingImageHeight(`${textHeight + 60}px`);
      }
    };

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
    <div style={{ marginTop: '86px' }}>
      <div className='borderBottom' style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/design-brand-banner-bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
              <div>
                <p className='bannerHeading'>We Design the Trend</p>
                <p>Simplifying web experience with design since 2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '40px' }}>
        <div className='row imageContainer'>
          <div className='col-md-6 d-flex align-items-center'>
            <div ref={brandingTextRef}>
              <h2>Design that works!</h2>
              <p>A good design is not just defined by the looks and feel but also how it works. We understand your desire for an inviting as well as informative website.</p>
              <p>That is why we first understand your needs on the visual appeal and branding and then combine it with your understanding of client requirements to give you that perfect blend. Ultimately, we deliver attentive service, inspirational ideas, and rewarding results.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='imageDesign' ref={brandingImageRef} style={{ borderRadius: '10px',height:brandingImageHeight, width: '100%' }} src='/Images/Whatwedo/design-brand-image.webp' alt='' />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#ececec', marginTop: '50px', paddingTop: '40px', paddingBottom: '40px', borderBottom:'5px solid #0f0f49' , borderTop:'5px solid #0f0f49'}}>
        <div className='container'>
          <p className='text-center heading'>What we do?</p>
          <p className='text-center'>We take ideas and convert them into extraordinary visuals. With nearly 22 years of web / app and graphic design experience, Fullestop knows what works and what doesn’t. We’re well equipped to handle all sorts of projects ranging from simple brochure site to complex e-commerce site.</p>
          <div className="container mt-5">
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
                  <div className='card' style={{ border: '2px solid #bdbdbd', borderRadius: '10px', minHeight: '280px' }}>
                    <div className='card-body' style={{ padding: '20px' }}>
                      <p style={{ fontSize: '24px', fontWeight: '700' }}>{card.heading}</p>
                      <p>{card.paragraph}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className='container' style={{ marginTop: '50px',marginBottom:'50px' }}>
        <div className='d-flex justify-content-center'>
          <div className='col-md-6'>
            <p className='text-center heading' style={{marginBottom: '0px' }}>Web design services to augment your online presence</p>
          </div>
        </div>
        <div className='row'>
          {data.map((item, index) => (
            <div className='col-md-4' style={{ marginTop: '40px' }} key={index}>
              <div className='card card-body cardDesign' style={{ minHeight: '410px' }}>
                <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '1px' }}>{item.heading}</p>
                <p style={{ fontSize: '24px', fontWeight: '900' }}>design</p>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactPage />
    </div>
  );
}

const data = [
  {
    heading: "User experience",
    paragraph: "We have close to 22 years experience in Web Designing, more than most other Web Designers out there. Our Web Designers have created innumerable Web Design Solutions. We actively work at staying on top of the current technology and with an understanding of how web works - we deliver pixel perfect Ul and UX experience for your Customers."
  },
  {
    heading: "Landing page",
    paragraph: "First impressions are important and this is where our knowledge, research and experience come together to create an impactful strategy, making sure your design elements and user experience are in unison with your marketing goals. Landing pages are among the most powerful conversion tools in marketing realm and if done right, it's the next step. toward a visitor becoming your customer."
  },
  {
    heading: "Responsive web",
    paragraph: "Give your existing website a contemporary look without changing its functionality. Fullestop provides website redesign services to those who are not satisfied with the current look of their websites. We can give your site a refresh which is clean and appealing."
  }
]


const cardData = [
  {
    heading: "Web / App Design",
    paragraph: "We have close to 22 years experience in web / app designing, more than most other web / app designers out there. Our web/app designers have created innumerable web/app design solutions. We actively work at staying on top of the current technology."
  },
  {
    heading: "Website Redesign",
    paragraph: "Give your existing website a contemporary look without changing its functionality. Fullestop provides website re-design services to those who are not satisfied with the current look of their websites. We specialize in giving your site a framework which is fresh, clean, and appealing."
  },
  {
    heading: "Graphic Design",
    paragraph: "Graphic design is not just about image creation. At Fullestop, we consider your target audience to deliver your message using precise infographics, illustrations, and sophisticated layouts that speaks your brand strategy."
  },
  {
    heading: "Logo & Identity",
    paragraph: "Graphic design is not just about image creation. At Fullestop, we consider your target audience to deliver your message using precise infographics, illustrations, and sophisticated layouts that speaks your brand strategy."
  }
]
