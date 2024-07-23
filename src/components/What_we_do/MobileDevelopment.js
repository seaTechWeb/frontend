import React, { useState, useRef, useEffect } from 'react'
import ContactUs from "../ContactPage"
import ReactNative from './MobileModal/ReactNative';
import Flutter from './MobileModal/Flutter';
import Xamarin from './MobileModal/Xamarin';
import Android from './MobileModal/Android';
import MobileApp from './MobileModal/MobileApp'
import IOS from './MobileModal/IOS';

export default function MobileDevelopment() {
  const [ios, setIos] = useState(true);
  const mobileDevelopmentTextRef = useRef(null)
  const mobileDevelopmentImageRef = useRef(null)
  const [imageHeight, setImageHeight] = useState('400px')
  useEffect(() => {
    const handleResize = () => {
      if (mobileDevelopmentTextRef.current && mobileDevelopmentImageRef.current) {
        const textHeight = mobileDevelopmentTextRef.current.clientHeight;
        setImageHeight(`${textHeight + 60}px`);
      }
    };
    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const HandleIosClick = () => {
    setIos(true);
  }
  const HandleAndroidClick = () => {
    setIos(false);
  }
  return (

    <div style={{ marginTop: '86px' }}>
      <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(/Images/Whatwedo/service-mobile-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
              <div>
                <h5>Mobile app development</h5>
                <p className='bannerHeading'>Become your development clients go-to</p>
                <p>When it comes to high-end development we don’t forget about the basics. Delivering on time, on budget, and per scope. It’s what we’ve done for over a decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '40px' }}>
        <div className='row imageContainer'>
          <div className='col-md-6'>
            <div ref={mobileDevelopmentTextRef}>
              <p className='heading'>Mobile app development services</p>
              <p>Mobile Apps have reshaped the way we look at today’s digital world. It has now become easy to reach millions of users within no time and be visible to your customers at all times.</p>
              <p>At SeaTech, you will find a perfect blend of Technology and Innovation under one roof. We know what it takes to incorporate a successful Mobile App strategy that delivers results and a positive ROI. Backed up with a team of highly skilled professionals and a well planned and executed Digital strategy, we enable you to stay ahead of the competition and be future ready.</p>
              <p>With a history of creating amazing apps for iPhone, iPad, Android and Windows, we also specialize in cross-platform apps to deliver your customers an exceptional engagement experience.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='imageDesign' ref={mobileDevelopmentImageRef} style={{ borderRadius: '10px', width: '100%', height: imageHeight }} src='/Images/Whatwedo/app-development-01.jpg' alt='' />
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <div className='d-flex justify-content-center'>
          <div className='col-md-10'>
            <p className='text-center heading' style={{ marginBottom: '10px' }}>Create value through digital with our custom mobile app development services.</p>
          </div>
        </div>
        <div className='row'>
          {data.map((item, index) => (
            <div className='col-md-4' style={{ marginBottom: '40px' }} key={index} >
              <div className="card cardDesign" style={{ minHeight: '380px' }}>
                <div className="card-body">
                  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <image href={item.link} x="0" y="0" width="100" height="100" />
                    <text x="100" y="180" fontFamily="roboto-slab" fontSize="20" fill="white" textAnchor="middle">
                      {item.caption}
                    </text>
                  </svg>
                  <h4 className="card-title" style={{ marginTop: '20px' }}>{item.language}</h4>
                  <h2>{item.type}</h2>
                  <p className="card-text">
                    {item.text}
                  </p>
                  {item.component}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div style={{ marginTop: '60px', paddingTop: '50px', backgroundColor: 'black', color: 'whitesmoke' }}>
        <div className='container'>
          <div className="header text-center">
            <p className='heading'>Why choose SeaTech as<br />custom mobile app development agency</p>
            <p>
              Our mobile app development services are custom to meet your specific needs and requirements. Our team of mobile app developers possesses
              a wealth of experience in crafting scalable and custom mobile solutions. Our core focus is on delivering personalized custom mobile software to
              a diverse clientele, including first-time entrepreneurs and established enterprises, spanning various industries worldwide.
            </p>
          </div>
          <div className="d-flex align-content-start flex-wrap " style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
            <div className="stat-item text-center">
              <h2 style={{ fontSize: '46px', color: '#fdd835' }}>23+</h2>
              <p style={{ fontSize: '20px' }}>Years experience</p>
            </div>
            <div className="stat-item text-center">
              <h2 style={{ fontSize: '46px', color: '#fdd835' }}>100+</h2>
              <p style={{ fontSize: '20px' }}> Team members</p>
            </div>
            <div className="stat-item text-center">
              <h2 style={{ fontSize: '46px', color: '#fdd835' }}>7100+</h2>
              <p style={{ fontSize: '20px' }}>Successful Projects</p>
            </div>
            <div className="stat-item text-center">
              <h2 style={{ fontSize: '46px', color: '#fdd835' }}>100%</h2>
              <p style={{ fontSize: '20px' }}>Transparent process</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <div className="customerneed-section">
          <h2 className="heading text-center">How we work?</h2>
          <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
            {steps.map((solution, index) => (
              <li
                className="d-flex align-items-center justify-content-center iconCardDesign"
                key={index}
              >
                <figure>
                  <img src={solution.link} alt='SEO' />
                </figure>
                <strong dangerouslySetInnerHTML={{ __html: solution.title }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ paddingTop: '30px', marginTop: '50px', backgroundColor: 'black', color: 'whitesmoke' }}>
        <div className='container'>
          <div className='d-flex justify-content-center'>
            <p className='heading' style={{ marginRight: '20px' }}>Our</p>
            <p className='heading' style={{ marginRight: '20px', color: '#fdd835' }}>Capabilities</p>
          </div>
          <p className='text-center' style={{ fontSize: '16px' }}>SeaTech extracts full potential of major mobile technologies and then bring on the table the most innovative solutions.
            Our major capabilities in the field of mobile application development are mentioned below:</p>
          <div className="d-flex justify-content-center" >
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className={`btn ${ios === true ? 'btn-primary' : 'btn-outline-primary'}`} style={{ width: '150px', margin: '0 auto' }} onClick={HandleIosClick}>iOS</button>
              <button type="button" className={`btn ${ios === false ? 'btn-primary' : 'btn-outline-primary'}`} style={{ width: '150px', margin: '0 auto' }} onClick={HandleAndroidClick}>Android</button>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            {ios === true ?
              <div className="customerneed-section">
                <ul className="d-flex flex-wrap justify-content-center iconlisting-card" style={{ marginBottom: '0px' }}>
                  {iOSIcon.map((solution, index) => (
                    <li
                      className="d-flex align-items-center justify-content-center"
                      key={index}
                      style={{ border: 'none' }}
                    >
                      <figure style={{ border: 'none' }}>
                        <img src={solution.link} alt='SEO' style={{ border: 'none' }} />
                      </figure>
                      <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
                    </li>
                  ))}
                </ul>
              </div>
              :
              <div className="customerneed-section">
                <ul className="d-flex flex-wrap justify-content-center iconlisting-card" style={{ marginBottom: '0px' }}>
                  {androidIcon.map((solution, index) => (
                    <li
                      className="d-flex align-items-center justify-content-center"
                      key={index}
                      style={{ border: 'none' }}
                    >
                      <figure>
                        <img src={solution.link} alt='SEO' />
                      </figure>
                      <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
                    </li>
                  ))}
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

const iOSIcon = [
  {
    link: '/Images/Whatwedo/Ios/capabilities-small1.svg',
    text: 'Swift'
  },
  {
    link: '/Images/Whatwedo/Ios/capabilities-small2.svg',
    text: 'Objective-C'
  },
  {
    link: '/Images/Whatwedo/Ios/capabilities-small4.svg',
    text: '3D Touch'
  },
  {
    link: '/Images/Whatwedo/Ios/cloudkit.png',
    text: 'CloudKit'
  },
  {
    link: '/Images/Whatwedo/Ios/core-bluetooth-icon.png',
    text: 'Core Bluetooth'
  },
  {
    link: '/Images/Whatwedo/Ios/framework-icon1.svg',
    text: 'Cocoa Touch'
  },
  {
    link: '/Images/Whatwedo/Ios/framework-icon3.svg',
    text: 'iOS Simulators'
  },
  {
    link: '/Images/Whatwedo/Ios/framework-icon4.svg',
    text: 'CoreDATA'
  },
  {
    link: '/Images/Whatwedo/Ios/framework-icon5.svg',
    text: 'CallKit'
  },
  {
    link: '/Images/Whatwedo/Ios/framework-icon9.svg',
    text: 'HealthKit'
  },
  {
    link: '/Images/Whatwedo/Ios/spritekit.png',
    text: 'SpriteKit'
  },
  {
    link: '/Images/Whatwedo/Ios/sqllite-icon.svg',
    text: 'SQLite'
  },
  {
    link: '/Images/Whatwedo/Ios/swiftui.png',
    text: 'SwiftUI'
  },
  {
    link: '/Images/Whatwedo/Ios/testflight.png',
    text: 'TestFlight'
  },
  {
    link: '/Images/Whatwedo/Ios/xcode-icon.png',
    text: 'Xcode'
  },
]

const androidIcon = [
  {
    link: '/Images/Whatwedo/Android/androidapp1.svg',
    text: 'Android Studio'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp2.png',
    text: 'Eclipse'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp5.svg',
    text: 'AVD'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp6.svg',
    text: 'ADB'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp7.png',
    text: 'AndroidX'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp8.png',
    text: 'Retrofit'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp9.svg',
    text: 'Sqlite'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp10.png',
    text: 'Glide'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp11.svg',
    text: 'Java'
  },
  {
    link: '/Images/Whatwedo/Android/androidapp12.svg',
    text: 'Kotlin'
  },
]



const data = [
  {
    link: "/Images/Whatwedo/ios-icon.svg",
    language: "iOS app",
    type: "Development",
    text: "In the era of iOS and iPhone Apps where everything is at the touch of your thumb, businesses can actually take the leverage of this smart technology to...",
    component:<IOS/>

  },
  {
    link: "/Images/Whatwedo/android_icon.svg",
    language: "Android app",
    type: "Development",
    text: "SeaTech renders qualitative android solutions to enterprises across the globe. We have proven expertise in developing Android applications that...",
    component: <Android />

  },
  {
    link: "/Images/Whatwedo/react-native-icon.svg",
    language: "React native",
    type: "Development",
    text: "An astronomical rise in the Mobile trend has transformed the way Businesses interact with their customers...",
    component: <ReactNative />

  },
  {
    link: "/Images/Whatwedo/flutter_icon.svg",
    language: "Flutter app",
    type: "Development",
    text: "The digital world is spinning towards making the Mobile App development more productive and economical for modern Businesses. Hybrid mobile app...",
    component: <Flutter />

  },
  {
    link: "/Images/Whatwedo/xamarin-icon.svg",
    language: "Xamarin app",
    type: "Development",
    text: "HIn the era of Xamarin and Xamarin Apps where everything is at the touch of your thumb, businesses can actually take the leverage of this smart...",
    component: <Xamarin />

  },
  {
    link: "/Images/Whatwedo/app-support-icon.svg",
    language: "Mobile app",
    type: "Support & Maintenance",
    text: "According to an IT survey, a typical large enterprise today spends up to 80% of their IT budget on maintenance and support of their existing systems....",
    component: <MobileApp />
  }
]

const steps = [
  { link: '/Images/Whatwedo/mobile/we_work_icon1.svg', title: 'Strategy / Consulting' },
  { link: '/Images/Whatwedo/mobile/we_work_icon2.svg', title: 'Design' },
  { link: '/Images/Whatwedo/mobile/we_work_icon3.svg', title: 'Development' },
  { link: '/Images/Whatwedo/mobile/we_work_icon4.svg', title: 'Quality Assurance & Launch' },
  { link: '/Images/Whatwedo/mobile/we_work_icon5.svg', title: 'On Going Support' },
];
