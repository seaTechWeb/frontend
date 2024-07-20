import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';

export default function Node() {
  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);
  const textRef2 = useRef(null);
  const imageRef2 = useRef(null);

  const [imageHeight1, setImageHeight1] = useState('auto');
  const [imageHeight2, setImageHeight2] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      setImageHeight1(textRef1.current?.offsetHeight || 'auto');
      setImageHeight2(textRef2.current?.offsetHeight || 'auto');
    };

    const handleModalShown = () => {
      handleResize();
    };

    window.addEventListener('resize', handleResize);

    const modalElement = document.querySelector('#webNodejs');
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
      <div data-bs-toggle="modal" className='' data-bs-target="#webNodejs">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webNodejs" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Nodejs/nodejs-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>web development services</p>
                        <p className='bannerHeading' style={{ marginBottom: '0px' }}>Node.JS development company</p>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>We build powerful Website for the Node.JS platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef1}>
                      <p className='heading'>Node.js development
                        services</p>
                      <p>Modern businesses are rapidly adapting to the online digital space. Delivering a successful Digital asset is all about vision, planning and quality implementation. It about aligning best practices with your business goal.The face of modern web development is evolving dramatically. From state-less to real-time applications implementing push mechanism over web sockets, digital world has witnessed a remarkable shift in web technologies.</p>
                      <p> <b>Node.js</b>  holds a crucial place in the modern technology stack offering an amazing scalability and performance. With event driven and non-blocking I/O, it’s a great choice for building network based solutions that demand high number of simultaneous connections and an impressive throughput. A modern revolutionary technology offering unique benefits and empowering your Digital strength.</p>
                      <p><b>At SeaTech</b>, we live and breathe technology. With a team of experienced and highly skilled <b>Node.JS developers</b>, we craft powerful applications and ensure that your application architecture is proactively designed to meet future challenges and expansion.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/WebImage/Nodejs/Extensive-Experience-in-Node-JS-Development.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef2} style={{ borderRadius: '10px', height: imageHeight2, width: "100%" }} src='/Images/Whatwedo/WebImage/Nodejs/Nodejs-Web-Development-services-we-offer.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef2}>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Nodejs web development services we offer</p>
                      <p><b>SeaTech is Pro at delivering following Node.JS services:</b></p>
                      {service.map((item, index) => (
                        <div style={{  display: 'flex' }} key={index}>
                          <p className="checkmark" >✔  </p><p className="text ms-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '60px',paddingBottom:'50px' }}>
                <div className="container" style={{ backgroundColor: '#ececec' }}>
                  <div className="row imageContainer" style={{ marginTop: '40px' }}>
                    <div className="col-lg-6 col-xl-7 pe-xl-5">
                      <h2 className="heading mb-4">Our big data solutions</h2>
                      <div className="accordion" id="NodejsAccordian">
                        {accordionItems.map((item, index) => (
                          <div
                            className="accordion-item"
                            key={index}
                            style={{
                              borderTopLeftRadius: index === 0 ? '10px' : '',
                              borderTopRightRadius: index === 0 ? '10px' : '',
                              borderBottomLeftRadius: index === accordionItems.length - 1 ? '10px' : '',
                              borderBottomRightRadius: index === accordionItems.length - 1 ? '10px' : '',
                              overflow: 'hidden',
                            }}
                          >
                            <h2 className="accordion-header" id={`NodejsHeading${index + 1}`}>
                              <button
                                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#NodejsCollapse${index + 1}`}
                                aria-expanded={index === 0}
                                aria-controls={`NodejsCollapse${index + 1}`}
                              >
                                {item.title}
                              </button>
                            </h2>
                            <div
                              id={`NodejsCollapse${index + 1}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`NodejsHeading${index + 1}`}
                              data-bs-parent="#NodejsAccordian"
                            >
                              <div className="accordion-body">
                                <div className="careersview">
                                  <p>{item.content}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                      <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="NodejsAccordian2">
                        {images.map((image, index) => (
                          <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                            <div
                              id={`NodejsCollapse${index + 1}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`NodejsHeading${index + 1}`}
                              data-bs-parent="#NodejsAccordian2"
                            >
                              <div className="accordion-body" style={{ borderRadius: '10px' }}>
                                <img
                                className='imageDesign'
                                  src={image.jpg}
                                  alt="solutons"
                                  loading="lazy"
                                  width="100%"
                                  style={{ border: 'none', borderRadius: '10px', color: 'red' }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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
  );
}

const service = [
  "Node.JS Web Development",
  "Node.JS Customization",
  "Node.JS Module Development",
  "Node.JS Migration",
  "3rd Party Integrations",
  "Web Services and APIs",
  "Node.JS Consulting",
  "NoSQL and SQL Database Integrations",
  "Application Support and Maintenance"
];

const accordionItems = [
  {
    title: 'The DevOps',
    content:
      'Our team is well versed with modern practices and operational philosophies. Our service delivery chain integrates joint collaborations and shared services to seamlessly cover the entire delivery model. Concatenating Development and Operations, we bring together the best of both the worlds at your service.',
  },
  {
    title: 'Commitment, Reliability and Trust',
    content:
      'We work closely with you, from start to finish, offering tailored, one to one services for your specific needs and provide a mature support to ensure long term success for your Digital undertaking. We follow an organized and efficient project management process to track and align the working elements - A Quality process that Delivers.',
  },
  {
    title: 'Clear Milestones, Timelines and Communication',
    content:
      'At SeaTech, Quality is a promise, not an assumption. Contributing to the digital world for more than 19 years, we have focused exclusively on the customer centric solutions. We distinguish you from competitors by ensuring your unique presence and points of difference in the competitive digital market. We maintain an ongoing communication with you to gather all the important information to deliver a successful digital asset.',
  },
  {
    title: 'Preparation, Planning and Process',
    content:
      'Delivering a real value against an opportunity is what matters. We listen to you and design a strategy that works best for your brand and help you achieve better conversion rates. We define a clear path for achieving strategic alignment and goals and rely on a mature and robust process model that ensures efficiency, transparency and agility.',
  },
];

const images = [
  {
    jpg: '/Images/Whatwedo/WebImage/Nodejs/online-doctor-solution.jpg',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Nodejs/nodejs-development-image2.jpg',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Nodejs/nodejs-development-image3.jpg',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Nodejs/nodejs-development-image4.jpg',
  },
];
