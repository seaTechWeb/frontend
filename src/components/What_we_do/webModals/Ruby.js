import React, { useEffect, useRef } from 'react';
import ContactPage from '../../ContactPage';

export default function Ruby() {
  const imageContainer1 = useRef(null);
  const imageContainer2 = useRef(null);
  const textContainer1 = useRef(null);

  const updateImageHeights = () => {
    if (textContainer1.current && imageContainer1.current) {
      const textHeight1 = textContainer1.current.offsetHeight;
      imageContainer1.current.style.height = `${textHeight1 + 60}px`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateImageHeights();
    };

    // Update heights on mount
    updateImageHeights();

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Attach Bootstrap modal event listeners
    const modalElement = document.getElementById('webRuby');
    modalElement.addEventListener('shown.bs.modal', updateImageHeights);
    modalElement.addEventListener('hidden.bs.modal', updateImageHeights);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      modalElement.removeEventListener('shown.bs.modal', updateImageHeights);
      modalElement.removeEventListener('hidden.bs.modal', updateImageHeights);
    };
  }, []);

  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#webRuby">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webRuby" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Ruby/ruby-on-rail-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>Web development services</p>
                        <p className='bannerHeading' style={{ marginBottom: '0px' }}>Ruby on rails development company</p>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>Cloud Ready RoR Apps with Uncompromised Quality and Performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textContainer1}>
                      <p className='heading'>Ruby on rails <br />
                        development services</p>
                      <p>Ruby on Rails has been acknowledged widely for its scalability, versatility and stability - A mature web framework considered to be best suited for Agile Development practices and Rapid Application Development (RAD) ensuring continuous delivery and quick release cycles.</p>
                      <p>As a 24 X 7 salesman, your website has the potential to transform your traditional business. How you drive your online presence has a huge impact on your brand’s ability to attract, engage and retain online customers. But engagement runs deeper than we think. Creating an engaging experience requires understanding the problems different users have to solve during their digital journey. With our vast experience of more than 22 years, we quickly learn and adapt in your use cases, ensuring focus and attention that a high-quality RoR application requires.At Fullestop, we believe in adopting and leveraging innovative approaches and modern development practices to transform your digital presence. We embrace modern workflows with right people, skills and tools to deliver the value effectively and accelerate business results.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageContainer1} style={{ borderRadius: '10px', width:'100%',height:imageContainer1 }} src='/Images/Whatwedo/WebImage/Ruby/ruby-on-rail-development-services.webp' alt='' />
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '60px', paddingBottom: '60px' }}>
                <div className="container" style={{ backgroundColor: '#ececec' }}>
                  <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center">
                      <div>
                        <h2 className="heading mb-4">Ror development</h2>
                        <div className="accordion" id="RubyAccordian">
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
                              <h2 className="accordion-header" id={`RubyHeading${index + 1}`}>
                                <button
                                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#RubyCollapse${index + 1}`}
                                  aria-expanded={index === 0}
                                  aria-controls={`RubyCollapse${index + 1}`}
                                >
                                  <b>{item.title}</b>
                                </button>
                              </h2>
                              <div
                                id={`RubyCollapse${index + 1}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`RubyHeading${index + 1}`}
                                data-bs-parent="#RubyAccordian"
                              >
                                <div className="accordion-body">
                                  <div className="careersview" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {(item.content).map((content, index) => (
                                      <div style={{ marginBottom: '10px', display: 'flex' }} key={index}>
                                        <p className="checkmark">✔  </p><p className="text ms-1">{content}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                      <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="RubyAccordian2">
                        {images.map((image, index) => (
                          <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                            <div
                              id={`RubyCollapse${index + 1}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`RubyHeading${index + 1}`}
                              data-bs-parent="#RubyAccordian2"
                            >
                              <div className="accordion-body" ref={index === 0 ? imageContainer2 : null} style={{ borderRadius: '10px' }}>
                                <img
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

const accordionItems = [
  {
    title: 'Why us',
    content: [
      "22+ Years Of Experience",
      "Delivered from the depth of our world class expertise",
      "A diligent Quality Assurance process.",
      "Expert team – a team that works for the top Brands",
      "Reliable, Robust and Scalable Applications",
      "Mature Work Processes",
      "Flexible Engagement Models",
      "Agile methodology and DevOps",
    ]
  },
  {
    title: 'What we do',
    content: [
      "RoR Web Development",
      "RoR Custom Development",
      "RoR Module Development",
      "RoR Migration",
      "Template Design, Development and Integration",
      "3rd Party Integrations",
      "NoSQL and SQL Integrations",
      "Web Services and APIs",
      "Application Support and Maintenance",
      "Consulting"
    ]
  }
];

const images = [
  {
    jpg: '/Images/Whatwedo/WebImage/CakePHP/cakephp-development-image.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/CakePHP/cakephp-development-image2.webp',
  }
];
