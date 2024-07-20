import React, { useEffect, useRef, useState } from 'react';
import ContactPage from '../../ContactPage';

export default function Lamp() {
  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);
  const [imageHeight1, setImageHeight1] = useState('auto');

  const textRef2 = useRef(null);
  const imageRef2 = useRef(null);
  const [imageHeight2, setImageHeight2] = useState('auto');

  const updateImageHeights = () => {
    if (textRef1.current && imageRef1.current) {
      const textHeight1 = textRef1.current.offsetHeight;
      setImageHeight1(`${textHeight1 + 60}px`);
    }
    if (textRef2.current && imageRef2.current) {
      const textHeight2 = textRef2.current.offsetHeight;
      setImageHeight2(`${textHeight2 + 60}px`);
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
    const modalElement = document.getElementById('webLamp');
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
      <div data-bs-toggle="modal" className='' data-bs-target="#webLamp">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webLamp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Lamp/lamp-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>Web development services</p>
                        <p className='bannerHeading' style={{ marginBottom: '0px' }}>LAMP and PHP web development company</p>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>LAMP developers helps you to get the best module for your project</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef1}>
                      <p className='heading'>LAMP and PHP web development services</p>
                      <p>Fullestop offers custom LAMP (Linux, Apache, MySQL, PHP) development solutions to help you with your offshore development, programming and e-commerce requirements.</p>
                      <p>Our team of dedicated LAMP developers helps you to get the best module for your project. We can take an entire project or complete a project at any phase of the development cycle.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px',  width: "100%", height: imageHeight1 }} src='/Images/Whatwedo/WebImage/Lamp/lamp-web-development-services-1.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageRef2} style={{ borderRadius: '10px',width: "100%", height: imageHeight2 }} src='/Images/Whatwedo/WebImage/Lamp/expert-discuss-development.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textRef2}>
                      <p className='heading'>Our technical
                        expertise</p>
                      <p>With an extensive experience in the industry, we know the best of PHP MySQL development and produce unmatchable quality solutions at most affordable prices.</p>
                      <p>Our PHP MySQL portfolio includes enterprise solutions like Ecommerce, online accounting software, community tools, bulletin boards, webmails, web calendar and discussion forums. With intensive knowledge about LAMP technology, our team of LAMP developers builds huge websites with undulating maintenance services.</p>
                      <p>
                        Working on LAMP technology for years, we are proficient in PHP programming, Linux OS, MySQL database server and Apache HTTP servers. Catering to your unique business requirements, we deliver the quality solutions to increase your business ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '60px', paddingBottom: '60px' }}>
                <div className="container" style={{ backgroundColor: '#ececec' }}>
                  <div className="row" style={{ marginTop: '40px' }}>
                    <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center">
                      <div>
                        <h2 className="heading mb-4">LAMP solutions</h2>
                        <div className="accordion" id="LampAccordian">
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
                              <h2 className="accordion-header" id={`LampHeading${index + 1}`}>
                                <button
                                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#LampCollapse${index + 1}`}
                                  aria-expanded={index === 0}
                                  aria-controls={`LampCollapse${index + 1}`}
                                >
                                  <b>{item.title}</b>
                                </button>
                              </h2>
                              <div
                                id={`LampCollapse${index + 1}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`LampHeading${index + 1}`}
                                data-bs-parent="#LampAccordian"
                              >
                                <div className="accordion-body">
                                  <div className="careersview" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    <p>{item.text}</p>
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
                      <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="LampAccordian2">
                        {images.map((image, index) => (
                          <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                            <div
                              id={`LampCollapse${index + 1}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`LampHeading${index + 1}`}
                              data-bs-parent="#LampAccordian2"
                            >
                              <div className="accordion-body" style={{ borderRadius: '10px' }}>
                                <img
                                  src={image.jpg}
                                  alt="solutons"
                                  loading="lazy"
                                  width="100%"
                                  style={{ border: 'none', borderRadius: '10px', color: 'red', height: index === 0 ? imageHeight1 : imageHeight2 }}
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
  )
}


const accordionItems = [
  {
    title: 'Our offerings in LAMP development',
    text: "",
    content: [
      "EHR/EMR applications",
      "Document management system",
      "Event tracking application",
      "E-ticketing system",
      "Shopping cart",
      "CRM application",
      "E-commerce website",
      "Multiple add-ons for Joomla and Virtue mart",
      "Drupal CMS development",
      "Facebook applications",
      "Educational website",
      "Magento Shopping cart",
      "Payment Gateway",
      "Joomla Corporate Websites",
      "WordPress Template development",
      "Social networking, Live broadcasting and Media sharing websites",
    ]
  },
  {
    title: 'Our Technical Expertise',
    text: "The team of LAMP developers at Fullestop has expertise in a wide range of open source technologies such as: Together with most burgeoning LAMP technologies, we are also seasoned with Joomla, Magento, WordPress, OSCommerce, ZenCart and Perl development tools. Fullestop offers various LAMP development services which help our clients to meet their specific business needs.",
    content: [
      "Linux, Apache, MySQL PHP",
      "AJAX, jQuery, CSS/CSS3",
      "OpenX, PHPBB, HTML/XHTML",
      "Versions of PHP (7.3)",
      "Zend, Symfony, CodeIgniter (CI), YII, CakePHP, Laravel",
      "Drupal, Wordpress, Joomla, Magento",
      "Prototype, Yahoo UI Library",
      "MySQL 5.x, PostgreSQL",
    ]
  },
  {
    title: "Why Fullestop for LAMP Development?",
    text: "If you are looking out for LAMP Development Services or have any queries regarding LAMP Development then get in touch with us.",
    content: [
      "Cost-effective LAMP solutions within stipulated time",
      "Latest technology used for LAMP development",
      "Best hardware and software infrastructure",
      "Technical expertise in multiple technologies",
      "Smooth deployment and affordable hosting services",
      "100% client satisfaction",
      "Brief reporting and complete monitoring of the process",
      "Talented pool of LAMP expert to choose from",
      "Dedicated LAMP Developer available on Phone, Email and IM",
      "We deliver appropriate LAMP solutions after thorough assessment",
    ]
  }
];

const images = [
  {
    jpg: '/Images/Whatwedo/WebImage/Lamp/online-doctor-solution.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Lamp/our-technical-expertise-development.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Lamp/lamp-development-image.webp',
  }
];
