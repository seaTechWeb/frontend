import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function App() {
    const textRef1 = useRef(null);
    const imageRef1 = useRef(null);
    const [imageHeight1, setImageHeight1] = useState('auto');

    const textRef2 = useRef(null);
    const imageRef2 = useRef(null);
    const [imageHeight2, setImageHeight2] = useState('auto');


    useEffect(() => {
        const handleResize = () => {
            if (textRef1.current) {
                setImageHeight1(`${textRef1.current.offsetHeight + 60}px`);
            }
            if (textRef2.current) {
                setImageHeight2(`${textRef2.current.offsetHeight + 60}px`);
            }
        };

        const handleModalShown = () => {
            handleResize();
        };

        window.addEventListener('resize', handleResize);

        const modalElement = document.querySelector('#mobileApp');
        if (modalElement) {
            modalElement.addEventListener('shown.bs.modal', handleModalShown);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            if (modalElement) {
                modalElement.removeEventListener('shown.bs.modal', handleModalShown);
            }
        };
    }, []);

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
        <div>
            <div data-bs-toggle="modal" className='' data-bs-target="#mobileApp">
                <button type="button" className="btn blueButton">Learn more &rarr;</button>
            </div>
            <div className="modal fade" id="mobileApp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                            <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ padding: '0px' }}>
                            <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/mobile/modals/mobile/application-maintenance-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                                            <div>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Application Maintenance</p>
                                                <p className='bannerHeading' style={{ marginBottom: '0px' }}>Application maintenance and support
                                                </p>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Fulfilling your needs – Our objective</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className='row imageContainer'>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={textRef1}>
                                            <p className='heading'>Application maintenance services</p>
                                            <p>According to an IT survey, a typical large enterprise today spends up to 80% of their IT budget on maintenance and support of their existing systems. This leaves only 20% of the budget for innovations and strategic projects. The 80-20 trap prevents IT companies from meeting the needs of demanding business users. CIOs are thus forced to choose between essential new efforts in analytics, cloud, mobile, or social and delivering high-quality IT services at a low cost.</p>
                                            <p>Fullestop provide application maintenance services for CIOs to help them build new-generation IT organizations. Hiring our AMS is one way to ensure your maintenance cost does not eat into your development budget. Our solutions ensure reduced cost, minimized risk, and improved ROI from their IT applications. Fullestop provide high-end Application Maintenance Services such as application support, user support, operations support, and end-user support.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/mobile/modals/mobile/application-maintenance-services-image.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <p className='heading text-center' style={{ marginBottom: '0px' }}>Application development and maintenance</p>
                                <p className='text-center'>Fullestop adopts a state-of-the-art approach which includes planning, analysis & design, installation, configuration, deployment, and support. We also provide additional services such as on-call production support, active maintenance, bug fixing, enhancement, user support, and training. In short, we manage the entire life cycle of application maintenance.</p>
                                <div className='row'>
                                    {maintenance.map((item, index) => (
                                        <div className='col-md-4' key={index} style={{ marginTop: '30px' }}>
                                            <div className='card cardDesign' style={{ minHeight: '250px' }}>
                                                <div className='card-body'>
                                                    <p style={{ fontSize: '28px', fontWeight: '600', marginBottom: '0px', paddingBottom: '0px' }}>{item.heading}</p>
                                                    <p style={{ fontSize: '32px', fontWeight: '900', marginTop: '' }}>Maintenance</p>
                                                    {(item.points).map((point, index) => (
                                                        <div style={{ marginBottom: '0px', display: 'flex' }} key={index}>
                                                            <p className="checkmark">✔  </p><p className="text ms-1">{point}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div style={{ marginTop: '60px', backgroundColor: 'black' }}>
                                <div className='container' style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex align-items-center'>
                                            <div>
                                                <p className='heading' style={{ color: 'white' }}>Our <b style={{ color: "#fdd835" }}>expertise</b></p>
                                                <p style={{ color: 'white', marginBottom: '20px' }}>Based on your needs, budget, and preferred engagement model, Fullestop can provide round-the-clock coverage for application portfolios. Our areas of expertise include Microsoft Technologies, Open Source platforms, diverse databases, programming languages, software solutions, and enterprise applications.</p>
                                                <p style={{ color: 'white' }}>Fullestop has a team with a good blend of Senior and Middle-Level Technological Architects, DBAs, and application consultants. We have a track record of maintaining critical applications for many Fortune 500 companies.</p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <img src='Images/Whatwedo/mobile/modals/mobile/expertise-image.webp' alt='experties' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px', paddingBottom: '10px' }}>
                                <div className='row imageContainer'>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={imageRef2} style={{ borderRadius: '10px', height: imageHeight2, width: "100%" }} src='/Images/Whatwedo/mobile/modals/mobile/application-maintenance-customer.webp' alt='' />
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={textRef2}>
                                            <p className='heading'>Our application maintenance services enable customers</p>
                                            <p>We offer comprehensive application maintenance services for common IT applications across multiple domains. Strong domain expertise, extensive technology skills, process focus, efficiency, and innovative approach enable us to provide value-added AMS to our clients worldwide.</p>
                                            {(services).map((content, index) => (
                                                <div style={{ marginBottom: '0px', display: 'flex' }} key={index}>
                                                    <p className="checkmark">✔  </p><p className="text ms-1">{content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#ECECEC', paddingTop: '10px', marginTop: '60px' }}>
                                <div className='container'>
                                    <div className='d-flex justify-content-center'>
                                        <div className='col-md-10'>
                                            <p className='text-center heading'>Our application maintenance methodology
                                                consists of four key phases</p>
                                        </div>
                                    </div>
                                    <div className="mt-2" style={{ paddingBottom: '20px' }}>
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
                                                <SwiperSlide key={index} className="swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                                    <div className='card cardDesign' style={{ minHeight: '420px' }}>
                                                        <div className='card-body' style={{ padding: '20px' }}>
                                                            <p style={{ fontSize: '24px', fontWeight: '700' }}>{card.heading}</p>
                                                            {(card.point).map((point, index) => (
                                                                <div style={{ marginBottom: '0px', display: 'flex' }} key={index}>
                                                                    <p className="checkmark">✔  </p><p className="text ms-1">{point}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className="customerneed-section">
                                    <p className="heading text-center mb-4">Our application maintenance and supportservices encompass such activities as</p>
                                    <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
                                        {activities.map((activitie, index) => (
                                            <li
                                                className="d-flex align-items-center justify-content-center iconCardDesign"
                                                key={index}
                                            >
                                                <figure>
                                                    <img src={activitie.imgSrc} alt='SEO' />
                                                </figure>
                                                <strong dangerouslySetInnerHTML={{ __html: activitie.title }} />
                                            </li>
                                        ))}
                                    </ul>
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
    )
}


const services = [
    "Lower risks and increase predictability",
    "Receive timely release & enhancement of projects",
    "Improve stability and efficiency of critical applications",
    "Refocus their energies on strategic initiatives",
    "Keep their applications in line with the latest technologies",
    "Migrate to new and emerging technologies",
    "Improve quality of service",
    "Reduce total cost of ownership",
]

const maintenance = [
    {
        heading: "Corrective",
        points: [
            "Identify and remove defects",
            "Correct actual errors",
        ]
    },
    {
        heading: "Perfective",
        points: [
            "Improve performance, dependability, and maintainability",
            "Add new functionality",
        ]
    },
    {
        heading: "Adaptive",
        points: [
            "Adapt to a new/upgraded environment (e.g., hardware, operating system, middleware)"
        ]
    },
    {
        heading: "Preventive",
        points: [
            "Identify and detect latent faults",
            "Systems with safety concerns",
        ]
    },
    {
        heading: "Emergency",
        points: [
            "Unscheduled corrective maintenance"
        ]
    },
]


const cardData = [
    {
        heading: "Pre-Transition",
        point: [
            "Feasibility study",
            "As in Assessment",
            "Configure the right maintenance model for offshore",
            "Understand and document scope of work",
            "Understand and document key parameters for knowledge transfer",
            "Construct a team according to the platform in consideration",
        ]
    },
    {
        heading: "Transition",
        point: [
            "Deploy offshore team and provide training",
            "Understand the environment for which maintenance & support is required",
            "Do dry-runs and quality testing for benchmarking",
            "Enhance and stabilize support processes",
            "Schedule and distribute work load",
        ]
    },
    {
        heading: "Maintenance",
        point: [
            "Provide offshore maintenance and help desk support",
            "Review & Control",
            "Benchmark performance",
            "Enhance co-ordination and changes to support processes",
        ]
    },
    {
        heading: "Support",
        point: [
            "Provide Steady state support",
            "Updates, versioning and end-user support",
        ]
    },
]

const activities = [
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/cakephp-application1.svg", title: "Documentation <br/> development" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/consulting-icon1.svg", title: "Error tracking<br/> & debugging" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/consulting-icon4.svg", title: "Version <br/> enhancements" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/consulting-icon5.svg", title: "Comprehensive <br/>user support" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/consulting-icon6.svg", title: "Technical <br/> troubleshooting" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/consulting-icon7.svg", title: "Performance <br/> monitoring" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/consulting-icon8.svg", title: "Performance <br/> testing" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/development-linux4.svg", title: "Version <br/> upgrades" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/enterpirse-portal-image4.svg", title: "Quality <br/> assurance testing" },
    { imgSrc: "/Images/Whatwedo/mobile/modals/mobile/enterprise-benefits-icon.svg", title: "Offshore Product <br/> Maintenance" },
]

