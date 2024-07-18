import React, { useRef, useEffect, useState } from 'react'
import ContactPage from '../ContactPage'
import Engagement from './ConsultingModal.js/Engagement'
import It from './ConsultingModal.js/It'
import Teams from './ConsultingModal.js/Teams'

export default function Consulting() {
  const consultingImageRef = useRef(null);
  const consultingTextRef = useRef(null);
  const [imageHeight, setImageHeight] = useState('240px')
  useEffect(() => {
    const handleResize = () => {
      if (consultingTextRef.current && consultingImageRef.current) {
        const textHeight = consultingTextRef.current.clientHeight;
        setImageHeight(`${textHeight + 60}px`);
      }
    };
    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div style={{ marginTop: '86px' }}>
      <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/services-consulting-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
              <div >
                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Staff Augmentation</p>
                <p className='bannerHeading' style={{ marginBottom: '0px' }}>IT solutions consulting company</p>
                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Providing the best technology and business consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <div className='row imageContainer'>
          <div className='col-md-6 d-flex align-items-center'>
            <div ref={consultingTextRef}>
              <p className='heading'>IT consultation services</p>
              <p>Today’s next-gen service providers maintain a complex set of products & services in an increasingly competitive and ever-changing market. Business Support System (BSS), Operation Support System (OSS) and Enterprise Application Solutions are required to maximize the ROI, reduce costs, offer superior customer services and accelerate time to market for new products and services. IT Consulting Services from SeaTech help businesses increase innovation, accelerate productivity, minimize costs and optimize resource utilization.</p>
              <p>Our value proposition is based on a concourse of business understanding, comprehensive technological skills and a pinpointed approach through the use of in-house practices, frameworks and tools.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='imageDesign' ref={consultingImageRef} style={{ borderRadius: '10px', width: '100%', height: imageHeight }} src='/Images/Whatwedo/services-consulting-itstaff-image.webp' alt='' />
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <div className='d-flex justify-content-center'>
          <div className='col-md-6'>
            <p style={{ marginBottom: '0px' }} className='text-center heading'>Actionable insights from expert professionals</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4' style={{ marginTop: '30px' }}>
            <div className='card cardDesign' style={{ minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
              <div className='card-body' style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '30px', fontWeight: '700', marginBottom: '0px' }}>Engagement</p>
                  <p style={{ fontSize: '30px', fontWeight: '900' }}>models</p>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>SeaTech follows a sophisticated strategy in delivering its services. A robust and powerful engagement model is the foundation for an effective offshore experience. Our engagement model is highly centered on fulfilling customer’s.</p>
                </div>
                <div className='buttonContainer' style={{ marginTop: 'auto' }}>
                  <Engagement />
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-4' style={{ marginTop: '30px' }}>
            <div className='card cardDesign' style={{ minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
              <div className='card-body' style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '30px', fontWeight: '700', marginBottom: '0px' }}>Managed IT</p>
                  <p style={{ fontSize: '30px', fontWeight: '900' }}>services</p>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>IT systems should be simple and they should work. As IT systems have become more complex, the work has become more time-consuming and expensive. This is where SeaTech can help you, by offering its tailor-made managed IT Solutions.</p>
                </div>
                <div className='contentContainer' style={{ marginTop: 'auto' }}>
                  <It />
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-4' style={{ marginTop: '30px' }}>
            <div className='card cardDesign' style={{ minHeight: '340px' }}>
              <div className='card-body'>
                <p style={{ fontSize: '30px', fontWeight: '700', marginBottom: '0px' }}>Dedicated</p>
                <p style={{ fontSize: '30px', fontWeight: '900' }}>teams</p>
                <p style={{ fontSize: '16px', fontWeight: '500' }}>If the lack of the right talent is delaying your project delivery, hiring our dedicated teams can be the optimum solution for you. Our dedicated teams will exclusively work on your projects while sitting in our well-established development center.</p>
                <Teams />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <p style={{ marginBottom: '0px' }} className='text-center heading'>Our IT solutions consulting</p>
        <p className='text-center'>We help you assess your present IT situation, offering expert insight and vigorous suggestions that reinforce your decision-making, together with your business and technology strategies. In the 22 years, we have served several business tycoons across diverse sectors, including telecommunications,  the industry, engineering firms, large financial establishments, government agencies, and medium-scale businesses.</p>
        <div className="customerneed-section">
          <ul className="d-flex flex-wrap justify-content-center iconlisting-card ">
            {consultingIcon.map((solution, index) => (
              <li
                className="d-flex align-items-center justify-content-center iconCardDesign"
                key={index}
              >
                <figure>
                  <img src={solution.link} alt='SEO' />
                </figure>
                <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='container' style={{ marginTop: '60px' }}>
        <p style={{ marginBottom: '0px' }} className='text-center heading'>Our expertise</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='col-md-6' >
            <p className='text-center'>We help you plan, design, implement and operate solutions based on a varied range
              of platforms and enabled by cloud-based or shared infrastructures.</p>
          </div>
        </div>
        <div className="customerneed-section">
          <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
            {expertiseIcon.map((solution, index) => (
              <li
                className="d-flex align-items-center justify-content-center iconCardDesign"
                key={index}

              >
                <figure>
                  <img src={solution.link} alt='SEO' />
                </figure>
                <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className='container' style={{ marginTop: '60px', marginBottom: '60px' }}>
        <p style={{ marginBottom: '0px' }} className='text-center heading'>We operate in</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='col-md-10' >
            <p className='text-center'>IT consulting services at SeaTech: We offer a complete range of IT-enabled services, including Project Governance Design & Analysis,
              Application Development, Based Solutions, Networking Solutions, Enterprise Solutions, and Business Intelligence.</p>
          </div>
        </div>
        <div className="customerneed-section">
          <ul className="d-flex flex-wrap justify-content-center iconlisting-card ">
            {operateIcon.map((solution, index) => (
              <li
                className="d-flex align-items-center justify-content-center iconCardDesign"
                key={index}
              >
                <figure>
                  <img src={solution.link} alt='SEO' />
                </figure>
                <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ContactPage />
    </div>
  )
}


const consultingIcon = [
  { link: "/Images/Whatwedo/consulting/consulting-icon1.svg", text: "IT<br>Transformation" },
  { link: "/Images/Whatwedo/consulting/consulting-icon2.svg", text: "Strategic Cost<br>Transformation" },
  { link: "/Images/Whatwedo/consulting/consulting-icon3.svg", text: "Offshore Advisory<br>Services" },
  { link: "/Images/Whatwedo/consulting/consulting-icon4.svg", text: "Process Consulting<br>Services" },
  { link: "/Images/Whatwedo/consulting/consulting-icon5.svg", text: "Enterprise Architecture<br>Services" },
  { link: "/Images/Whatwedo/consulting/consulting-icon6.svg", text: "Model-based Software<br>Process Improvement" },
  { link: "/Images/Whatwedo/consulting/consulting-icon7.svg", text: "Focused Process<br>Solutions" },
  { link: "/Images/Whatwedo/consulting/consulting-icon8.svg", text: "Six Sigma Consulting<br>Services" },
  { link: "/Images/Whatwedo/consulting/consulting-icon9.svg", text: "Quality<br>Management" },
  { link: "/Images/Whatwedo/consulting/consulting-icon10.svg", text: "Customized<br>Solutions" },
  { link: "/Images/Whatwedo/consulting/consulting-icon11.svg", text: "ITIL Process<br>Services" },
  { link: "/Images/Whatwedo/consulting/consulting-icon12.svg", text: "Social & Collaborative<br>Knowledge Management" },
  { link: "/Images/Whatwedo/consulting/consulting-icon13.svg", text: "Organization Change<br>Management" },
  { link: "/Images/Whatwedo/consulting/consulting-icon14.svg", text: "Customer Experience<br>Consulting" },
]

const expertiseIcon = [
  { link: "/Images/Whatwedo/consulting/expertise-icon1.svg", text: "Mobile<br>Technologies" },
  { link: "/Images/Whatwedo/consulting/expertise-icon2.svg", text: "Web<br>Technologies" },
  { link: "/Images/Whatwedo/consulting/expertise-icon3.svg", text: "Data<br>Analytics" },
  { link: "/Images/Whatwedo/consulting/expertise-icon4.svg", text: "Data<br>Warehousing" },
  { link: "/Images/Whatwedo/consulting/expertise-icon5.svg", text: "Relational/Non-Relational<br>Database Design" },
]

const operateIcon = [
  { link: "/Images/Whatwedo/consulting/operate-icon1.svg", text: "Information<br>Management" },
  { link: "/Images/Whatwedo/consulting/operate-icon2.svg", text: "Web-based<br>Solutions" },
  { link: "/Images/Whatwedo/consulting/operate-icon3.svg", text: "Business Intelligence<br>(OLAP and ETL)" },
  { link: "/Images/Whatwedo/consulting/operate-icon4.svg", text: "Project Governance<br>Design & Analysis" },
  { link: "/Images/Whatwedo/consulting/operate-icon5.svg", text: "Enterprise<br>Solutions" },
  { link: "/Images/Whatwedo/consulting/operate-icon6.svg", text: "Application<br>Development" },
  { link: "/Images/Whatwedo/consulting/operate-icon7.svg", text: "Storage &<br>Availability" },
  { link: "/Images/Whatwedo/consulting/operate-icon8.svg", text: "Technologies<br>Solutions" },
  { link: "/Images/Whatwedo/consulting/operate-icon9.svg", text: "Mobile<br>Security" },
  { link: "/Images/Whatwedo/consulting/operate-icon10.svg", text: "Networking<br>Solutions" },
]