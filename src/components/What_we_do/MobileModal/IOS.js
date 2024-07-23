import React, { useRef, useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ContactPage from '../../ContactPage';

export default function IOS() {
    const [key, setKey] = useState(0);
    const textRef1 = useRef(null);
    const imageRef1 = useRef(null);
    const [imageHeight1, setImageHeight1] = useState('auto');
    useEffect(() => {
        const handleResize = () => {
            if (textRef1.current) {
                setImageHeight1(`${textRef1.current.offsetHeight + 60}px`);
            }
        };

        const handleModalShown = () => {
            handleResize();
        };

        window.addEventListener('resize', handleResize);

        const modalElement = document.querySelector('#mobileIOS');
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
            <div data-bs-toggle="modal" className='' data-bs-target="#mobileIOS">
                <button type="button" className="btn blueButton">Learn more &rarr;</button>
            </div>
            <div className="modal fade" id="mobileIOS" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                            <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ padding: '0px' }}>
                            <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/mobile/modals/IOS/iOS-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                                            <div>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>Mobile App Development</p>
                                                <p className='bannerHeading' style={{ marginBottom: '0px' }}>iPhone app development Company</p>
                                                <p style={{ fontSize: '18px', marginBottom: '0px' }}>we build powerful mobile apps for the iPhone platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '60px' }}>
                                <div className='row imageContainer'>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div ref={textRef1}>
                                            <p className='heading'>iOS application development services</p>
                                            <p>In the era of iOS and iPhone Apps where everything is at the touch of your thumb, businesses can actually take the leverage of this smart technology to market itself prominently and we, FULLESTOP help you with that. Being an iPhone Application Development Company, we offer to build the most enriched and dynamic apps according to the requirement of the client. We believe that a beautifully designed iPhone App of your business can certainly improve the customer engagement and brand recognition and therefore our services consist of-</p>
                                            <p>A comprehensive experience of leading full lifecycle iOS development</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img className='imageDesign' ref={imageRef1} style={{ borderRadius: '10px', height: imageHeight1, width: "100%" }} src='Images/Whatwedo/mobile/modals/IOS/extensive-experience.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '60px', paddingTop: '50px', paddingBottom: '70px', backgroundColor: 'black', color: 'whitesmoke' }}>
                                <div className='container'>
                                    <div className='d-flex justify-content-center flex-column flex-md-row'>

                                        <p className='heading text-center' style={{ marginRight: '20px' }}>Crafting better <b style={{ color: '#fdd835' }}>experiences</b> with technologies</p>

                                    </div>
                                    <p className='text-center' style={{ fontSize: '16px' }}>FULLESTOP is a team of brilliant techies who with their skills and knowledge, keep the capacity to convert your concept into an app. We develop apps with clutter-free designs making simple for the users to hit the sweet spots easily, and with standard clean and semantic compliment code so that the application runs smoothly. Knowing the potential of the iOS market, we adopt the leading edge technologies so that businesses can enjoy maximum ROI.The technical elements are are:</p>

                                    <div style={{ marginTop: '30px' }}>
                                        <div style={mystyle.tabContainer}>
                                            <Tabs
                                                id="myTab"
                                                style={mystyle.mainTab}
                                                activeKey={key}
                                                onSelect={(k) => setKey(k)}
                                                className="nav nav-tabs custom-tabs"
                                            >
                                                <Tab eventKey='0' title={<span>01 <br /> Swift</span>} className="nav-item custom-tab" style={mystyle.navitem}></Tab>
                                                <Tab eventKey='1' title={<span>02 <br /> Kotlin</span>} className="nav-item custom-tab"></Tab>
                                                <Tab eventKey="2" title={<span>03 <br /> Java</span>} className="nav-item custom-tab"></Tab>
                                                <Tab eventKey="3" title={<span>04 <br /> Objective-C</span>} className="nav-item custom-tab"></Tab>
                                                <Tab eventKey="4" title={<span>05 <br /> React Native</span>} className="nav-item custom-tab"></Tab>
                                                <Tab eventKey="5" title={<span>06 <br /> MySQL</span>} className="nav-item custom-tab"></Tab>
                                                <Tab eventKey="6" title={<span>07 <br /> CoreDATA</span>} className="nav-item custom-tab"></Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '30px' }}>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: '95%' }} src={service[key].ImageLink} alt='' />
                                            </div>
                                            <div className='col-md-7 align-self-center' >
                                                <div>
                                                    <p style={{ fontSize: '30px', fontWeight: '500', marginBottom: '30px' }}>{service[key].Heading}</p>
                                                    <p style={{ fontSize: '18px', fontWeight: '300', marginBottom: '40px' }}>{service[key].title1}</p>
                                                    <p style={{ fontSize: '18px', fontWeight: '300' }}>{service[key].title2}</p>
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
    )
}
const mystyle = {
    tabContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    mainTab: {
        borderBottom: 'none',
    },
    navitem: {
        backgroundColor: 'red',
    },
};


const service = [
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/IOS/swift-icon.svg",
        Heading: "01 Swift",
        title1: "Swift is a powerful programming language to develop custom mobile apps. With a concise and expressive syntax, Swift code writing proves to be quite interactive. It supports all the modern features that developers have come to appreciate over the years.",
        title2: "Developed by Apple, Swift is easily the most preferred programming language to build custom mobile applications for the iOS platform. As an object-oriented language, it omprises a host of advanced features to enable flexible and efficient mobile app development. At FATbit, we're proud to have a highly experienced, technically sound, and proficient team of iOS developers that’s well-versed in Swift."
    },
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/IOS/kotlin-icon.svg",
        Heading: "02 Kotlin",
        title1: "The flexible programming language Kotlin has advanced significantly in the field of creating iOS mobile applications. Developers may now use their Kotlin expertise to create powerful and effective iOS applications thanks to the launch of Kotlin/Native. Let's look at some of the main mobile Kotlin technologies for iOS.",
        title2: "By directly compiling Kotlin code into native binaries with Kotlin/Native, developers may target iOS systems in addition to Android and other platforms. This technology makes it possible for Android and iOS applications to share and reuse code, speeding the development process and minimizing duplication of work."
    },
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/IOS/java-icon.svg",
        Heading: "03 Java",
        title1: "Java has historically been less popular than other programming languages when it comes to creating iOS mobile apps. However, there are still a few Java-based frameworks and technologies that can be used for iOS development, giving developers choices for utilizing their Java expertise. Let's examine a few of these Java iOS mobile technologies.",
        title2: "RoboVM is a Java-to-native compiler that enables programmers to create iOS apps in Java. It converts Java bytecode into native code, allowing Java apps to run on iOS devices. By giving developers access to native iOS APIs using RoboVM, they may use Java as their main programming language to build feature-rich, fast apps."
    },
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/IOS/objectivec-icon.svg",
        Heading: "04 Objective-C",
        title1: "The main programming language for creating iOS apps has long been Objective-C. It provides a variety of potent technologies and frameworks that let programmers create feature-rich, fast iOS applications. Let's look at some of the main iOS mobile technologies for Objective-C.",
        title2: "The Objective-C framework used to create iOS applications is called Cocoa Touch. It offers a comprehensive collection of iOS-specific APIs and parts, including user interface elements, touch handling, networking, data management, and more. The basis for creating interactive and captivating iOS applications is Cocoa Touch."
    },
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/IOS/reactnative-icon.svg",
        Heading: "05 React Native",
        title1: "A well-liked JavaScript framework called React Native enables developers to create native iOS apps using JavaScript and React. It offers a selection of potent frameworks and technologies made especially for the creation of iOS apps. Let's look at some of the main mobile React Native iOS technologies.",
        title2: "The main component of React Native is what allows programmers to create iOS apps with JavaScript and a declarative approach. It makes use of the capabilities of the JavaScript package React to create reusable UI components. Developers may create native iOS apps with exceptional performance and user experience with React Native."
    },
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/IOS/mysql-icon.svg",
        Heading: "06 MySQL",
        title1: "Open-source relational database management system MySQL is well-liked and frequently used in web and mobile apps. Although MySQL was not created with iOS mobile technologies in mind, it can be used as the backend database for iOS applications. Let's investigate the integration of MySQL into iOS mobile development.",
        title2: "MySQL can be accessed by iOS apps using server-side APIs. Typically, programmers use Node.js, Python, or PHP to create a backend server that connects to a MySQL database. In order for the iOS app to conduct CRUD (Create, Read, Update, Delete) activities on the MySQL database, the server offers RESTful APIs."
    },
    {
        ImageLink: "/Images/Whatwedo/mobile/modals/IOS/coredata-icon.svg",
        Heading: "07 CoreDATA",
        title1: "Apple offers developers of iOS apps Core Data, a potent framework. It is made especially for managing and maintaining data persistence in iOS applications. Core Data provides numerous technologies and capabilities that make it easier to store, retrieve, and manage data in iOS apps. Let's look at some of the main mobile technologies used by Core Data iOS.",
        title2: "Core Data employs the Managed Object Model (MOM) to specify an application's data model. The entities, attributes, and relationships that make up the MOM indicate the structure of the data that will be stored. Xcode's Data Model Editor, which generates the associated code and database schema, allows developers to construct and configure the MOM."
    },
]

