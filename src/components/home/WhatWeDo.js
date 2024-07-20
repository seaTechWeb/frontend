import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  const brandingPoint = ["Brand Strategy & Experience", "Content Strategy", "Guidelines & Systems", "Go-To-Market Strategy", "Trends & Insights", "Identity Design"];
  const webPoint = ["Functional prototyping", "Web development", "Digital activation", "Strategy & systems", "UX & UI design"]
  const mobilePoint = ["Brand Strategy & Experience", "Content Strategy", "Guidelines & Systems", "Go-To-Market Strategy", "Trends & Insights", "Identity Design"]
  const marketPoint = ["Growth strategy", "Launch strategies", "Social media marketing", "Email marketing", "PPC campaigns", "SEO enablement"]
  const consultingPoint = ["Business support system", "Customized solutions", " Operation support system", "Dedicated teams", "Enterprise application solutions", "Managed IT services"]

  const brandingTextRef = useRef(null);
  const brandingImageRef = useRef(null);
  const webTextRef = useRef(null);
  const webImageRef = useRef(null);
  const mobileTextRef = useRef(null);
  const mobileImageRef = useRef(null);
  const marketTextRef = useRef(null);
  const marketImageRef = useRef(null);
  const consultingTextRef = useRef(null);
  const consultingImageRef = useRef(null);
  const [brandingImageHeight, setbrandingImageHeight] = useState('430px');
  const [webImageHeight, setWebImageHeight] = useState('430px');
  const [mobileImageHeight, setMobileImageHeight] = useState('430px');
  const [marketImageHeight, setMarketImageHeight] = useState('430px');
  const [consultingImageHeight, setConsultingImageHeight] = useState('430px');

  useEffect(() => {
    const handleResize = () => {
      if (brandingTextRef.current && brandingImageRef.current) {
        const textHeight = brandingTextRef.current.clientHeight;
        setbrandingImageHeight(`${textHeight + 30}px`);
      }

      if (webTextRef.current && webImageRef.current) {
        const textHeight = webTextRef.current.clientHeight;
        setWebImageHeight(`${textHeight + 30}px`);
      }

      if (mobileTextRef.current && mobileImageRef.current) {
        const textHeight = mobileTextRef.current.clientHeight;
        setMobileImageHeight(`${textHeight + 30}px`);
      }
      if (marketTextRef.current && marketImageRef.current) {
        const textHeight = marketTextRef.current.clientHeight;
        setMarketImageHeight(`${textHeight + 30}px`);
      }
      if (consultingTextRef.current && consultingImageRef.current) {
        const textHeight = consultingTextRef.current.clientHeight;
        setConsultingImageHeight(`${textHeight + 30}px`);
      }
    };

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container'>
      <section id='branding' style={{ paddingTop: '30px' }}>
        <h1 className='text-center more-weight' >What we Do</h1>
        <div className='row imageContainer' style={{ marginTop: '40px' }}>
          <div className='col-md-6'>
            <div className="">
              <img
                ref={brandingImageRef}
                className="imageDesign"
                style={{ width: '100%', height: brandingImageHeight }}
                src='./Images/Service/services-front1.webp'
                alt='Insurance'
              />
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-center' style={{ marginTop: '10px' }}>
            <div ref={brandingTextRef}>
              <h2>Branding & identity</h2>
              <hr />
              <p>
                We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
              </p>
              {brandingPoint.map((item, index) => (
                <div key={index}>
                  <span className="checkmark">✔  </span>
                  <span className="text">{item}</span>
                </div>
              ))}
              <Link type="button" to="/whatWebranding" className="btn btn-dark my-3 blueButton">Learn More about Branding &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section id='WebDevelopment' style={{ paddingTop: '80px' }}>
        <div className='row imageContainer' style={{ marginTop: '40px' }}>
          <div className='col-md-6 order-2 order-md-1 d-flex align-items-center'>
            <div ref={webTextRef}>
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
              <Link type="button" to="/whatWeWebDevelopment" className="btn btn-dark my-3 blueButton">Learn More about Web Development &rarr;</Link>
            </div>
          </div>
          <div className='col-md-6 order-1 order-md-2'>
            <img className='imageDesign' ref={webImageRef} style={{ width: '100%', height: webImageHeight }} src='/Images/Service/services-front2.webp' alt='softwareconsulting' />
          </div>
        </div>
      </section>

      <section id='mobileDevelopment' style={{ paddingTop: '110px' }}>
        <div className='row imageContainer' style={{ marginTop: '40px' }}>
          <div className='col-md-6 my-2' >
            <img className='imageDesign' ref={mobileImageRef} style={{ width: '100%', height: mobileImageHeight }} src='/Images/Service/services-front3.webp' alt='seatechanalytics' />
          </div>
          <div className='col-md-6 d-flex align-items-center mt-2'>
            <div ref={mobileTextRef}>
              <h2>Mobile development</h2>
              <hr />
              <p>We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
              </p>
              {mobilePoint.map((item, index) => (
                <div key={index}>
                  <span className="checkmark">✔  </span>
                  <span className="text">{item}</span>
                </div>
              ))}
              <Link type="button" to="/whatWeMobileDevelopment" className="btn btn-dark my-3 blueButton">Learn More about Mobile Development &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section id='DigitalMarketing' style={{ paddingTop: '50px' }}>
        <div className='row imageContainer' style={{ marginTop: '40px' }}>
          <div className='col-md-6 order-2 order-md-1 d-flex align-items-center mt-2'>
            <div ref={marketTextRef}>
              <h2 >Digital marketing</h2>
              <hr />
              <p>With a keen understanding of what's happening in the digital landscape, we leverage the power of marketing platforms to connect audiences with contagious content worth sharing & spreading, cross-channel and touchpoint.
              </p>
              {marketPoint.map((item, index) => (
                <div key={index}>
                  <span className="checkmark">✔  </span>
                  <span className="text"> {item} </span>
                </div>
              ))}
              <Link type="button" to="/whatWeDigitalMarketing" className="btn btn-dark my-3 blueButton">Learn More about Digital Marketing &rarr;</Link>
            </div>
          </div>
          <div className='col-md-6 order-1 order-md-2'>
            <img className='imageDesign' ref={marketImageRef} style={{ width: '100%', height: marketImageHeight }} src='/Images/Service/services-front4.webp' alt='mobiletech' />
          </div>
        </div>
      </section>

      <section id='consulting' style={{ paddingTop: '50px' }}>
        <div className='row imageContainer' style={{ marginTop: '40px' }}>
          <div className='col-md-6 my-2' >
            <img className='imageDesign' ref={consultingImageRef} style={{ width: '100%', height:consultingImageHeight }} src='./Images/Service/services-front5.webp' alt='seatechanalytics' />
          </div>
          <div className='col-md-6 d-flex align-items-center mt-2'>
            <div ref={consultingTextRef}>
              <h2>Consulting & IT staff augmentation</h2>
              <hr />
              <p>Today’s next-gen service providers maintain a complex set of products & services in an increasingly competitive and ever-changing market. Business Support System
              </p>
              {consultingPoint.map((item, index) => (
                <div key={index}>
                  <span className="checkmark">✔  </span>
                  <span className="text"> {item} </span>
                </div>
              ))}
              <Link type="button" to="/whatWeconsulting" className="btn btn-dark my-3 blueButton">Learn More about CIAS &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
