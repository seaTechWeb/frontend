import React from 'react'
import ContactPage from '../../ContactPage'

export default function Laravel() {
  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#webLaravel">
        <button type="button" className="btn btn-dark">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webLaravel" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Laravel/laravel-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
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
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Laravel development
                        services</p>
                      <p>Fullestop, as a Laravel development company offers a complete skill set in the Laravel Customization and Laravel web development. With our conscientious Laravel Developers and well-established development infrastructure we have maintained the best of development standards and meticulously handled complex projects.</p>
                      <p>Our result-driven approach and end-to-end solutions have served many different businesses with the most acquiescent source of platform to put them across with the most effective interface and leverage the communication potential.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Development-Services.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Website-Development.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>

                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Laravel website development</p>
                      <p>We know how to leverage the web development environment to yield the high-end functionality. While developing a website we deploy optimized techniques and keep it close to our predefined standards and well-established roadmap.</p>
                      <p>Fullestop follows a systematic approach to website development that involves, planning, establishing protocols and dividing the work modules among different developers to realize the benefits of easily manageable codes using the development framework.</p>
                      <p>Our team of proficient Laravel developers has created significant web applications using MVC architecture and applying innovative ideas in different solutions. We develop websites that create value for your business and put them flexibly across to help you get the benefit of re-usability through Laravel.</p>
                      {service.map((item, index) => (
                        <div style={{ marginBottom: '15px', display: 'flex' }} key={index}>
                          <p className="checkmark">✔  </p><p className="text ms-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>

                  <div className='col-md-6 d-flex align-items-center'>

                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Laravel application development</p>
                      <p>Fullestop’s web application development practice addresses a wide range of business needs. Whether it's a content management system or a web-based data interface, our solutions demonstrate all the hallmarks of competence. Our web applications address the specific business requirements, whether it’s a Fortune 500 company or a small start-up.</p>
                      <p>Our developers possess in-depth knowledge of AJAX and other scripting languages that let them deliver outstanding Laravel application development solutions. They deal with the entire idea, interface requirements, system characteristics, functional aspects and other related dimensions of the product till you clearly identify your stipulated requirements.</p>
                      {application.map((item, index) => (
                        <div style={{ marginBottom: '15px', display: 'flex' }} key={index}>
                          <p className="checkmark">✔  </p><p className="text ms-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Application-Development.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/Laravel/Laravel-Custom-Development.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>

                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Custom laravel development</p>
                      <p>With its concept based on Ruby Rails and architecture built on MVC, Laravel makes customization process quite easy and affordable. You can tweak or upgrade the aesthetics and functionality of the webpage according to your requirements.</p>
                      <p>Fullestop offers Laravel Customization services for your different application needs. We can convert your existing Laravel application into an upgraded and fully-loaded version that can save tons of your money. Moreover, while delivering a customization solution we make sure that it abides by your requirement set and the updated custom elements are relevant and resourceful to you in the most optimum manner.</p>
                      {custom.map((item, index) => (
                        <div style={{ marginBottom: '15px', display: 'flex' }} key={index}>
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
            <div className="modal-footer text-center">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
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
  "aravel web development",
  "CMS development",
  "theme development & integration",
  "Component Development",
  "integration configuration and deployment",
  "extension development & integration",
]