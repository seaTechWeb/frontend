import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';

export default function Laravel() {
  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);
  const [imageHeight1, setImageHeight1] = useState('auto');

  const textRef2 = useRef(null);
  const imageRef2 = useRef(null);
  const [imageHeight2, setImageHeight2] = useState('auto');

  const textRef3 = useRef(null);
  const imageRef3 = useRef(null);
  const [imageHeight3, setImageHeight3] = useState('auto');

  const textRef4 = useRef(null);
  const imageRef4 = useRef(null);
  const [imageHeight4, setImageHeight4] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      setImageHeight1(textRef1.current?.offsetHeight || 'auto');
      setImageHeight2(textRef2.current?.offsetHeight || 'auto');
      setImageHeight3(textRef3.current?.offsetHeight || 'auto');
      setImageHeight4(textRef4.current?.offsetHeight || 'auto');
    };

    const handleModalShown = () => {
      handleResize();
    };

    window.addEventListener('resize', handleResize);

    const modalElement = document.querySelector('#webLaravel');
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
      <div data-bs-toggle="modal" className='' data-bs-target="#webLaravel">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webLaravel" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Laravel/laravel-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 ' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div className='d-flex align-self-center' style={{ display: 'flex', alignContent: 'center' }}>
                        <div>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Web development services</p>
                          <p style={{ fontSize: '60px', fontWeight: '900', marginBottom: '0px' }}>Laravel Development Company</p>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Highly-Customized & Feature Rich Laravel Web Development to Empower Your Business to Surge Ahead of the Competitors.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef1}>
                      <p className='heading'>Laravel development
                        services</p>
                      <p>SeaTech, as a Laravel development company offers a complete skill set in the Laravel Customization and Laravel web development. With our conscientious Laravel Developers and well-established development infrastructure we have maintained the best of development standards and meticulously handled complex projects.</p>
                      <p>Our result-driven approach and end-to-end solutions have served many different businesses with the most acquiescent source of platform to put them across with the most effective interface and leverage the communication potential.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Development-Services.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef2} style={{ borderRadius: '10px', height: imageHeight2, width: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Website-Development.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef2}>
                      <p className='heading'>Laravel website development</p>
                      <p>We know how to leverage the web development environment to yield the high-end functionality. While developing a website we deploy optimized techniques and keep it close to our predefined standards and well-established roadmap.</p>
                      <p>SeaTech follows a systematic approach to website development that involves, planning, establishing protocols and dividing the work modules among different developers to realize the benefits of easily manageable codes using the development framework.</p>
                      <p>Our team of proficient Laravel developers has created significant web applications using MVC architecture and applying innovative ideas in different solutions. We develop websites that create value for your business and put them flexibly across to help you get the benefit of re-usability through Laravel.</p>
                      {service.map((item, index) => (
                        <div style={{ display: 'flex' }} key={index}>
                          <p className="checkmark">✔  </p><p className="text ms-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='container ' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef3}>
                      <p className='heading'>Laravel application development</p>
                      <p>SeaTech’s web application development practice addresses a wide range of business needs. Whether it's a content management system or a web-based data interface, our solutions demonstrate all the hallmarks of competence. Our web applications address the specific business requirements, whether it’s a Fortune 500 company or a small start-up.</p>
                      <p>Our developers possess in-depth knowledge of AJAX and other scripting languages that let them deliver outstanding Laravel application development solutions. They deal with the entire idea, interface requirements, system characteristics, functional aspects and other related dimensions of the product till you clearly identify your stipulated requirements.</p>
                      {application.map((item, index) => (
                        <div style={{ display: 'flex' }} key={index}>
                          <p className="checkmark">✔  </p><p className="text ms-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef3} style={{ borderRadius: '10px', height: imageHeight3, width: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Application-Development.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container ' style={{ marginTop: '60px' }}>
                <div className='row imageContainer' >
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef4} style={{ borderRadius: '10px', height: imageHeight4, width: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Custom-Development.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef4}>
                      <p className='heading'>Custom laravel development</p>
                      <p>With its concept based on Ruby Rails and architecture built on MVC, Laravel makes customization process quite easy and affordable. You can tweak or upgrade the aesthetics and functionality of the webpage according to your requirements.</p>
                      <p>SeaTech offers Laravel Customization services for your different application needs. We can convert your existing Laravel application into an upgraded and fully-loaded version that can save tons of your money. Moreover, while delivering a customization solution we make sure that it abides by your requirement set and the updated custom elements are relevant and resourceful to you in the most optimum manner.</p>
                      {custom.map((item, index) => (
                        <div style={{ display: 'flex' }} key={index}>
                          <p className="checkmark">✔  </p><p className="text ms-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{marginTop:'40px'}}>
                <ContactPage/>
              </div>
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

const service = [
  "Laravel Customization",
  "Laravel Web Development",
  "Laravel Based Web CMS",
  "Custom Development of Module",
  "Shopping Website Development",
  "Laravel Component development"
]

const application = [
  "Laravel product development",
  "Maintenance services",
  "Custom Laravel component development",
  "Cross browser compatible applications",
  "Applications with professional design",
]

const custom = [
  "Laravel web development",
  "CMS development",
  "theme development & integration",
  "Component Development",
  "integration configuration and deployment",
  "extension development & integration",
]
