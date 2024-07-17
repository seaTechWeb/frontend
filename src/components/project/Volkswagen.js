import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce';
import ContactPage from '../ContactPage';


export default function Volkswagen() {
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
      <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(./Images/Project/volkswagen/volkswagen-banner-image.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
        <div style={{ backgroundImage: 'url(/Images/Project/adidas/overlay-pattern.png)' }} >
          <div className='container' style={{ paddingTop: '30px' }}>
            <div className='row'>
              <div className='col-md-6 order-2 order-md-1 d-flex align-items-center ' style={{ padding: '20px 2px' }}>
                <div className={`${deviceSize === 1 ? 'text-center' : ''}`}>
                  <img src='/Images/Project/volkswagen/volkswagen-logo.png' alt='Volkswagen' />
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#MySQL</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#HTML 5</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#JavaScript</p>
                  </div>
                  <div>
                    <div>
                      <Link type="button" className="btn blueButton" to="https://www.volkswagen.ie/en.html" target='_blank' style={{ borderRadius: '10px', marginRight: '20px' }}>Launch project</Link>

                      <Link type="button" className="btn blueButton" to="https://www.fullestop.com/pdf/volkswagen-casestudy.pdf" target='_blank' style={{ borderRadius: '10px' }}>View casestudy</Link>
                    </div>
                  </div>

                </div>
              </div>
              <div className='col-md-6 order-1 order-md-2'>
                <img style={{ maxWidth: '100%' }} src='/Images/Project/volkswagen/volkswagen-image.png' alt='Volkswagen Project' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '30px' }}>
        <div className='row'>
          <div className='col-md-3'>
            <h5>Project Name</h5>
            <p>Volkswagen</p>

            <h5>Website & App</h5>
            <p>Website</p>

            <h5>Categories</h5>
            <p>Online Automotive Platform</p>
          </div>
          <div className='col-md-9'>
            <p className='more-weight'>Volkswagen</p>
            <p>Step into the world of Volkswagen, where the journey—from exploration to ownership—is met with innovation and commitment. The dedication to providing customers with a seamless online experience reflects a responsive approach, creating a user-friendly portal tailored to your needs.</p>

            <p>Volkswagen's leadership in all-electric cars is rooted in your trust, enabling us to deliver vehicles with zero emissions and a net carbon-neutral impact, contributing to a sustainable future.</p>

            <p>Bid farewell to the Volkswagen Passat in the Irish market and welcome the Arteon, a premium fastback boasting refined design and the latest technology. At Volkswagen, it's more than driving; it's about creating a community of confident and informed drivers. Navigate the road ahead, filled with innovation, sustainability, and a commitment to driving pleasure with Volkswagen.</p>

            <p>With Volkswagen—let's drive towards a better tomorrow together!</p>

            <div className='d-flex '>
              <Link type="button" className="btn blueButton" to="https://www.volkswagen.ie/en.html" target='_blank' style={{ borderRadius: '10px',marginRight:'20px'}}>Launch project</Link>

              <Link type="button" className="btn blueButton" to="https://www.fullestop.com/pdf/volkswagen-casestudy.pdf" target='_blank' style={{ borderRadius: '10px'}}>View casestudy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className=' container d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <Link type="button" className="btn blueButton " to="/ukieri">Previous project</Link>
        <button type="button" className="btn blueButton " disabled>Next project</button>
      </div>

      <div className='d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <img style={{ width: '50%' }} src='/Images/Project/volkswagen/volkswagen-slider-image1.jpg' alt='Volkswagen' />
        <img style={{ width: '50%' }} src='/Images/Project/volkswagen/volkswagen-slider-image2.jpg' alt='Volkswagen' />
      </div>
      <ContactPage/>
    </div >
  )
}



