import React from 'react'

export default function WhatWeDo() {
  return (
    <>
      <div className='container'>

        <section id='insurancetech'>
          <h1 className='text-center' style={{ marginTop: '70px' }}>What we Do</h1>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6' >
              <img style={{ width: '100%' }} src='./Images/insurancetech.jpg' alt='Insurance' />
            </div>
            <div className='col-md-6 d-flex align-items-center'>
              <div className='px-4'>
                <h2>Software for Insurance Vertical</h2>
                <hr />
                <p>Our Software products have been supporting the operations of major Insurance players across the globe in the UK, Singapore, Thailand, Indonesia, Philippines and China for the last 25 years.
                </p>
                <button type="button" className="btn btn-dark">Learn more</button>
              </div>
            </div>
          </div>
        </section>



        <section id='softwareconsulting'>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6 order-2 order-md-1 d-flex align-items-center'>
              <div className='px-4'>
                <h2>Software Consulting</h2>
                <hr />
                <p>Our expertise is in building Enterprise Software solutions for our clients. We help our clients formulate a coherent long term software strategy built around their business objectives as well as in the implementation of any such strategy.
                </p>
                <button type="button" className="btn btn-dark me-2">Learn more</button>
              </div>
            </div>
            <div className='col-md-6 order-1 order-md-2'>
              <img style={{ width: '100%' }} src='./Images/softwareconsulting.jpg' alt='softwareconsulting' />
            </div>
          </div>
        </section>

        <section id='seatechanalytics'>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6 my-2' >
              <img style={{ width: '100%' }} src='./Images/seatechanalytics.jpg' alt='seatechanalytics' />
            </div>
            <div className='col-md-6 d-flex align-items-center mt-3'>
              <div className='px-4'>
                <h2>Analytics</h2>
                <hr />
                <p>Agile decision making is at the core of any business strategy and it relies on the ability to process information to make quantifiable decisions. Business Analytics is making this possible by processing and converting raw information from disparate sources across the organization into actionable insights.
                </p>
                <button type="button" className="btn btn-dark me-2">Learn more</button>
                <button type="button" className="btn btn-dark ms-2">Learn about CUBUS</button>
              </div>
            </div>
          </div>
        </section>

        <section id='mobiletech'>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6 order-2 order-md-1 d-flex align-items-center'>
              <div className='px-4'>
                <h2>Mobile Technolog</h2>
                <hr />
                <p>Mobile Technology has become and will continue to be the backbone of every company’s software strategy. We recognized and pre-empted this shift by setting up our own mobile software division - seatechmobile - in 2008 to address this growing need of the industry.
                </p>
                <button type="button" className="btn btn-dark me-2">Learn more</button>
              </div>
            </div>
            <div className='col-md-6 order-1 order-md-2'>
              <img style={{ width: '100%' }} src='./Images/mobiletech.jpg' alt='mobiletech' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
