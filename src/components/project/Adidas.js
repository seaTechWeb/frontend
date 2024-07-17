import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce';
import ContactPage from '../ContactPage';


export default function Adidas() {
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
        <>

            <div style={{ marginTop: '86px' }}>
                <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(./Images/Project/adidas/adidas-banner-image.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                    <div style={{ backgroundImage: 'url(/Images/Project/adidas/overlay-pattern.png)' }} >
                        <div className='container' style={{ paddingTop: '30px' }}>
                            <div className='row'>
                                <div className={`col-md-6 order-2 order-md-1 d-flex align-items-center ${deviceSize === 1 ? 'justify-content-center' : ''} `} style={{ padding: '20px 2px' }}>
                                    <div className={`${deviceSize === 1 ? 'text-center' : ''}`}>
                                        <img src='/Images/Project/adidas/adidas-logo.png' alt='Adidas' />
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            <p style={{marginRight:'18px',color:'whitesmoke',marginTop:'10px',fontSize:'24px',fontWeight:'500'}}>#HTML5</p>
                                            <p style={{marginRight:'18px',color:'whitesmoke',marginTop:'10px',fontSize:'24px',fontWeight:'500'}}>#CSS3</p>
                                            <p style={{marginRight:'18px',color:'whitesmoke',marginTop:'10px',fontSize:'24px',fontWeight:'500'}}>#JavaScript</p>
                                        </div>
                                        <div>
                                            <Link type="button" className="btn btn-lg blueButton" to="https://www.adidas.co.in/" target='_blank' style={{ borderRadius: '10px' }}>Launch project</Link>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-md-6 order-1 order-md-2'>
                                    <img style={{ maxWidth: '100%' }} src='/Images/Project/adidas/adidas-image.png' alt='Adidas Project' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container' style={{ marginTop: '30px' }}>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h5>Project Name</h5>
                            <p>Adidas</p>

                            <h5>Website & App</h5>
                            <p>Website</p>

                            <h5>Categories</h5>
                            <p>Online Sportwear Products</p>
                        </div>
                        <div className='col-md-9'>
                            <p className='more-weight'>Adidas</p>
                            <p>Embark on a digital adventure with Adidas, a global powerhouse known for redefining the boundaries of footwear and apparel. In the vast landscape of online shopping, Adidas acknowledged the pivotal need to ensure a seamless and delightful experience for users.</p>
                            <p>The focus was clear – how to translate the excellence of physical products into the virtual realm. Adidas set out to create not just a website but an interactive platform mirroring the dynamism of your lifestyle. Tackling the challenge of stock availability, Adidas introduced an innovative automated backend service.</p>
                            <p>This groundbreaking solution seamlessly integrates with the web application, acting as a bridge between the warehouse and physical stores. Adidas's system redirects user orders to the nearest store, ensuring a personalized touch to fulfill their desires.</p>
                            <p>Granting users control and transparency was a key objective. Enter the centralized admin panel – a command center offering a vivid, real-time depiction of the order's journey. From acceptance to rejection, every step is illuminated for peace of mind.</p>
                            <p>Yet, the magic isn't solely in the visible. Behind the scenes, Adidas harnessed cutting-edge big data processing technologies to construct a backend infrastructure that's not just secure and reliable but also scales effortlessly to meet the demands of the global family.</p>
                            <p>Adidas takes immense pride in achieving more than just a seamless online ordering experience. The user-friendly interface isn't merely a tool; it's a way to make customers' lives more stylish and convenient.</p>

                            <Link type="button" className="btn btn-lg blueButton" to="https://www.adidas.co.in/" target='_blank' style={{ borderRadius: '10px' }}>Launch project</Link>
                        </div>
                    </div>
                </div>

                <div className=' container d-flex justify-content-between' style={{ marginTop: '60px' }}>
                    <button type="button" className="btn blueButton" disabled >Previous project</button>
                    <Link type="button" className="btn blueButton" to="/cara" >Next project</Link>
                </div>

                <div className='d-flex justify-content-between' style={{ marginTop: '60px' }}>
                    <img style={{ width: '50%' }} src='/Images/Project/adidas/adidas-slider-image1.jpg' alt='adidas' />
                    <img style={{ width: '50%' }} src='/Images/Project/adidas/adidas-slider-image2.jpg' alt='adidas' />
                </div>

            </div >
            <ContactPage />
        </>
    )
}
