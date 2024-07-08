import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce';


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
      <div style={{ backgroundImage: 'url(./Images/Project/volkswagen/volkswagen-banner-image.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
        <div style={{ backgroundImage: 'url(/Images/Project/adidas/overlay-pattern.png)' }} >
          <div className='container' style={{ paddingTop: '30px' }}>
            <div className='row'>
              <div className='col-md-6 order-2 order-md-1 d-flex align-items-center ' style={{ padding: '20px 2px' }}>
                <div className={`${deviceSize === 1 ? 'text-center' : ''}`}>
                  <img src='/Images/Project/volkswagen/volkswagen-logo.png' alt='Adidas' />
                  <pre style={{ fontSize: '22px', fontWeight: '900', color: 'white', marginTop: '20px' }} >#HTML 5   #CSS 3   </pre>
                  <div className='text-center' style={{ width: '100%' }}>
                    <div className='d-flex justify-content-around'>
                      <Link type="button" className="btn btn-primary btn-lg d-flex justify-content-center align-items-center" to="https://www.volkswagen.ie/en.html" target='_blank' style={{ borderRadius: '34px', width: '191px', height: '70px' }}>Launch project</Link>

                      <Link type="button" className="btn btn-primary btn-lg d-flex justify-content-center align-items-center" to="https://www.fullestop.com/pdf/volkswagen-casestudy.pdf" target='_blank' style={{ borderRadius: '34px', width: '191px', height: '70px' }}>View casestudy</Link>
                    </div>
                  </div>

                </div>
              </div>
              <div className='col-md-6 order-1 order-md-2'>
                <img style={{ maxWidth: '100%' }} src='/Images/Project/volkswagen/volkswagen-image.png' alt='Adidas Project' />
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
              <Link type="button" className="btn btn-primary btn-lg d-flex justify-content-center align-items-center mx-2" to="https://www.volkswagen.ie/en.html" target='_blank' style={{ borderRadius: '34px', width: '191px', height: '70px' }}>Launch project</Link>

              <Link type="button" className="btn btn-primary btn-lg d-flex justify-content-center align-items-center" to="https://www.fullestop.com/pdf/volkswagen-casestudy.pdf" target='_blank' style={{ borderRadius: '34px', width: '191px', height: '70px' }}>View casestudy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className=' container d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <Link type="button" className="btn btn-primary " to="/ukieri">Previous project</Link>
        <button type="button" className="btn btn-primary " disabled>Next project</button>
      </div>

      <div className='d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <img style={{ width: '50%' }} src='/Images/Project/volkswagen/volkswagen-slider-image1.jpg' alt='adidas' />
        <img style={{ width: '50%' }} src='/Images/Project/volkswagen/volkswagen-slider-image2.jpg' alt='adidas' />
      </div>

    </div >
  )
}



