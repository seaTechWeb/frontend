import React, { useState, useRef, useEffect } from 'react';
import ContactPage from '../../ContactPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function It() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const managedTextRef = useRef(null);
    const managedImageRef = useRef(null);
    const supportTextRef = useRef(null);
    const supportImageRef = useRef(null);
    const outsourcingTextRef = useRef(null);
    const outsourcingImageRef = useRef(null);
    const serviceTextRef = useRef(null);
    const serviceImageRef = useRef(null);

    const [imageHeight1, setImageHeight1] = useState('auto');
    const [imageHeight2, setImageHeight2] = useState('auto');
    const [imageHeight3, setImageHeight3] = useState('auto');
    const [imageHeight4, setImageHeight4] = useState('auto');

    useEffect(() => {
        const handleResize = () => {
            setImageHeight1(managedTextRef.current?.offsetHeight || 'auto');
            setImageHeight2(supportTextRef.current?.offsetHeight || 'auto');
            setImageHeight3(outsourcingTextRef.current?.offsetHeight || 'auto');
            setImageHeight4(serviceTextRef.current?.offsetHeight || 'auto');
        };

        const handleModalShown = () => {
            handleResize();
        };

        window.addEventListener('resize', handleResize);

        const modalElement = document.querySelector('#consultingIT');
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
            <div data-bs-toggle="modal" className='' data-bs-target="#consultingIT">
                <button type="button" className="btn blueButton">Learn more &rarr;</button>
            </div>
            <div className="modal fade" id="consultingIT" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                            <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ width: '100% !important', padding: 0 }}>
                            <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/consulting/modals/managed-IT-services-banner.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                                            <div>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Managed IT Solutions</p>
                                                <p className='bannerHeading' style={{ marginBottom: '0px' }}>Managed IT services for small business</p>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>We are accredited by Microsoft, and are a Microsoft gold competency partner.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '40px' }}>
                                <div className='row imageContainer'>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={managedTextRef}>
                                            <p className='heading'> Managed IT solutions</p>
                                            <p>IT systems should be simple and they should work. As IT systems have become more complex, the work has become more time-consuming and expensive. This is where Fullestop can help you, by offering its tailor-made managed IT Solutions.</p>
                                            <p>Our managed IT solutions can save you up to 30% on your operational IT costs and can reduce resource requirements by 50%. Fullestop offers you a range of operational management services that help you create and manage a better IT infrastructure, both traditional and virtual.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={managedImageRef} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/consulting/modals/managed-IT-solutions.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div>
                                    <p className='text-center heading' style={{ marginBottom: '0px' }}>Our managed IT service offers</p>
                                    <p className='text-center'>We offer IT Support, Managed IT services and IT Outsourcing to clients with or without an in-house IT support function. Fullestop supports a wide range of IT technologies from leading vendors including Microsoft, Oracle, IBM, HP and VMware. Some of the services we deliver are:</p>
                                </div>
                                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={supportTextRef}>
                                            <p style={{ fontSize: '30px', fontWeight: '900' }}>Managed IT support</p>
                                            {support.map((support, index) => (
                                                <div style={{ display: 'flex' }} key={index}>
                                                    <p className="checkmark">✔  </p><p className="text ms-1">{support}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={supportImageRef} style={{ borderRadius: '10px', height: imageHeight2, width: "100%" }} src='/Images/Whatwedo/consulting/modals/managed-IT-support.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className='row imageContainer' style={{ marginTop: '30px' }}>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={outsourcingImageRef} style={{ borderRadius: '10px', height: imageHeight3, width: "100%" }} src='/Images/Whatwedo/consulting/modals/IT-services-and-outsourcing.webp' alt='' />
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={outsourcingTextRef}>
                                            <p style={{ fontSize: '40px', fontWeight: '900' }}>IT services and IT outsourcing</p>
                                            <p>Hiring our managed IT services ensures you focus on your business and leave everything else to us. Our packages are tailor-made to meet your specific needs & budget. Fullestop managed IT services can be delivered 24 hours a day, and 365 days a year.</p>
                                            {outsourcing.map((support, index) => (
                                                <div style={{ display: 'flex' }} key={index}>
                                                    <p className="checkmark">✔  </p><p className="text ms-1">{support}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={serviceTextRef}>
                                            <p style={{ fontSize: '30px', fontWeight: '900' }}>Our IT managed services enable you to</p>
                                            <p>Hiring our managed IT services ensures you focus on your business and leave everything else to us. Our packages are tailor-made to meet your specific needs & budget. Fullestop managed IT services can be delivered 24 hours a day, and 365 days a year.</p>
                                            {service.map((support, index) => (
                                                <div style={{ display: 'flex' }} key={index}>
                                                    <p className="checkmark">✔  </p><p className="text ms-1">{support}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={serviceImageRef} style={{ borderRadius: '10px', height: imageHeight4, width: "100%" }} src='/Images/Whatwedo/consulting/modals/managed-services-enable.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px', marginBottom:'60px' }}>
                                <p className='text-center heading'>Why Fullestop – because we deliver</p>
                                <div className="mt-2">
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
                                                <div className='card' style={{ border: '2px solid #bdbdbd', borderRadius: '10px', minHeight: '240px', backgroundColor: 'white' }}>
                                                    <div className='card-body' style={{ padding: '20px' }}>
                                                        <p style={{ fontSize: '24px', fontWeight: '700' }}>{card.heading1}</p>
                                                        <p style={{ fontSize: '24px', fontWeight: '900' }}>{card.heading2}</p>
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
                        <div className="modal-footer text-center" style={{ backgroundColor: '#0f0f49', border: 'none', padding: '20px' }}>
                            <button type="button" className="btn greenButton" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const support = [
    "Fully Managed or a Co-Managed partnership",
    "Our Intelligent Monitoring process encompasses both of these aspects.",
    "Management of security, availability, patch updates, data backups and recovery",
    "Bespoke Service Level Agreement for 24x7x365",
    "Network infrastructure management and security",
    "Virtualization planning and management",
    "Desktop & mobile workforce hardware & software support",
    "Server and data storage management"
];

const service = [
    "Reduce operational costs and increase service efficiency of your business",
    "Reduce business risks and complexity, making your IT budget more stable and predictable",
    "Prevent your business from sudden and expensive system downtime",
    "Focus on your core business and deliver better services to your customers",
    "Rest assured that the IT management of your services is in expert hands"
];

const outsourcing = [
    "Data backup and disaster recovery",
    "Industry-standard software application support",
    "Internet connectivity, remote access and managed firewalls",
    "Cloud computing and server hosting",
    "IT and software asset management",
    "Project management and consultancy",
    "Software development and office automation",
    "Website and e-commerce development"
];

const cardData = [
    {
        heading1: "Innovative",
        heading2: "Ideas",
        paragraph: "Our IT experts use latest technologies and tried & tested methods to ensure your business operates the way you want it to."
    },
    {
        heading1: "Latest",
        heading2: "Technologies",
        paragraph: "Developing and managing web-based e-learning portals, platforms. Creating engaging, highly interactive user interfaces"
    },
    {
        heading1: "Great",
        heading2: "Network",
        paragraph: "We have partnership with credible software and hardware vendors to meet your IT needs."
    },
    {
        heading1: "Successful",
        heading2: "Projects",
        paragraph: "We improve the efficiency of your business to make it business more successful."
    }
];
