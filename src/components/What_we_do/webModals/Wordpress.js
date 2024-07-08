import React from 'react'
import ContactPage from '../../ContactPage';

export default function Wordpress() {
  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#webWordpress">
        <button type="button" className="btn btn-dark">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webWordpress" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Wordpress/wordpress-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 ' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div className='d-flex align-self-center' style={{ display: 'flex', alignContent: 'center' }}>
                        <div>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Content management systems</p>
                          <p style={{ fontSize: '60px', fontWeight: '900', marginBottom: '0px' }}>WordPress Website Development Company</p>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>WordPress is loaded with many features, and trusted by millions.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>WordPress development services</p>
                      <p>Handling a large customer base from small business startups to large enterprises, Fullestop has gained relevant experience and a strong expertise as a WordPress development company.</p>
                      <p>Elevating authentic quality standards, and avoiding the possible oversights, Fullestop follows a conventional approach while embedding fresh and innovation-driven methodologies at the same time, thereby accomplishing all of it with its mix of crisp and accurately intelligent WordPress solutions.</p>
                      <p>We serve to drive a wedge between practicability and ambition, while positioning you at the top of your game. Our WordPress development and conversion services are based on our agile and proven approach. Our experts focus on integrating a set of smooth and sophisticated visual features and details, along with altering your business landscape for growth and improvement.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/Wordpress/wordpress-development-services.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/Wordpress/wordpress-design-development-solutions.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>

                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>WordPress design & development solutions
                      </p>
                      <p>To generate maximum torque from the open source technology, you need experienced team of design & development professionals.</p>
                      {solutions.map((item, index) => (
                        <div style={{ marginBottom: '15px', display: 'flex' }} key={index}>
                          <p className="checkmark">✔  </p><p className="text ms-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
              <div style={{ backgroundColor: '#ececec', paddingTop: '25px', marginTop: '40px' }}>
                <div className="container" style={{ backgroundColor: '#ececec' }}>
                  <p className='text-center' style={{fontSize:'40px',fontWeight:'900',marginBottom:'0px'}}>WordPress development services</p>
                  <p className='text-center'>Besides above listed WordPress services, our team also offers services related installation, configuration, support and maintenance</p>
                  <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center" >
                      <div className="accordion" id="WordpressAccordian">
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
                            <h2 className="accordion-header" id={`WordpressHeading${index + 1}`}>
                              <button
                                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#WordpressCollapse${index + 1}`}
                                aria-expanded={index === 0}
                                aria-controls={`WordpressCollapse${index + 1}`}
                              >
                                {item.title}
                              </button>
                            </h2>
                            <div
                              id={`WordpressCollapse${index + 1}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`WordpressHeading${index + 1}`}
                              data-bs-parent="#WordpressAccordian"
                            >
                              <div className="accordion-body">
                                <div className="careersview" style={{maxHeight:'140px',overflowY:'auto'}}>
                                  {(item.content).map((item1, index) => (
                                    <p key={index}>{item1}</p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                      <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="WordpressAccordian2">
                        {images.map((image, index) => (
                          <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                            <div
                              id={`WordpressCollapse${index + 1}`}
                              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                              aria-labelledby={`WordpressHeading${index + 1}`}
                              data-bs-parent="#WordpressAccordian2"
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


const solutions = [
  "WordPress theme development",
  "WordPress customization",
  "Responsive WordPress",
  "WordPress driven websites",
  "WordPress blog development",
  "WordPress Migration",
  "WordPress website security",
  "WordPress plug-in development",
]


const accordionItems = [
  {
    title: 'WordPress plug-in development',
    content: [
      'WordPress is undeniably one of the best platforms of its age and provides you with a remarkable set of features and capabilities. However, when you want to implement some specific features; WordPress packages may come along with a lot of unnecessary fluff or you may not find what you need. And that’s when our customized plug-ins comes into play.'
    ]
  },
  {
    title: 'Custom wordPress development',
    content: [
      "Developing a website with astonishing aesthetics and features, while keeping it responsive at the same time, is what every webmaster desires and Fullestop incisively delivers. Our custom WordPress development services are designed to help you set up a website that is exactly in sync with your set of requirements. We make managing content on your website a rewarding exercise.",
      "Our services typically include developing plug-ins for different features, crafting multi-faceted themes and templates, making it responsive across different devices, optimizing it for SEO, graphics development, etc. No matter you want your design to be fancy or simple; our developers lend you an element of versatility and give you full freedom to add the required fullness to your website.",
    ]

  },
  {
    title: 'PSD to wordPress theme conversion',
    content: [
      "Fullestop precisely analyze your requirements and converts your rich PSD files to exceedingly responsive and W3C validated themes."
    ]
  },
  {
    title: 'Theme customization',
    content: [
      "Our professional WordPress developers provide you full liberty to customize your themes to your desired designs."
    ]
  },
  {
    title: 'Responsive templates',
    content: [
      "While enhancing the themes with superb designs, we make sure that they are compatible across multiple browsers and devices."
    ]
  },
  {
    title: 'SEO optimized solutions',
    content: [
      "We don’t just build your website; we optimize it for search engines to facilitate better indexing and generate higher and more relevant traffic."
    ]
  },
];

const images = [
  {
    jpg: '/Images/Whatwedo/WebImage/Wordpress/wordpress-service-solution.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Wordpress/wordpress-service-solution2.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Wordpress/wordpress-service-solution3.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Wordpress/wordpress-service-solution4.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Wordpress/wordpress-service-solution5.webp',
  },
  {
    jpg: '/Images/Whatwedo/WebImage/Wordpress/wordpress-service-solution6.webp',
  },
];