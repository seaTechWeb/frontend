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
      <Link type="button" to="/whatWeWebDevelopment" className="btn btn-dark my-3">Learn More about Web Development &rarr;</Link>
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
      <Link type="button" to="/whatWeMobileDevelopment" className="btn btn-dark my-3">Learn More about Mobile Development &rarr;</Link>
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
      <Link type="button" to="/whatWeDigitalMarketing" className="btn btn-dark my-3">Learn More about Digital Marketing &rarr;</Link>
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
      <Link type="button" to="/whatWeconsulting" className="btn btn-dark my-3">Learn More about CIAS &rarr;</Link>
    </div>
  </div>
</div>
</section>



const webPoint = ["Functional prototyping", "Web development", "Digital activation", "Strategy & systems", "UX & UI design"]
const mobilePoint = ["Brand Strategy & Experience", "Content Strategy", "Guidelines & Systems", "Go-To-Market Strategy", "Trends & Insights", "Identity Design"]
const marketPoint = ["Growth strategy", "Launch strategies", "Social media marketing", "Email marketing", "PPC campaigns", "SEO enablement"]
const consultingPoint = ["Business support system", "Customized solutions", " Operation support system", "Dedicated teams", "Enterprise application solutions", "Managed IT services"]