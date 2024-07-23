import React, { useRef, useEffect, useState } from 'react';
import ContactPage from '../../ContactPage';


export default function Android() {
    const [currentTab, setCurrentTab] = useState(0);
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

        const modalElement = document.querySelector('#mobileAndroid');
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
    const handleClick = (tab) => {
        setCurrentTab(tab)
    }
    return (
        <div>
            <div data-bs-toggle="modal" className='' data-bs-target="#mobileAndroid">
                <button type="button" className="btn blueButton">Learn more &rarr;</button>
            </div>
            <div className="modal fade" id="mobileAndroid" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                            <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ padding: '0px' }}>
                            <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/mobile/modals/Android/android-page-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                                            <div>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Mobile app development</p>
                                                <p className='bannerHeading' style={{ marginBottom: '0px' }}>Android app development company</p>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>We build powerful mobile apps for the Android Platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className='row imageContainer'>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={textRef1}>
                                            <p className='heading'>Android application development services</p>
                                            <p>Fullestop renders qualitative android solutions to enterprises across the globe. We have proven expertise in developing Android applications that ensure value-added services to your mobile operations..</p>
                                            <p>Harnessing the optimum potential of the intricate Android SDK platform, we utilize plethora of development tools to explore unlimited product development possibilities. At Fullestop, we conceptualize, develop, design, test and deploy the Android solutions as per your demand.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='/Images/Whatwedo/mobile/modals/Android/android-smartphone-architecture.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#ececec', paddingTop: '10px', marginTop: '60px', paddingBottom: '60px' }}>
                                <div className="container" style={{ backgroundColor: '#ececec' }}>
                                    <div className="row" style={{ marginTop: '40px' }}>
                                        <div className="col-lg-6 col-xl-7 pe-xl-5 align-self-center">
                                            <div>
                                                <h2 className="heading mb-4">Android smartphone
                                                    architecture</h2>
                                                <div className="accordion" id="AndroidAccordian">
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
                                                            <h2 className="accordion-header" id={`AndroidHeading${index + 1}`}>
                                                                <button
                                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={`#AndroidCollapse${index + 1}`}
                                                                    aria-expanded={index === 0}
                                                                    aria-controls={`AndroidCollapse${index + 1}`}
                                                                >
                                                                    <b>{item.title}</b>
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`AndroidCollapse${index + 1}`}
                                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                                aria-labelledby={`AndroidHeading${index + 1}`}
                                                                data-bs-parent="#AndroidAccordian"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="careersview" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                                                        <p>{item.paragraph}</p>
                                                                        {(item.content).map((content, index) => (
                                                                            <div style={{ display: 'flex' }} key={index}>
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
                                            <div className="accordion accordion-img mt-4 mt-lg-0 text-center" id="AndroidAccordian2">
                                                {images.map((image, index) => (
                                                    <div className="accordion-item" key={index} style={{ border: 'none', backgroundColor: '#ececec' }}>
                                                        <div
                                                            id={`AndroidCollapse${index + 1}`}
                                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                            aria-labelledby={`AndroidHeading${index + 1}`}
                                                            data-bs-parent="#AndroidAccordian2"
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

                            <div style={{ paddingTop: '50px', paddingBottom: '70px', backgroundColor: 'black', color: 'whitesmoke' }}>
                                <div className='container'>
                                    <div className='d-flex justify-content-center flex-column flex-md-row'>
                                        <div className=''>
                                            <p className='heading text-center'>Iphone to <b style={{color: '#fdd835' }}> android app</b> conversion</p> 
                                        </div>
                                    </div>
                                    <p className='text-center' style={{ fontSize: '16px' }}>We also offer iPhone to Android conversion services. If you have an iPhone app and want it to run on Android devices, we can do this for you. We create an app compatible with all Android devices, tabs etc.</p>
                                    <div className="d-flex justify-content-center flex-column flex-md-row" >
                                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" className={`btn ${currentTab === 0 ? 'btn-primary' : 'btn-outline-primary'} col-12 col-md-auto`} style={{ width: '150px', margin: '0 auto' }} onClick={() => handleClick(0)}>Technologies</button>
                                            <button type="button" className={`btn ${currentTab === 1 ? 'btn-primary' : 'btn-outline-primary'} col-12 col-md-auto`} style={{ width: '150px', margin: '0 auto' }} onClick={() => handleClick(1)}>Industries</button>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '30px' }}>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: '95%' }} src={service[currentTab].ImageLink} alt='' />
                                            </div>
                                            <div className='col-md-7 align-self-center' >
                                                <div>
                                                    <p style={{ fontSize: '18px', fontWeight: '300', marginBottom: '40px' }}>{service[currentTab].title1}</p>
                                                    <div className='row'>
                                                        {(service[currentTab].points).map((content, index) => (

                                                            <div className='col-md-6' style={{ display: 'flex' }} key={index}>
                                                                <p className="checkmark" style={{marginBottom:'2px'}}>✔  </p><p className="text ms-1" style={{marginBottom:'2px'}}>{content}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <p style={{ fontSize: '18px', fontWeight: '300' }}>{service[currentTab].title2}</p>
                                                </div>
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
        title: 'Android app development',
        paragraph: 'Our Android developers have years of experience in developing custom applications using Android Software Development Kit (SDK), OpenGL, 3D graphics, Android Media APIs, Location–based Service APIs, Wi–Fi APIs, Android Security Architecture and other related technologies.',
        content: []
    },
    {
        title: 'Android game development',
        paragraph: 'Apart from being extremely sound with the technicalities of Android app development, our developers work with our in-house graphics design team and QA team to develop the best in class Android games',
        content: []
    }
    ,
    {
        title: 'Android solutions includes',
        paragraph: 'Our Android solutions can be integrated across multiple platforms and conventional Smartphone architecture. Acute knowledge, influencing abilities and proficiency in developing Android solutions make our services stand apart in crowd. Our vast experience enables us to create remarkable solutions for all Android OS versions, starting with Android 1.5 Cupcake to the Android M.',
        content: [
            "Custom Android Application Development",
            "Android Gaming Application Development",
            "Android Enterprise Application Development",
            "Android Productivity Application Development",
            "Maintenance and Support for Android Apps",
            "Android Application Testing",
        ]
    }
];

const images = [
    {
        jpg: '/Images/Whatwedo/mobile/modals/Android/android-app-development-image1.webp',
    },
    {
        jpg: '/Images/Whatwedo/mobile/modals/Android/android-app-development-image2.webp',
    },
    {
        jpg: '/Images/Whatwedo/mobile/modals/Android/android-app-development-image3.webp',
    }
];

const service = [
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/Android/android-application-development-services.webp",
        title1: "Our Android developers are highly seasoned with all popular Android technologies including",
        points: [
            "Android/Google API, Eclipse",
            "Multi-touch",
            "Accelerometer",
            "Augmented Reality",
            "GPS/Location Based Services",
            "Video playback, OpenAL, OpenGL ES",
            "3rd party API integration",
            "Android Software Development Kit (SDK)",
            "Wi-Fi APIs",
            "Location-based Service APIs",
            "SQLite Database",
            "Android Security Architecture",
            "AdapterViews Framework",
            "Interface Description Language",
            "WebKit",
            "J2ME",
            "Dalvik Debug Monitor Service",
            "Hierarchy Viewer",
            "Traceview Testing",
            "Logcat",
            "Internationalization",
            "Activity Creator",
            "Web services/REST with Soap, XML or JSON",
            "Eclipse and Asset Packaging Tool",
        ],
        title2: "Fullestop specializes in designing and developing android solutions which are scalable, robust and efficient. We are highly proficient in Android SDK, Google APIs, Open GL and other tools to develop a custom Android app."
    },
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/Android/android-application-development-services2.webp",
        title1: "In past few years, we have created lucrative and fully-fledged Android apps for a variety of industries including:",
        points: [
            "E - commerce Apps",
            "Travel and map",
            "Healthcare Apps",
            "Game Apps",
            "Location Based apps",
            "Ebook Apps",
            "Educational Apps",
            "Multimedia Apps",
            "Entertainment Apps",
            "Quiz Apps",
            "Video Apps",
            "Reference Apps",
            "Communication Apps",
            "Office / Business Apps",
            "Internet Apps",
            "Fun Apps",
            "Utility Apps",
            "Security Apps",
        ],
        title2: "Fullestop specializes in designing and developing android solutions which are scalable, robust and efficient. We are highly proficient in Android SDK, Google APIs, Open GL and other tools to develop a custom Android app."
    }
]