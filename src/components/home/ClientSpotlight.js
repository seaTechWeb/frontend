import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Adidas from './ClientModal/Adidas';
import Cara from './ClientModal/Cara';
import Volkswagen from './ClientModal/Volkswagen';
import Ukieri from './ClientModal/Ukieri';

export default function ClientSpotlight() {
  // eslint-disable-next-line
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
    <section id='clients-spotlight' style={{ paddingTop: '90px' }}>
      <div className='container'>
        <h1 className='text-center more-weight' >CLIENT SPOTLIGHT</h1>
        <div className='row d-flex justify-content-between ' style={{marginTop:'40px'}}>
          <div className='col-md-3 d-flex justify-content-center mt-3'>
            <Adidas/>
          </div>
          <div className='col-md-3 d-flex justify-content-center mt-3'>
            <Cara/>
          </div>
          <div className='col-md-3 d-flex justify-content-center mt-3'>
            <Volkswagen/>
          </div>
          <div className='col-md-3 d-flex justify-content-center mt-3'>
            <Ukieri/>
          </div>
        </div>
      </div>
    </section>
  );
}

