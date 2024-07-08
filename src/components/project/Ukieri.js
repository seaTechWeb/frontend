import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce';


export default function Ukieri() {
    const [deviceSize, setDeviceSize] = useState(getDeviceSize(window.innerWidth));

    function getDeviceSize(width) {
        if (width < 700) {
            return 1;
        } else {
            return 2;
        }
    }

    useEffect(() => {

        const handleResize = debounce(() => {
            setDeviceSize(getDeviceSize(window.innerWidth));
        }, 300);

        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    return (
        <div style={{ marginTop: '86px' }}>
            <div style={{ backgroundImage: 'url(./Images/Project/ukieri/ukieri-banner-image.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div style={{ backgroundImage: 'url(/Images/Project/adidas/overlay-pattern.png)' }} >
                    <div className='container' style={{ paddingTop: '30px' }}>
                        <div className='row'>
                            <div className='col-md-6 order-2 order-md-1 d-flex align-items-center ' style={{ padding: '20px 2px' }}>
                                <div className={`${deviceSize === 1 ? 'text-center' : ''}`}>
                                    <img src='/Images/Project/ukieri/ukieri-logo.png' alt='Adidas' />
                                    <pre style={{ fontSize: '22px', fontWeight: '900', color: 'white', marginTop: '20px' }} >#Mondo DB  #Angular 5</pre>
                                    <div className='text-center'  style={{width:'100%'}}>
                                        <Link type="button" className="btn btn-primary btn-lg d-flex justify-content-center align-items-center" to="http://www.ukieri.org/" target='_blank' style={{ borderRadius: '34px', width: '191px', height: '70px' }}>Launch project</Link>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-6 order-1 order-md-2'>
                                <img style={{ maxWidth: '100%' }} src='/Images/Project/ukieri/ukieri-image.png' alt='Adidas Project' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: '30px' }}>
                <div className='row'>
                    <div className='col-md-3'>
                        <h5>Project Name</h5>
                        <p>Ukieri</p>

                        <h5>Website & App</h5>
                        <p>Website</p>

                        <h5>Categories</h5>
                        <p>Global Education Hub</p>
                    </div>
                    <div className='col-md-9'>
                        <p className='more-weight'>Ukieri</p>
                        <p>Explore collaborative education with UKIERI's secure platform at www.ukieri.org. UK-India Education and Research Initiative (UKIERI) started in April 2006 with the aim of enhancing educational linkages between India and the UK. Elevate your learning experience through visually appealing and user-friendly features, ensuring the safety of sensitive information. The project focuses on three areas capacity building and leadership development, research innovation and partnerships, and Skill development in higher education.</p>
                        <p>Engage with Higher Education Leadership Development, SPARC Webinars, DST Partnership Development, and Mobility Program. Uniting minds globally, UKIERI emphasizes bilateral benefits in Research and Innovation, and Education and Training. Join us in making a lasting impact on collaborative education initiatives. Visit www.ukieri.org today.</p>

                        <Link type="button" className="btn btn-primary btn-lg d-flex justify-content-center align-items-center" to="http://www.ukieri.org/" target='_blank' style={{ borderRadius: '34px', width: '191px', height: '70px' }}>Launch project</Link>
                    </div>
                </div>
            </div>

            <div className=' container d-flex justify-content-between' style={{ marginTop: '60px' }}>
                <Link type="button" className="btn btn-primary " to="/fairandhandsome" >Previous project</Link>
                <Link type="button" className="btn btn-primary " to="/volkswagen" >Next project</Link>
            </div>

            <div className='d-flex justify-content-between' style={{ marginTop: '60px' }}>
                <img style={{ width: '50%' }} src='/Images/Project/ukieri/ukieri-slider-image1.jpg' alt='adidas' />
                <img style={{ width: '50%' }} src='/Images/Project/ukieri/ukieri-slider-image2.jpg' alt='adidas' />
            </div>

        </div >
    )
}


