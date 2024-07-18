import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';

export default function Engagement() {
  const engagementImageRef1 = useRef(null);
  const engagementImageRef2 = useRef(null);
  const engagementImageRef3 = useRef(null);
  const engagementTextRef1 = useRef(null);
  const engagementTextRef2 = useRef(null);
  const engagementTextRef3 = useRef(null);
  const [imageHeight1, setImageHeight1] = useState('0px');
  const [imageHeight2, setImageHeight2] = useState('0px');
  const [imageHeight3, setImageHeight3] = useState('0px');

  useEffect(() => {
    const handleResize = () => {
      if (engagementTextRef1.current && engagementImageRef1.current) {
        const textHeight = engagementTextRef1.current.clientHeight;
        setImageHeight1(`${textHeight + 60}px`);
      }
      if (engagementTextRef2.current && engagementImageRef2.current) {
        const textHeight = engagementTextRef2.current.clientHeight;
        setImageHeight2(`${textHeight + 60}px`);
      }
      if (engagementTextRef3.current && engagementImageRef3.current) {
        const textHeight = engagementTextRef3.current.clientHeight;
        setImageHeight3(`${textHeight + 60}px`);
      }
    };

    const handleModalShown = () => {
      handleResize(); // Calculate heights when the modal is shown
      window.addEventListener('resize', handleResize);
    };

    const handleModalHidden = () => {
      window.removeEventListener('resize', handleResize);
    };

    const modalElement = document.getElementById('consultingEngagement');
    modalElement.addEventListener('shown.bs.modal', handleModalShown);
    modalElement.addEventListener('hidden.bs.modal', handleModalHidden);

    return () => {
      modalElement.removeEventListener('shown.bs.modal', handleModalShown);
      modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
    };
  }, []);

  return (
    <div>
      <div data-bs-toggle="modal" className='' data-bs-target="#consultingEngagement">
        <button type="button" className="btn blueButton">Learn more &rarr;</button>
      </div>
      <div className="modal fade" id="consultingEngagement" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
              <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0px' }}>

              <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/consulting/modals/engagement-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                      <div>
                        <div>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Fulfilling your needs – Our objective</p>
                          <p className='bannerHeading' style={{ marginBottom: '0px' }}>Engagement Models</p>
                          <p style={{ fontSize: '18px', marginBottom: '0px' }}>Elevate Your Success with SeaTech's Proven Engagement Model</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container' style={{ marginTop: '40px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={engagementTextRef1}>
                      <p style={{ fontSize: '40px', fontWeight: '900' }}>Engagement models</p>
                      <p>SeaTech follows a sophisticated strategy in delivering its services. A robust and powerful engagement model is the foundation for an effective offshore experience. Our engagement model is highly centered on fulfilling customer’s innate needs.</p>
                      <p>SeaTech’s clients and partners immensely benefit from its unique engagement model which establishes a commitment toward a successful project right from the planning phase to the delivery phase. We follow standard engagement models as the leading service providers practice globally.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={engagementImageRef1} style={{ borderRadius: '10px', height:imageHeight1, width: "100%" }} src='/Images/Whatwedo/consulting/modals/engagement-benefits-image.webp' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <p className='text-center heading' style={{marginBottom: '0px' }}>Idea to execution</p>
                <p className='text-center' style={{ fontSize: '16px', fontWeight: '700' }}>Fully leveraging the possibilities and opportunities, fundamentally changing how you deliver value to customers.</p>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='card cardDesign' style={{ minHeight: '410px' }}>
                      <div className='card-body'>
                        <p style={{ fontSize: '35px', fontWeight: '700' }}>Innovate works</p>
                        <p>What works for others may not work for you. A customized solution is all you need. So we invent new ideas and implement them in your projects to make them most fruitful for your business. Innovation and utilizing the most cutting-edge technologies remain at the top of our solutions. While working on your projects, we discover the best of technologies, innovations, and creations for you. Our innovative ideas allow us to utilize the technologies in vogue, which will guide the industry for many years to come.</p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-4'>
                    <div className='card cardDesign' style={{ minHeight: '410px' }}>
                      <div className='card-body'>
                        <p style={{ fontSize: '35px', fontWeight: '700' }}>Out-of-the-box</p>
                        <p>While others depend upon the last decade's techniques to deliver any solution, we work in a differently. We do not rely on conventional approaches but we bring out the most out-of-the-box ideas to make your project stand ahead in the competition. With SeaTech's unique approach to working with effective methods with an extra edge, we promise to deliver you something outstanding every time you work with us. Our creative designers and skilled developers convert your ideas into a pixel-perfect reality.</p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-4'>
                    <div className='card cardDesign' style={{ minHeight: '410px' }}>
                      <div className='card-body'>
                        <p style={{ fontSize: '35px', fontWeight: '700' }}>Top-notch support</p>
                        <p>Working on your project is just the start of our relationship, which we maintain for many years to come. We remain with you during the project development life cycle, and we remain with you even after that. Our top-notch support service ensures we remain in touch when you need us the most, regardless of the time on the clock. Whether you seek our aid or simply wish to engage in a conversation, don't hesitate to reach out for support – we are eager to be of service.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: 'black', marginTop: '60px' }}>
                <div className='container' style={{ paddingTop: '25px' }}>
                  <p className='text-center heading' style={{color: 'white' }}>Customer’s needs</p>
                  <div className="customerneed-section">
                    <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
                      {customerNeed1.map((solution, index) => (
                        <li
                          className="d-flex align-items-center justify-content-center"
                          key={index}
                          style={{ border: 'none' }}
                        >
                          <figure>
                            <img src={solution.link} alt='SEO' />
                          </figure>
                          <strong dangerouslySetInnerHTML={{ __html: solution.text }} style={{ color: '#c59f44' }} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="customerneed-section">
                    <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
                      {customerNeed2.map((solution, index) => (
                        <li
                          className="d-flex align-items-center justify-content-center"
                          key={index}
                          style={{ border: 'none' }}
                        >
                          <figure>
                            <img src={solution.link} alt='SEO' />
                          </figure>
                          <strong dangerouslySetInnerHTML={{ __html: solution.text }} style={{ color: '#c59f44' }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={engagementTextRef2}>
                      <p className='heading'>Benefits of working
                        with SeaTech</p>
                      <div style={{ marginBottom: '10px' }}>
                        <span className="checkmark">✔  </span><span className="text">Our resources work dedicatedly on your project
                        </span>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <span className="checkmark">✔  </span><span className="text">You get the best possible value for your money
                        </span>
                      </div>
                      <div style={{  display: 'flex' }}>
                        <p className="checkmark">✔  </p><p className="text ms-1">We only use named resources. Your involvement in resource selection is highly appreciated and You may choose the project managers, developers, testers, and business analysts as per your preferences
                        </p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p className="checkmark">✔  </p><p className="text ms-1">We offer an initial trial exercise to demonstrate our professionalism and working capabilities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='imageDesign' ref={engagementImageRef2} style={{ borderRadius: '10px', height:imageHeight2,width: "100%" }} src='/Images/Whatwedo/consulting/modals/engagement-modal-image.jpg' alt='' />
                  </div>
                </div>
              </div>
              <div className='container' style={{ marginTop: '60px',marginBottom:'60px' }}>
                <div className='row imageContainer'>
                  <div className='col-md-6' >
                    <img className='imageDesign' ref={engagementImageRef3} style={{ borderRadius: '10px',height:imageHeight3, width: "100%" }} src='/Images/Whatwedo/consulting/modals/how-work-image.webp' alt='' />
                  </div>
                  <div className='col-md-6 d-flex align-items-center'>
                    <div ref={engagementTextRef3}>
                      <p className='heading'>How we work</p>
                      <p>Simple- we work with you, for you, and your business interests. For us, your growth translates into our growth. At SeaTech, we firmly uphold the value of well-defined processes, essential for consistently meeting delivery and quality benchmarks.</p>
                      <p> <b> SeaTech is a CMMI level 3 certified organization.</b> In other words, we have been diligently implementing systems that benchmarked against the best in the world and ensuring that the service delivery is streamlined against your needs.</p>
                      <p>We invite you to learn more about how Capability Maturity Model Integration (also known as CMMI) is now considered the Software industry's standard for quality improvements in our white paper on CMMI. Taking on learning from CMMI, SeaTech has further attuned its service offerings to being a service provider to a partner – and a definite partner in progress.</p>
                      <p>We start with an extensive requirement elicitation process – which includes consulting on the project, Specification finalizations, Wireframe development, and a review process.</p>
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

const customerNeed1 = [
  {
    link: "/Images/Whatwedo/consulting/modals/high-quality.svg",
    text: "High Quality"
  },
  {
    link: "/Images/Whatwedo/consulting/modals/fast-delivery.svg",
    text: "Fast Delivery"
  },
  {
    link: "/Images/Whatwedo/consulting/modals/low-cost.svg",
    text: "Low Cost"
  }
];
const customerNeed2 = [
  {
    link: "/Images/Whatwedo/consulting/modals/project-profitability.svg",
    text: "Increased Project <br> Profitability"
  },
  {
    link: "/Images/Whatwedo/consulting/modals/flexible-resource.svg",
    text: "Flexible Resource <br> Allocation"
  },
  {
    link: "/Images/Whatwedo/consulting/modals/predictable-support.svg",
    text: "Predictable <br> Support"
  },
  {
    link: "/Images/Whatwedo/consulting/modals/handling-future.svg",
    text: "Handling Future <br> Needs of The Customer"
  }
];
