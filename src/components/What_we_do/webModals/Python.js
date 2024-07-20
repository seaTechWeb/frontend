import React from 'react'

export default function Python() {
  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#webPython">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="webPython" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>
            <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/WebImage/Python/python-banner.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 ' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div className='d-flex align-self-center' style={{display:'flex',alignContent:'center'}}>
                        <div>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Machine learning and AI</p>
                          <p style={{ fontSize: '60px', fontWeight: '900', marginBottom: '0px' }}>Python</p>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>General purpose programming language</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Python</p>
                      <p>Data Science landscape is evolving rapidly and Technologies used for extracting Intelligence from your Data are becoming more and more smarter with today's’ powerful Machine Learning Capabilities and availability of Big Data. With a Digital Presence, Businesses can collect Data along every point of their customer journey - from Web and Mobile App usage, Digital Clicks to Social Media – enabling them to discover and deliver personalized services and better customer experience in a multi-channel service environment.</p>
                      <p>Technology is changing the way Consumers engage with Businesses. Different formats of Data are Collected and Connected to draw complex relationships between datasets for Insights and Discoveries that are needed for Data-Driven Decisions. Python is becoming more popular for today's Data Science needs and extensively used by Data Scientists to harvest deep insights from the Data.</p>
                      <p>At Fullestop, we use TOP Python tools for Aggregating, Processing & Profiling Data, Building and Optimizing ML Models and Exposing the Model intelligence as an API in a standardized format - leveraging our years of Experience and Expertise with Techniques that can transform your data asset into a Real Business Value.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: "100%" }} src='/Images/Whatwedo/WebImage/Python/python-1.webp' alt='' />
                  </div>
                </div>
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
