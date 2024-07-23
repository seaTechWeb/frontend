import React, { useState, useEffect, useRef } from 'react'
import ContactPage from '../ContactPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function DigitalMarketing() {
  const [currentTab, setCurrentTab] = useState(0);
  const marketingImageRef1 = useRef(null);
  const marketingImageRef2 = useRef(null);
  const marketingTextRef1 = useRef(null);
  const marketingTextRef2 = useRef(null);
  const [imageHeight1, setImageHeight1] = useState('0px')
  const [imageHeight2, setImageHeight2] = useState('0px')
  useEffect(() => {
    const handleResize = () => {
      if (marketingTextRef1.current && marketingImageRef1.current) {
        const textHeight = marketingTextRef1.current.clientHeight;
        setImageHeight1(`${textHeight + 60}px`);
      }
      if (marketingTextRef2.current && marketingImageRef2.current) {
        const textHeight = marketingTextRef2.current.clientHeight;
        setImageHeight2(`${textHeight + 60}px`);
      }
    };
    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleClick = (tab) => {
    setCurrentTab(tab)
  }
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };
  return (
    <div style={{ marginTop: '86px' }}>
      <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(/Images/Whatwedo/marketing-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
              <div>
                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Marketing Services</p>
                <p className='bannerHeading' style={{ marginBottom: '0px' }}>Digital marketing services for your business</p>
                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Get valuable traffic and brand value with best internet marketing company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <div className='row imageContainer'>
          <div className='col-md-6 d-flex align-items-center'>
            <div ref={marketingTextRef1}>
              <p className='heading'>Great qualified leads & rank high on search engines</p>
              <p>Having a Digital Marketing Strategy is no longer an optional choice. With its reach, it is now an essential part of the mix for any respectable organisation. At SeaTech, we understand that as a business, your key objective is to reach your customers at the right place and at the right time.Our focus is your</p>
              <p>customers and understanding their needs is where we start from. We have the knowledge and the tools to understand what your customers are looking for and what are their key drivers for using your services or buying your products. We look at keyword analysis to understand intent, evaluate what your competition is up to and come up with an actionable digital marketing strategy that helps you achieve your customer engagement goals. From SEO, SMO, and PPC to email marketing and managing your online reputation, our team looks into all to make your campaign a success.</p>
              <p>Implementations are targeted, synergetic and measurable and we ensure that during the campaign, detailed discussions and reporting are available for you to gauge the progress and to see if the campaign is on its course to meet its KRAs. If you are looking for a customised solution for your Digital marketing efforts - which includes SEO, SMO, and PPC, Email Marketing and ORM, drop us a line and we would be happy to run an analysis for your needs.

              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='imageDesign' ref={marketingImageRef1} style={{ borderRadius: '10px',height:imageHeight1, width: '100%' }} src='/Images/Whatwedo/Great-Qualified-Leads-&-Rank.webp' alt='' />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '60px', paddingTop: '50px', paddingBottom: '70px', backgroundColor: 'black', color: 'whitesmoke' }}>
        <div className='container'>
          <div className='d-flex justify-content-center flex-column flex-md-row'>
            <div className='d-flex justify-content-center'>
              <p className='heading' style={{marginRight: '20px' }}>Digital</p>
              <p className='heading' style={{marginRight: '20px', color: '#fdd835' }}>marketing</p>
            </div>
            <p className='text-center heading' style={{marginRight: '20px' }}>services</p>
          </div>
          <p className='text-center' style={{ fontSize: '16px' }}>Our 4 step Digital Marketing process ensures that your business gets the most out of our services.</p>
          <div className="d-flex justify-content-center flex-column flex-md-row" >
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className={`btn ${currentTab === 0 ? 'btn-primary' : 'btn-outline-primary'} col-12 col-md-auto`} style={{ width: '150px', margin: '0 auto' }} onClick={() => handleClick(0)}>SEO</button>
              <button type="button" className={`btn ${currentTab === 1 ? 'btn-primary' : 'btn-outline-primary'} col-12 col-md-auto`} style={{ width: '150px', margin: '0 auto' }} onClick={() => handleClick(1)}>PPC Solutions</button>
              <button type="button" className={`btn ${currentTab === 2 ? 'btn-primary' : 'btn-outline-primary'} col-12 col-md-auto`} style={{ width: '150px', margin: '0 auto' }} onClick={() => handleClick(2)}>Social Media</button>
              <button type="button" className={`btn ${currentTab === 3 ? 'btn-primary' : 'btn-outline-primary'} col-12 col-md-auto`} style={{ width: '150px', margin: '0 auto' }} onClick={() => handleClick(3)}>Content Marketing</button>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <div className="row">
              <div className="col-md-5">
                <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: '95%' }} src={service[currentTab].ImageLink} alt='' />
              </div>
              <div className='col-md-7 align-self-center' >
                <div>
                  <p style={{ fontSize: '30px', fontWeight: '500', marginBottom: '30px' }}>{service[currentTab].Heading}</p>
                  <p style={{ fontSize: '18px', fontWeight: '300', marginBottom: '40px' }}>{service[currentTab].title1}</p>
                  <p style={{ fontSize: '18px', fontWeight: '300' }}>{service[currentTab].title2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="customerneed-section py-4 py-md-5 pb-3">
          <h2 className="heading text-center mb-4">our SEO solutions include</h2>
          <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
            {seoSolutions.map((solution, index) => (
              <li
                className="d-flex align-items-center justify-content-center iconCardDesign"
                key={index}
              >
                <figure>
                  <img src={solution.imgSrc} alt='SEO' />
                </figure>
                <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <div className='row imageContainer'>
          <div className='col-md-5'>
            <img className='imageDesign' ref={marketingImageRef2} style={{ borderRadius: '10px', height : imageHeight2,width: '100%' }} src='/Images/Whatwedo/seo-solutionss.webp' alt='' />
          </div>
          <div className='col-md-7 d-flex align-items-center'>
            <div ref={marketingTextRef2}>
              <p>With over 23 years of industry experience, we can promise you to achieve your first page listing, and more importantly, keep you there. Our SEO solutions get you web traffic through search engine result pages (SERP), our SEM solutions take a more active approach, showcasing your website on search engines to drive more web and showroom traffic, leads and opportunities to sell.</p>
              <p>We can stand as a one-stop solution to help you with your internet marketing requirements. We can help you save on your marketing costs and increase your ROI with proven strategies that include:</p>

              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Guide you on your SEO and SEM campaigns</span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Optimise website content, link structure and site architecture</span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Analyse keywords, competition, identify and quantify opportunities and gaps</span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Promote websites, build quality inbound links, distribute content, articles and press releases
                </span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Protect and promote your brand's online reputation on all search & social channels</span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Manage successful SEO campaigns and online marketing projects</span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Write blog posts, tweets, articles, reviews and whitepapers</span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Measure business-specific success metrics, analytics, SERPs, KPIs and ROI</span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <span className="checkmark">✔  </span><span className="text">Deliver organic Search Engine Optimisation (SEO), paid Search (PPC) and SEM Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' ,marginBottom:'60px' }}>
        <div className='d-flex justify-content-center'>
          <div className='col-md-6'>
            <p className='text-center heading'>Why choose SeaTech for digital marketing services?</p>
          </div>
        </div>
        <div className="mt-2" style={{paddingBottom:'20px'}}>
          <Swiper
            onSwiper={setSwiperInstance}
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}

            breakpoints={{
              0: { slidesPerView: 1 },
              520: { slidesPerView: 2 },
              950: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper-container"
          >
            {cardData.map((card, index) => (
              <SwiperSlide  key={index} className="swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div  className='card cardDesign' style={{  minHeight: '280px' }}>
                  <div className='card-body' style={{ padding: '20px' }}>
                    <p style={{ fontSize: '24px', fontWeight: '700' }}>{card.heading}</p>
                    <p>{card.paragraph}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ContactPage />
    </div>
  )
}


const service = [
  {
    ImageLink: "/Images/Whatwedo/digital/services-front4.webp",
    Heading: "SEO",
    title1: "Search engine optimization is an essential part of website development and web marketing. An SEO-friendly website will automatically rank higher in search results obtained from popular search engines such as Google, Yahoo and Bing. As a consequence, this will significantly impact the websites traffic. It is vital to make your website SEO-friendly to enhance your internet visibility, brand image and traffic.",
    title2: "SeaTech has extensive experience in search engine optimization. We can develop high-ranking websites from scratch and can also turn an already existing website into an SEO-friendly website. We have with us, SEO experts who completely understand the workings of search engines nd crawlers, and hence, can help you enhance your site ranking and attract more traffic."
  },
  {
    ImageLink: "/Images/Whatwedo/digital/ppc-solutions.webp",
    Heading: "PPC Solutions",
    title1: "Avid web users like you love to search and search for only one thing – information. in the process of finding information, you would have stumbled upon what is known as a sponsored listing.",
    title2: "This is a relevant ad (typically a text ad) with a link to a destination page which is displayed when you type in a specific phrase in the search engine. A fee is charged for every click of each link, with the amount bid for the click the main factor determining its position. The method for achieving placement in this sponsored links part of the page is called paid search (aka ‘pay-per-click’ or PPC)."
  },
  {
    ImageLink: "/Images/Whatwedo/digital/social-media-marketing.webp",
    Heading: "Social media",
    title1: "Social sites have become the hub for businesses to build relationships that go miles in reaching out to the intended customers- that too in an amicable manner. In simple words, Marketing using social media resources is an idyllic platform to catch the eyeball.",
    title2: "As per the Social Media Marketing 2010 Industry report by Michael A. Stelzner, a significant 85% of all marketers indicated that their social media efforts have generated exposure for their businesses. Others sited improved traffic as another major benefit leading to the conclusion that social media marketing is here to stay for a long time to come. And that probably gives us reasons to develop it for you!"
  },
  {
    ImageLink: "/Images/Whatwedo/digital/content-management-solutions.webp",
    Heading: "Content Marketing",
    title1: "By crafting compelling, worthy, and appealing content, you can take your business to the next level. Designing an effective content strategy is all it takes to enhance visibility and brand promotion.",
    title2: "An Engaging Content Strategy is Our Motto. From preparing a game plan to content production, from publishing to distribution and promotion, SeaTech's industry-leading content marketing services are engineered to achieve your business goals. Fuel your business with 100% original, powerful, and engaging content for your website, email campaigns, and social media platforms."
  },
]

const cardData = [
  {
    heading: "Experience",
    paragraph: "SEO is a very dynamic and undefined science you learn from experience. At SeaTech, we have been offering SEO and SEM solutions for the last 22 years and have successfully managed hundreds of projects."
  },
  {
    heading: "Team",
    paragraph: "It is the individuals, which make the difference. Our online marketing team consists of project managers, on-page experts, off-page experts, content writers, programmers and quality experts, all working on a single objective of providing high customer satisfaction and results."
  },
  {
    heading: "R&D",
    paragraph: "Search engines continuously roll out new updates. You need to stay updated. At SeaTech, we have a team of research specialists closely monitoring all campaigns, collating data and refining the strategies as per market trends."
  },
  {
    heading: "Communication",
    paragraph: "Communication is the key to any online marketing campaign's success. Our project managers and executives remain in touch 24/7, 365 days a year."
  },
  {
    heading: "Industry Credentials & Client Feedback",
    paragraph: "Background check. SeaTech has managed its reputation as a leading name in the SEO and SEM industry. Our clients appraise us for our results, and their words speak for our quality."
  }
]
const seoSolutions = [
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions1.svg', text: 'Rank <br> Optimization' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions2.svg', text: 'Title &amp; META <br> Tag Optimization' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions5.svg', text: 'Tracking <br> &amp; Reviewing' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions6.svg', text: 'Powerful <br> Linkbuilding' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions7.svg', text: 'Social <br> Networking' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions11.svg', text: 'SEO Consulting <br> &amp; Analysis' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions12.svg', text: 'Link <br> Exchange' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions13.svg', text: 'Directory <br> Submission' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions14.svg', text: 'Keyword <br> Research &amp; Analysis' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions15.svg', text: 'Web <br> Traffic Analysis' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions16.svg', text: 'On-page and <br> off-page optimization' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions17.svg', text: 'Blog <br> Writing' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions18.svg', text: 'Social <br> Bookmarking' },
  { imgSrc: '/Images/Whatwedo/digital/seo/seo-solutions19.svg', text: 'Press <br> Release' },
];
