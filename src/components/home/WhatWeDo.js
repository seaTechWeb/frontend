import React from 'react'
import { Link } from "react-router-dom"
import BrandingAndIdentity from '../What_we_do/BrandingAndIdentity'
import MobileDevelopment from '../What_we_do/MobileDevelopment'
import DigitalMarketing from '../What_we_do/DigitalMarketing'
import Consulting from '../What_we_do/Consulting'

export default function WhatWeDo() {
  const brandingPoint = ["Brand Strategy & Experience", "Content Strategy", "Guidelines & Systems", "Go-To-Market Strategy", "Trends & Insights", "Identity Design"]
  const webPoint = ["Functional prototyping", "Web development", "Digital activation", "Strategy & systems", "UX & UI design"]
  const mobilePoint = ["Brand Strategy & Experience", "Content Strategy", "Guidelines & Systems", "Go-To-Market Strategy", "Trends & Insights", "Identity Design"]
  const marketPoint = ["Growth strategy", "Launch strategies", "Social media marketing", "Email marketing", "PPC campaigns", "SEO enablement"]
  const consultingPoint = ["Business support system", "Customized solutions", " Operation support system", "Dedicated teams", "Enterprise application solutions", "Managed IT services"]
  return (
    <>
      <div className='container'>
        <section id='branding' style={{ paddingTop: '90px' }}>
          <h1 className='text-center more-weight' style={{ marginTop: '30px' }}>What we Do</h1>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6' >
              <img style={{ width: '100%', maxHeight: '450px' }} src='./Images/Service/services-front1.webp' alt='Insurance' />
            </div>
            <div className='col-md-6 d-flex align-items-center'>
              <div className='py-4'>
                <h2>Branding & identity</h2>
                <hr />
                <p>We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
                </p>
                {brandingPoint.map((item, index) => (
                  <div key={index}>
                    <span className="checkmark">✔  </span>
                    <span className="text">{item}</span>
                  </div>
                ))}
                <BrandingAndIdentity />
              </div>
            </div>
          </div>
        </section>

        <section id='WebDevelopment' style={{ paddingTop: '90px' }}>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6 order-2 order-md-1 d-flex align-items-center'>
              <div className='px-4'>
                <h2 className='my-4'>Web development</h2>
                <hr />
                <p>Living in today's digital world, the Web has a much wider reach than any other form of digital media. As an invaluable and always accessible resource for information
                </p>
                {webPoint.map((item, index) => (
                  <div key={index}>
                    <span className="checkmark">✔  </span>
                    <span className="text">{item}</span>
                  </div>
                ))}
                <Link type="button" to="/whatWeWebDevelopment" className="btn btn-dark my-3">Learn More</Link>
              </div>
            </div>
            <div className='col-md-6 order-1 order-md-2'>
              <img style={{ width: '100%', maxHeight: '450px' }} src='/Images/Service/services-front2.webp' alt='softwareconsulting' />
            </div>
          </div>
        </section>

        <section id='mobileDevelopment' style={{ paddingTop: '90px' }}>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6 my-2' >
              <img style={{ width: '100%', maxHeight: '450px' }} src='/Images/Service/services-front3.webp' alt='seatechanalytics' />
            </div>
            <div className='col-md-6 d-flex align-items-center mt-3'>
              <div className='px-4'>
                <h2 className='my-4'>Mobile development</h2>
                <hr />
                <p>We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
                </p>
                {mobilePoint.map((item, index) => (
                  <div key={index}>
                    <span className="checkmark">✔  </span>
                    <span className="text">{item}</span>
                  </div>
                ))}
                <MobileDevelopment />
              </div>
            </div>
          </div>
        </section>

        <section id='DigitalMarketing' style={{ paddingTop: '90px' }}>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6 order-2 order-md-1 d-flex align-items-center'>
              <div className='px-4'>
                <h2 className='my-4'>Digital marketing</h2>
                <hr />
                <p>With a keen understanding of what's happening in the digital landscape, we leverage the power of marketing platforms to connect audiences with contagious content worth sharing & spreading, cross-channel and touchpoint.
                </p>
                {marketPoint.map((item, index) => (
                  <div key={index}>
                    <span className="checkmark">✔  </span>
                    <span className="text"> {item} </span>
                  </div>
                ))}
                <DigitalMarketing />
              </div>
            </div>
            <div className='col-md-6 order-1 order-md-2'>
              <img style={{ width: '100%', maxHeight: '450px' }} src='/Images/Service/services-front4.webp' alt='mobiletech' />
            </div>
          </div>
        </section>


        <section id='consulting' style={{ paddingTop: '90px' }}>
          <div className='row' style={{ marginTop: '40px' }}>
            <div className='col-md-6 my-2' >
              <img style={{ width: '100%', maxHeight: '450px' }} src='./Images/Service/services-front5.webp' alt='seatechanalytics' />
            </div>
            <div className='col-md-6 d-flex align-items-center mt-3'>
              <div className='px-4'>
                <h2 className='my-4'>Consulting & IT staff augmentation</h2>
                <hr />
                <p>Today’s next-gen service providers maintain a complex set of products & services in an increasingly competitive and ever-changing market. Business Support System
                </p>
                {consultingPoint.map((item, index) => (
                  <div key={index}>
                    <span className="checkmark">✔  </span>
                    <span className="text"> {item} </span>
                  </div>
                ))}
                <Consulting/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
