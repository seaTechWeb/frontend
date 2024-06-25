import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export default function ClientSpotlight() {
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
  console.log(deviceSize)
  return (
    <section id='clients-spotlight' style={{ paddingTop: '90px' }}>
      <div className='container'>
        <h1 className='text-center more-weight' >CLIENT SPOTLIGHT</h1>
        <div className='row'>
          <div className='col-md-3'>
            <div style={{ height: '250px', width: '250px', border: '5px solid blue', borderRadius: '125px' }}>
              <div className='d-flex justify-content-center align-self-center' style={{ height: '240px', width: '240px', border: '15px solid black', borderRadius: '125px' }}>
                <div data-bs-toggle="modal" className='d-flex justify-content-center align-self-center' data-bs-target="#companyAdidas">
                  <img className='d-flex justify-content-center align-self-center client-img' style={{ width: '100%', height: '100%' }} src='/Images/Feature client/adidas-logo.webp' alt='Adidas' />
                </div>
                <div className="modal fade" id="companyAdidas" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='row'>
                          <div className='col-md-6 d-flex justify-content-center ' style={{ backgroundColor: 'yellow', height: 'calc(100vh - 160px)' }}>
                            <div className='align-self-center'>

                              {/* start */}
                              <div id="myCarousel" className="carousel slide mb-4 " data-bs-ride="carousel" data-bs-theme="light" style={{ width: '100%', margin: 'auto' }}>
                                <div className="carousel-indicators">
                                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="active" aria-label="Slide 2" aria-current="true"></button>
                                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className="" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item">
                                    <img src="/Images/Feature client/inner image/adidas-image.webp" className="d-block w-100" alt="Slide 1" style={{ height: '400px', width: '90%' }} />
                                  </div>
                                  <div className="carousel-item active">
                                    <img src="/Images/Feature client/inner image/adidas-image2.webp" className="d-block w-100" alt="Slide 2" style={{ height: '400px',  width: '90%' }} />
                                  </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon mx-3" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div>
                              {/* end */}


                            </div>
                          </div>
                          <div className='col-md-6' style={{ backgroundColor: 'red' }}>

                          </div>
                        </div>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

