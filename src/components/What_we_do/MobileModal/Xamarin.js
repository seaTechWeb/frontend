import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';


export default function Xamarin() {
  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);
  const [imageHeight1, setImageHeight1] = useState('auto');

  const textRef2 = useRef(null);
  const imageRef2 = useRef(null);
  const [imageHeight2, setImageHeight2] = useState('auto');


  useEffect(() => {
    const handleResize = () => {
      if (textRef1.current) {
        setImageHeight1(`${textRef1.current.offsetHeight + 60}px`);
      }
      if (textRef2.current) {
        setImageHeight2(`${textRef2.current.offsetHeight + 60}px`);
      }
    };

    const handleModalShown = () => {
      handleResize();
    };

    window.addEventListener('resize', handleResize);

    const modalElement = document.querySelector('#mobileXamarin');
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

  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#mobileXamarin">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="mobileXamarin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/mobile/modals/Xamarin/xamarin-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>Mobile App Development</p>
                        <p className='bannerHeading' style={{ marginBottom: '0px' }}>Xamarin App Development Company</p>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>We develop efficient mobile applications for the Xamarin Platform.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef1}>
                      <p className='heading'>Xamarin app development
                      services</p>
                      <p>In the era of Xamarin and Xamarin Apps where everything is at the touch of your thumb, businesses can actually take the leverage of this smart technology to market itself prominently and we, FULLESTOP help you with that. Being an iPhone Application Development Company, we offer to build the most enriched and dynamic apps according to the requirement of the client.</p>
                      <p>We believe that a <b>beautifully designed Xamarin App</b> of your business can certainly improve the customer engagement and brand recognition and therefore our services consist of-</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/mobile/modals/Xamarin/extensive-experience-xamarin.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px', paddingBottom: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef2} style={{ borderRadius: '10px', height: imageHeight2, width: "100%" }} src='/Images/Whatwedo/mobile/modals/Xamarin/clutter-free-design.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef2}>
                      <p className='heading'>Clutter-free design with standard compliant code</p>
                      <p>FULLESTOP is a team of brilliant techies who with their skills and knowledge, keep the capacity to convert your concept into an app. We develop apps with clutter-free designs making simple for the users to hit the sweet spots easily, and with standard clean and semantic compliment code so that the application runs smoothly.</p>
                      <p>Knowing the potential of the iOS market, we adopt the leading edge technologies so that businesses can enjoy maximum ROI.</p>
                    </div>
                  </div>
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
