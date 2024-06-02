import React from 'react'

export default function WhatWeDo() {
  return (
    <>
      <div className='container'>

        <section id='insurancetech'>
          <h1 className='text-center more-weight' style={{ marginTop: '70px' }}>What we Do</h1>
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


                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Learn More
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='container  my-4'>
                          <h1 className='text-center'>Software for Insurance Vertical</h1>
                          <hr />
                          <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="./Images/insurancetech.jpg" alt='Software for Insurance' /></div>
                          <p>Our Software products have been supporting the operations of major Insurance players across the globe in the UK, Singapore, Thailand, Indonesia, Philippines and China for the last 25 years.</p>
                          <h5>General Insurance</h5>
                          <p>AeGIS<sup>TM</sup> - This is our core insurance platform and it continues to provide the most diverse feature set to cater to the various operational and business needs of our clients.</p>
                          <br />
                          <p>Our depth of domain knowledge in General Insurance has also enabled us to build a suite of complementary insurance products that enhance and augment AeGIS.</p>
                          <p>AeGIS<sup>TM</sup> is now ably supported by its integration with our other products like :</p>
                          <ul>
                            <li>InstaClaims<sup>TM</sup> - our solution for mobile claims survey which leverages the best in mobile technology for simplifying an integral part of the claims Survey Process.</li>
                            <li>CUBUS<sup>TM</sup> - our business intelligence solution that leverages best in class Data Warehousing and Visualisation technologies to help our clients make informed decisions.</li>
                            <li>Terrafix<sup>TM</sup> - our risk visualization tool that allows better risk assessment by its ability to allow users to visualize metrics like premium, risk exposure, claims in a geographical context.</li>
                          </ul>
                          <h5>Reinsurance</h5>
                          <p>IRI<sup>TM</sup>  - This is our core reinsurance platform. We have a rich experience of working with reinsurers in South East Asia and this platform provides best in class features and capabilities that ably support the needs of our growing clients.</p>
                        </div>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
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
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Learn More
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='container  my-4'>
                          <h1 className='text-center'>Software Consulting</h1>
                          <hr />
                          <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="./Images/softwareconsulting.jpg" alt='Software consulting' /></div>
                          <p>Our expertise is in building Enterprise Software solutions for our clients. We help our clients formulate a coherent long term software strategy built around their business objectives as well as in the implementation of any such strategy.
                          </p>
                          <h5>Our core strengths include :</h5>
                          <ul>
                            <li>Strategic Planning</li>
                            <li>Enterprise Architecture</li>
                            <li>System Integration</li>
                            <li>Maintenance and Support</li>

                          </ul>
                          <p>We have a depth of knowledge in each of these areas and our best practices have evolved through decades of experience in these fields.</p>
                          <p>We aim at building best in class enterprise solutions that leverage the learnings of the past and take advantage of the latest tools and technologies available today.</p>
                        </div>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

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


                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" style={{fontSize:'15px', padding:'6px 8px'}}>
                  Learn More
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='container  my-4'>
                          <h1 className='text-center'>Analytics</h1>
                          <hr />
                          <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="./Images/seatechanalytics.jpg" alt='Software consulting' /></div>
                          <p>Agile decision making is at the core of any business strategy and it relies on the ability to process information to make quantifiable decisions. Business Analytics is making this possible by processing and converting raw information from disparate sources across the organization into actionable insights. Recent advancements in Big Data as well as Machine learning in addition to traditional data analytics have helped to democratize this capability and brought it within the reach of every organization irrespective of their size.</p> <br />
                          <p>SeaTech’s value lies in helping our customers develop a coherent strategy for using Business Analytics to enhance their decision making processes. We enable our clients to leverage this critical capability and integrate it into their core business processes</p><br />
                          <p>The technology landscape in this space is also cluttered with many disparate products and platforms offering both similar and competing feature sets. Having worked with enterprise customers across various business domains, we have the width and depth of experience to provide our clients with the best fit technology solution without bias to meet their specific needs.</p><br />
                          <p>We have used our 30 years of technology and domain expertise to create CUBUS - an enterprise-wide platform that supports reporting, analysis and decision making. This “single version of the truth” aids in fact-based decision making by providing the right information to decision makers at the right time.We are applying our domain expertise of close to 30 years in General Insurance to convert data into meaningful descriptive, predictive and prescriptive analytics.</p>
                        </div><br />
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-dark py-2"  >Learn About CUBUS</button>
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>




                <button type="button" className="btn btn-dark ms-2" style={{fontSize:'15px', padding:'6px 8px'}}>Learn about CUBUS</button>
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


                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                  Learn More
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='container  my-4'>
                          <h1 className='text-center'>Mobile Technology</h1>
                          <hr />
                          <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="./Images/mobiletech.jpg" alt='Mobile Technoogy' /></div>
                          <p>Mobile Technology has become and will continue to be the backbone of every company’s software strategy. We recognized and pre-empted this shift by setting up our own mobile software division - seatechmobile - in 2008 to address this growing need of the industry.</p> <br />
                          <p>We have evolved along with the mobile landscape and have worked with companies across industries from big enterprises to agile startups and helped them take advantage of this new paradigm to improve and enhance their software ecosystem.</p><br />
                          <p>Our successful implementations for diverse clients on both IOS and Android since their very early versions have enabled us to hone our skills on these platforms since their early inception and provide our clients with the benefits of our expertise.</p><br />
                        </div><br />
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>




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
