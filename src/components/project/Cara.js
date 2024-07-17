import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce';
import ContactPage from '../ContactPage';


export default function Cara() {
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
      <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(./Images/Project/cara/caradiamonds-banner-image.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
        <div style={{ backgroundImage: 'url(/Images/Project/adidas/overlay-pattern.png)' }} >
          <div className='container' style={{ paddingTop: '30px' }}>
            <div className='row'>
              <div className='col-md-6 order-2 order-md-1 d-flex align-items-center ' style={{ padding: '20px 2px' }}>
                <div className={`${deviceSize === 1 ? 'text-center' : ''}`}>
                  <img src='/Images/Project/cara/caradiamond-logo.png' alt='Adidas' />
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#HTML</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#CSS</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#JavaScript</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#Magento</p>
                    <p style={{ marginRight: '18px', color: 'whitesmoke', marginTop: '10px', fontSize: '24px', fontWeight: '500' }}>#MySQL</p>
                  </div>
                  <div>
                    <Link type="button" className="btn blueButton" to="https://www.fullestop.com/pdf/caradiamonds-casestudy.pdf" target='_blank' style={{ borderRadius: '10px' }}> View casestudy</Link>
                  </div>

                </div>
              </div>
              <div className='col-md-6 order-1 order-md-2'>
                <img style={{ maxWidth: '100%' }} src='/Images/Project/cara/caradiamond-image.png' alt='Adidas Project' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '30px' }}>
        <div className='row'>
          <div className='col-md-3'>
            <h5>Project Name</h5>
            <p>Cara</p>

            <h5>Website & App</h5>
            <p>Website</p>

            <h5>Categories</h5>
            <p>Custom Jewelry Marketplace</p>
          </div>
          <div className='col-md-9'>
            <p className='more-weight'>Cara Diamonds</p>
            <p>In the realm of authentic diamonds and bespoke jewelry, Cara Diamonds stands as a symbol of individuality, offering an experience that transcends the ordinary act of purchasing jewelry. Crafting this unique experience had its intricacies.</p>

            <p>To deliver exceptional, personalized pieces globally, Cara aimed to bridge the gap between exclusivity and accessibility. The carefully chosen diamonds, renowned for their quality and authenticity, required a platform to showcase their brilliance. Cara envisioned a space where individuals could actively participate in creating their extraordinary pieces.</p>

            <p>To deliver exceptional, personalized pieces globally, Cara aimed to bridge the gap between exclusivity and accessibility. The carefully chosen diamonds, renowned for their quality and authenticity, required a platform to showcase their brilliance. Cara envisioned a space where individuals could actively participate in creating their extraordinary pieces.</p>

            <p>This innovative solution sets Cara Diamonds apart in the competitive jewelry market, making them the preferred choice for those seeking uniqueness and authenticity.</p>

            <p>Navigating the platform is as enchanting as the jewelry itself. The user-friendly design allows users to effortlessly choose stones, metals, and other specifications for their desired piece. Cara Diamonds takes pride in providing exceptional value, offering high-quality bespoke jewelry at prices that make elegance accessible to all.</p>

            <p>Choosing Cara Diamonds is embarking on a journey of self-expression and celebration. It's not just about buying jewelry; it's about collaborating with artisans to craft a piece that mirrors your unique style and commemorates life's most special moments.</p>

            <p>Discover the artistry of personalized jewelry with Cara Diamonds—where every piece is a story waiting to be told.</p>

            <Link type="button" className="btn blueButton" to="https://www.fullestop.com/pdf/caradiamonds-casestudy.pdf" target='_blank' style={{ borderRadius: '10px' }}>View casestudy</Link>
          </div>
        </div>
      </div>

      <div className=' container d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <Link type="button" className="btn blueButton" to="/adidas" >Previous project</Link>
        <Link type="button" className="btn blueButton" to="/fairandhandsome" >Next project</Link>
      </div>

      <div className='d-flex justify-content-between' style={{ marginTop: '60px' }}>
        <img style={{ width: '50%' }} src='/Images/Project/cara/caradiamonds-slider-image1.jpg' alt='adidas' />
        <img style={{ width: '50%' }} src='/Images/Project/cara/caradiamonds-slider-image2.jpg' alt='adidas' />
      </div>
      <ContactPage />
    </div >
  )
}
