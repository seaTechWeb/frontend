import React, { useEffect, useRef } from 'react';
import ContactPage from '../../ContactPage';

export default function Microsoft() {
  const imageContainer1 = useRef(null);
  const imageContainer2 = useRef(null);
  const textContainer1 = useRef(null);
  const textContainer2 = useRef(null);

  const updateImageHeights = () => {
    if (textContainer1.current && imageContainer1.current) {
      const textHeight1 = textContainer1.current.offsetHeight;
      imageContainer1.current.style.height = `${textHeight1 + 60}px`;
    }
    if (textContainer2.current && imageContainer2.current) {
      const textHeight2 = textContainer2.current.offsetHeight;
      imageContainer2.current.style.height = `${textHeight2 + 60}px`;
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
    const modalElement = document.getElementById('webMicrosoft');
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
      <div data-bs-toggle="modal" data-bs-target="#webMicrosoft">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webMicrosoft" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Microsoft/microsoft-asp-dotnet-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>Web development services</p>
                        <p className='bannerHeading' style={{ marginBottom: '0px' }}>Asp .Net development company</p>
                        <p style={{ fontSize: '18px', marginBottom: '0px' }}>ASP.NET web development services with optimum quality standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center' >
                    <div ref={textContainer1}>
                      <p className='heading'>Asp .net <br /> development services</p>
                      <p>Burning desires to innovate and probably rise from the middling standards are some of the reasons to explain why SeaTech has always been an ardent supporter of technology. Technologies from Microsoft – a world leader in developing new technologies have served as a benchmark of quality.</p>
                      <p>This brings us to ASP.NET - a set of Web application development technologies from Microsoft that enables programmers to build dynamic web sites, web applications, and XML web services. And needless to say SeaTech is an avid ASP.NET user.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageContainer1} style={{ borderRadius: '10px', width: '100%', height: 'auto' }} src='/Images/Whatwedo/WebImage/Microsoft/microsoft-asp-dotnet-services.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='card cardDesign'>
                      <div className='card-body'>
                        <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '0' }}>Reusable</p>
                        <p style={{ fontSize: '24px', fontWeight: '900' }}>Software Components</p>
                        <p>A library of 100+ pre-assembled, reusable software components such as GUI controls and security model objects.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card cardDesign'>
                      <div className='card-body'>
                        <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '0' }}>Reusable</p>
                        <p style={{ fontSize: '24px', fontWeight: '900' }}>Engineering Tools</p>
                        <p>Support migration, database and design components for quick and high-quality ASP.Net solutions.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card cardDesign'>
                      <div className='card-body'>
                        <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '0' }}>Reusable</p>
                        <p style={{ fontSize: '24px', fontWeight: '900' }}>Architecture</p>
                        <p>“Solution Blueprints” that solve the common problems with business domains, technology domains and server domains.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row'>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={imageContainer2} style={{ borderRadius: '10px', width: '100%', height: 'auto' }} src='/Images/Whatwedo/WebImage/Microsoft/talent-and-technical-prowess-make-the-winning-combination.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={textContainer2}>
                      <p className='heading'>Talent and technical prowess make the winning combination!</p>
                      <p>We do not blow our own trumpet, our credentials speak for themselves. With numerous ASP.NET projects under our belt and the unique distinction of being one of Microsoft’s Certified Gold Partners (which signifies highest level of competence and expertise with Microsoft technologies) along with a CMMI Level 3 Certification, it doesn’t make sense to say more.</p>
                      <p>Dedicated ASP.NET professionals have worked incessantly to get us this level of expertise and this has delivered matchless confidence within us.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '60px', paddingBottom: '60px' }}>
                <div className="container" style={{ backgroundColor: '#ececec' }}>
                  <div className="row" style={{ marginTop: '40px' }}>
                    <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center">
                      <div>
                        <h2 className="heading mb-0">Asp.net services</h2>
                        <p>Let’s dwell deeper and find the core ASP.NET services which we bring forth. These are namely</p>
                        <div className="accordion" id="MicrosoftAccordian">
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
                              <h2 className="accordion-header" id={`MicrosoftHeading${index + 1}`}>
                                <button
                                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#MicrosoftCollapse${index + 1}`}
                                  aria-expanded={index === 0}
                                  aria-controls={`MicrosoftCollapse${index + 1}`}
                                >
                                  <b>{item.title}</b>
                                </button>
                              </h2>
                              <div
                                id={`MicrosoftCollapse${index + 1}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`MicrosoftHeading${index + 1}`}
                                data-bs-parent="#MicrosoftAccordian"
                              >
                                <div className="accordion-body">
                                  <div className="careersview" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {(item.content).map((content, index) => (
                                      <p key={index}>{content}</p>
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
                      <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="MicrosoftAccordian2">
                        <div className="accordion-item" style={{ border: 'none', backgroundColor: '#ececec' }}>
                          <div
                            id={`MicrosoftCollapse1`}
                            className={`accordion-collapse collapse show`}
                            aria-labelledby={`MicrosoftHeading1`}
                            data-bs-parent="#MicrosoftAccordian2"
                          >
                            <div className="accordion-body" style={{ borderRadius: '10px' }}>
                              <img
                                src='/Images/Whatwedo/WebImage/Microsoft/net-web-application-development.webp'
                                alt="solutions"
                                loading="lazy"
                                width="100%"
                                style={{ border: 'none', borderRadius: '10px', color: 'red' }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item" style={{ border: 'none', backgroundColor: '#ececec' }}>
                          <div
                            id={`MicrosoftCollapse2`}
                            className={`accordion-collapse collapse`}
                            aria-labelledby={`MicrosoftHeading2`}
                            data-bs-parent="#MicrosoftAccordian2"
                          >
                            <div className="accordion-body" style={{ borderRadius: '10px' }}>
                              <img
                                src='/Images/Whatwedo/WebImage/Microsoft/net-web-application-development2.webp'
                                alt="solutions"
                                loading="lazy"
                                width="100%"
                                style={{ border: 'none', borderRadius: '10px', color: 'red' }}
                              />
                            </div>
                          </div>
                        </div>
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
    title: '.Net Web Application Development',
    content: [
      "A productive technology- the .NET platform has helped SeaTech deliver custom applications which suit your business needs perfectly. Take for example, the case of the tour management system developed by us which provides tour operators the means to automate and streamline their tour activities. The system is laden with detailed interfaces that make the tour workflow flexible yet seamless.",
      "So, the system is eased out, tour operators are cheerful and that makes SeaTech revel in pleasure! This also proves the fact that SeaTech is armed with the power required to push your business ahead.",
    ]
  },
  {
    title: 'E-Commerce Solutions Based On .NET Platform',
    content: [
      "A rule of the thumb in the internet fraternity goes to say that it takes only 10 seconds to convert a potential visitor into a customer. As a business owner, you need to ensure that your website turns those first 10 seconds into a long and rewarding relationship with your potential customer. SeaTech banks on its approach of getting clear client input to intersperse with efficient business analysis and industry best practices to get that intended success across.",
      "Our ASP.NET based dynamic E-commerce solutions bring in advanced features along with the typical ones. Yet each solution is a creative fountainhead and distinct. The advanced features which you get range from real-time order tracking to support for multiple currencies and languages along with integration with shipping companies like UPS, FedEx etc. Take a look at our e-commerce portfolio to preview all the features."
    ]
  }
];
