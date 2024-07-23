import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';


export default function Flutter() {
    const textRef1 = useRef(null);
    const imageRef1 = useRef(null);

    const [imageHeight1, setImageHeight1] = useState('auto');

    useEffect(() => {
        const handleResize = () => {
            setImageHeight1(textRef1.current?.offsetHeight || 'auto');
        };

        const handleModalShown = () => {
            handleResize();
        };

        window.addEventListener('resize', handleResize);

        const modalElement = document.querySelector('#mobileFlutter');
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

    return (
        <div>
            <div data-bs-toggle="modal" className='' data-bs-target="#mobileFlutter">
                <button type="button" className="btn blueButton">Learn more &rarr;</button>
            </div>
            <div className="modal fade" id="mobileFlutter" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                            <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ padding: '0px' }}>
                            <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/mobile/modals/Flutter/flutter-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                                            <div>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Mobile app development</p>
                                                <p className='bannerHeading' style={{ marginBottom: '0px' }}>Flutter app development company</p>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>We build reliable smartphone applications on the Flutter Platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className='row imageContainer'>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={textRef1}>
                                            <p className='heading'>Flutter development services </p>
                                            <p>The digital world is spinning towards making the Mobile App development more productive and economical for modern Businesses. Hybrid mobile app development is gaining more and more popularity and provides opportunities to build apps for both iOS and Android platforms using one single code base, enabling to reach a larger audience.</p>
                                            <p>Flutter, a revolutionary cross-platform framework from the search engine giant Google, is designed to build powerful and beautiful native apps in record time. With a robust architecture it includes a rich set of widgets that deliver an extremely customizable and extensible look and feel.</p>
                                            <p>Fullestop aims to build apps that provide better engagement with your target customers. Being into technology for more than 19 years, we know what it takes to build an user-centric app that acquires new customers, retains them, and delivers a value. We understand the science behind the UX and all aspects of it that contribute to the overall relationship between customers and your product. We pay attention to the little things and create an exceptional experience that delights!</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/mobile/modals/Flutter/extensive-experience-flutter.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '60px', paddingBottom: '60px' }}>
                                <div className="container" style={{ backgroundColor: '#ececec' }}>
                                    <div className="row" style={{ marginTop: '40px' }}>
                                        <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center">
                                            <div>
                                                <h2 className="heading mb-4">Building the fact that flutters</h2>
                                                <div className="accordion" id="FlutterAccordian">
                                                    {accordionItems.map((item, index) => (
                                                        <div
                                                            className="accordion-item"
                                                            key={index}
                                                            style={{
                                                                borderTopLeftRadius: index === 0 ? '10px' : '',
                                                                borderTopRightRadius: index === 0 ? '10px' : '',
                                                                borderBottomLeftRadius: index === accordionItems.length - 1 ? '10px' : '',
                                                                borderBottomRightRadius: index === accordionItems.length - 1 ? '10px' : '',
                                                                overflow: 'hidden',
                                                            }}
                                                        >
                                                            <h2 className="accordion-header" id={`FlutterHeading${index + 1}`}>
                                                                <button
                                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={`#FlutterCollapse${index + 1}`}
                                                                    aria-expanded={index === 0}
                                                                    aria-controls={`FlutterCollapse${index + 1}`}
                                                                >
                                                                    <b>{item.title}</b>
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`FlutterCollapse${index + 1}`}
                                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                                aria-labelledby={`FlutterHeading${index + 1}`}
                                                                data-bs-parent="#FlutterAccordian"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="careersview" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                                                        {(item.content).map((content, index) => (
                                                                            <div style={{ marginBottom: '10px', display: 'flex' }} key={index}>
                                                                                <p className="checkmark">✔  </p><p className="text ms-1">{content}</p>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-5">
                                            <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="FlutterAccordian2">
                                                {images.map((image, index) => (
                                                    <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                                                        <div
                                                            id={`FlutterCollapse${index + 1}`}
                                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                            aria-labelledby={`FlutterHeading${index + 1}`}
                                                            data-bs-parent="#FlutterAccordian2"
                                                        >
                                                            <div className="accordion-body" style={{ borderRadius: '10px' }}>
                                                                <img
                                                                    src={image.jpg}
                                                                    alt="solutions"
                                                                    loading="lazy"
                                                                    width="100%"
                                                                    style={{ border: 'none', borderRadius: '10px', color: 'red' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
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

const accordionItems = [
    {
      title: 'Why us',
      content: [
        "22+ Years Of Experience",
        "Delivered from the depth of our world class expertise",
        "A diligent Quality Assurance process.",
        "Expert team – a team that works for the top Brands",
        "Reliable, Robust and Scalable Applications",
        "Mature Work Processes",
        "Flexible Engagement Models",
        "Agile methodology and DevOps",
      ]
    },
    {
      title: 'Our Flutter Development Services',
      content: [
        "Flutter iOS app development",
        "Flutter Android App Development",
        "Flutter UI/UX Consultation",
        "Flutter App Maintenance",
        "Flutter Team Augmentation",
        "Server Side API Development",
        "SQL and NoSQL Database Integrations",
        "Migration to Flutter",
        "Minimum Viable product (MVP)",
      ]
    }
  ];
  
  const images = [
    {
      jpg: '/Images/Whatwedo/mobile/modals/reactNative/react-native-architecture-image1.webp',
    },
    {
      jpg: '/Images/Whatwedo/mobile/modals/reactNative/react-native-architecture-image2.webp',
    }
  ];
  