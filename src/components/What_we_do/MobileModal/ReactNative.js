import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';


export default function ReactNative() {
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

        const modalElement = document.querySelector('#mobileReactNative');
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
            <div data-bs-toggle="modal" className='' data-bs-target="#mobileReactNative">
                <button type="button" className="btn blueButton">Learn more &rarr;</button>
            </div>
            <div className="modal fade" id="mobileReactNative" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                            <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ padding: '0px' }}>
                            <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/mobile/modals/reactNative/react-native-banner.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                                            <div>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Mobile app development</p>
                                                <p className='bannerHeading' style={{ marginBottom: '0px' }}>React native app development company</p>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>For the react native Platform, we create robust mobile application.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className='row imageContainer'>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={textRef1}>
                                            <p className='heading'>React native development
                                            services</p>
                                            <p>An astronomical rise in the Mobile trend has transformed the way Businesses interact with their customers. Smart technologies are trying to bridge the gap between the performance and the cost of development, allowing you to capitalize on the growing mobile market.</p>
                                            <p>React Native is an unique, out-of-the-box technology that provides native-like experiences in Hybrid apps. Backed by Facebook, React Native has a mature development road-map and a huge community support. It comes loaded with reusable components that enable shorter development cycles, efficient deployments and better performance – a side-effect-free solution for your next generation Hybrid App.Fullestop, an innovation focused digital agency, uses its expertise and proven methodologies to get you ahead of the curve and deliver an amazing React Native experience. We deliver high quality influential apps, with a focus on usability – a key element that drives user acquisition, engagement and retention.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/mobile/modals/reactNative/extensive-experience-react-native.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '60px', paddingBottom: '60px' }}>
                                <div className="container" style={{ backgroundColor: '#ececec' }}>
                                    <div className="row" style={{ marginTop: '40px' }}>
                                        <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center">
                                            <div>
                                                <h2 className="heading mb-4">React native architecture</h2>
                                                <div className="accordion" id="ReactNativeAccordian">
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
                                                            <h2 className="accordion-header" id={`ReactNativeHeading${index + 1}`}>
                                                                <button
                                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={`#ReactNativeCollapse${index + 1}`}
                                                                    aria-expanded={index === 0}
                                                                    aria-controls={`ReactNativeCollapse${index + 1}`}
                                                                >
                                                                    <b>{item.title}</b>
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`ReactNativeCollapse${index + 1}`}
                                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                                aria-labelledby={`ReactNativeHeading${index + 1}`}
                                                                data-bs-parent="#ReactNativeAccordian"
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
                                            <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="ReactNativeAccordian2">
                                                {images.map((image, index) => (
                                                    <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                                                        <div
                                                            id={`ReactNativeCollapse${index + 1}`}
                                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                            aria-labelledby={`ReactNativeHeading${index + 1}`}
                                                            data-bs-parent="#ReactNativeAccordian2"
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
      title: 'Our react native development services',
      content: [
        "React Native iOS App Development",
        "React Native Android App Development",
        "React Native UI/UX Consultation",
        "React Native App Maintenance",
        "React Native Team Augmentation",
        "Server Side API Development",
        "SQL and NoSQL Database Integrations",
        "Migration to React Native",
        "Minimum Viable product (MVP)"
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
  