import React from 'react'
import ContactPage from '../../ContactPage';

export default function CakePHP() {
  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#webCakePHP">
        <button type="button" className="btn btn-dark">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webCakePHP" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/CakePHP/cakephp-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 ' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div className='d-flex align-self-center' style={{ display: 'flex', alignContent: 'center' }}>
                        <div>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Web development services</p>
                          <p style={{ fontSize: '60px', fontWeight: '900', marginBottom: '0px' }}>CakePHP Development Company</p>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Experience the true power of CakePHP Development with Us.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Cakephp development
                        services</p>
                      <p><b>Experience the true power of CakePHP Development with Us. Be Scalable, Flexible and Smart.</b></p>
                      <p>Built on solid Design Patterns and Engineering Principles to give you maximum productivity, CakePHP is one of the leading open source frameworks across the globe - an ultimate choice for crafting modern cutting-edge Web Solution.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/CakePHP/cakephp-development-services.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/CakePHP/with-fullestop-get-it-right-the-first-time.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>With fullestop, get it right the first time</p>
                      <p>At Fullestop, every project starts with a sense of scalability, optimization and Engagement. With a strong process driven ecosystem, we ensure a smooth sailing throughout the project life cycle.</p>
                      <p>We start with an intensive discovery process and a research based approach and deliver a well-planned Design that adds credibility and makes people visit your website again and again.</p>
                      <p>Aligning the development process with User Experience, we achieve a perfect balance between Technology, Aesthetics and Experience.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>We deliver quality and excellence</p>
                      <p>Driven with best practices and a mature process model, we ensure that your digital presence is one among the best ones in the industry. Rely on us for high performance enterprise CakePHP solutions and experience our result oriented innovative services.</p>
                      <p>We are not just the best CakePHP developers but also your partner in success.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/CakePHP/we-deliver-quality-and-excellence.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', Width: "100%" }} src='/Images/Whatwedo/WebImage/CakePHP/right-approach-and-perfectly-aligned-practices.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Right approach and perfectly aligned practices</p>
                      <p>We bring our vast experience of more than 22 years in crafting Digital assets. We understand your customers and know endless ways to optimize experience for them.</p>
                      <p>BWe deliver tailored and most relevant CakePHP services for your unique business needs - using a magical mix of UI and Branding elements, crafting an amazing experience for your customers and leaving an impactful presence of your online business. A well planned content strategy and effective search engine optimisation are built into our development practices. We deliver more than just a nice looking website.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '40px', paddingBottom: '20px' }}>
                <div className="container" style={{ backgroundColor: '#ececec' }}>
                  <div className="row" style={{ marginTop: '40px' }}>
                    <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center">
                      <div>
                        <h2 className="heading mb-4">Laravel application development</h2>
                        <div className="accordion" id="CakePHPAccordian">
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
                              <h2 className="accordion-header" id={`CakePHPHeading${index + 1}`}>
                                <button
                                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#CakePHPCollapse${index + 1}`}
                                  aria-expanded={index === 0}
                                  aria-controls={`CakePHPCollapse${index + 1}`}
                                >
                                  <b>{item.title}</b>
                                </button>
                              </h2>
                              <div
                                id={`CakePHPCollapse${index + 1}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`CakePHPHeading${index + 1}`}
                                data-bs-parent="#CakePHPAccordian"
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
                      <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="CakePHPAccordian2">
                        {images.map((image, index) => (
                          <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                            <div
                              id={`CakePHPCollapse${index + 1}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`CakePHPHeading${index + 1}`}
                              data-bs-parent="#CakePHPAccordian2"
                            >
                              <div className="accordion-body" style={{ borderRadius: '10px' }}>
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
              <ContactPage/>
            </div>
            <div className="modal-footer text-center">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
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
      "CakePHP Web Development",
      "Framework Customization",
      "CakePHP Module Development",
      "CakePHP Migration",
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