import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce';
import ContactPage from '../ContactPage';


export default function FairAndHandsome() {
  const [deviceSize, setDeviceSize] = useState(getDeviceSize(window.innerWidth));

  function getDeviceSize(width) {
    if (width < 700) {
      return 1;
    } else {
      return 2;
    }
  }

  useEffect(() => {

    const handleResize = debounce(() => {
      setDeviceSize(getDeviceSize(window.innerWidth));
    }, 300);

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  return (
    <div style={{ marginTop: '86px' }}>
      <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(./Images/Project/fair/fairandhandsome-banner-image.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
        <div style={{ backgroundImage: 'url(/Images/Project/adidas/overlay-pattern.png)' }} >
          <div className='container' style={{ paddingTop: '30px' }}>
            <div className='row'>
              <div className='col-md-6 order-2 order-md-1 d-flex align-items-center ' style={{ padding: '20px 2px' }}>
                <div className={`${deviceSize === 1 ? 'text-center' : ''}`}>
                  <img src='/Images/Project/fair/fairandhandsome-logo.png' alt='Adidas' />
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#HTML</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#CSS</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#JavaScript</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}></p>
                  </div>
                  <div>
                    <Link type="button" className="btn blueButton" to="https://www.fullestop.com/pdf/caradiamonds-casestudy.pdf" target='_blank' style={{ borderRadius: '10px' }}> View casestudy</Link>
                  </div>

                </div>
              </div>
              <div className='col-md-6 order-1 order-md-2'>
                <img style={{ maxWidth: '100%' }} src='/Images/Project/fair/fairandhandsome-image.png' alt='Fair and Handsome Project' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '30px' }}>
        <div className='row'>
          <div className='col-md-3'>
            <h5>Project Name</h5>
            <p>Fair and Handsome</p>

            <h5>Website & App</h5>
            <p>Website</p>

            <h5>Categories</h5>
            <p>Online Ecommerce store</p>
          </div>
          <div className='col-md-9'>
            <p className='more-weight'>Fair and Handsome</p>
            <p>In 2005, Fair And Handsome made a significant impact on the skincare landscape by introducing the first-ever cream exclusively crafted for men, ushering in a new era in Men’s Grooming beyond conventional shaving routines. This milestone was achieved through meticulous research, understanding the distinct needs of men's skin compared to women's.</p>

            <p>Recognizing the unique experiences faced by men who were limited to using skincare products designed for women, Fair And Handsome embraced innovation. The launch of the Fair and Handsome online e-commerce platform emerged as a customer-centric solution, providing men with a dedicated space to explore products for achieving healthy and radiant skin.</p>

            <p>Fair and Handsome's user-centric approach is rooted in the understanding that the texture of men’s skin is unique, necessitating a tailored buying experience. Now, users can confidently embrace their handsome look without resorting to skincare products designed for women. The website not only simplifies the shopping experience but also champions the cause of Men’s Grooming.</p>

            <p>With endorsements from iconic celebrities like Shahrukh Khan, Hrithik Roshan, Vidyut Jamwal, Kartik Aryan, and Salman Khan, Fair And Handsome stands as a testament to effective skincare solutions for men, solidifying its online presence. Step into the Men’s Grooming revolution with Fair And Handsome, where being fair and handsome isn't just about appearance—it's a lifestyle choice.</p>
          </div>
        </div>
      </div>

      <div className=' container d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <Link type="button" className="btn blueButton " to="/cara" >Previous project</Link>
        <Link type="button" className="btn blueButton " to="/ukieri" >Next project</Link>
      </div>

      <div className='d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <img style={{ width: '50%' }} src='/Images/Project/fair/fairandhandsome-slider-image1.jpg' alt='Fair and Handsome' />
        <img style={{ width: '50%' }} src='/Images/Project/fair/fairandhandsome-slider-image2.jpg' alt='Fair and Handsome' />
      </div>
      <ContactPage />
    </div >
  )
}


