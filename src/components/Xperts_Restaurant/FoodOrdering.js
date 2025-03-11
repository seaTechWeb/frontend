import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import ReviewSection from './ReviewSection';

export default function FoodOrdering() {

    const firstSectionTextRef = useRef(null);
    const firstSectionImageRef = useRef(null);
    const secondSectionTextRef = useRef(null);
    const secondSectionImageRef = useRef(null);
    const thirdSectionTextRef = useRef(null);
    const thirdSectionImageRef = useRef(null);
    const fourthSectionTextRef = useRef(null);
    const fourthSectionImageRef = useRef(null);
    const [firstSectionImageHeight, setfirstSectionImageHeight] = useState('430px');
    const [webImageHeight, setWebImageHeight] = useState('430px');
    const [thirdSectionImageHeight, setthirdSectionImageHeight] = useState('430px');
    const [fourthSectionImageHeight, setfourthSectionImageHeight] = useState('430px');

    useEffect(() => {
        const handleResize = () => {
            if (firstSectionTextRef.current && firstSectionImageRef.current) {
                const textHeight = firstSectionTextRef.current.clientHeight;
                setfirstSectionImageHeight(`${textHeight + 30}px`);
            }

            if (secondSectionTextRef.current && secondSectionImageRef.current) {
                const textHeight = secondSectionTextRef.current.clientHeight;
                setWebImageHeight(`${textHeight + 30}px`);
            }

            if (thirdSectionTextRef.current && thirdSectionImageRef.current) {
                const textHeight = thirdSectionTextRef.current.clientHeight;
                setthirdSectionImageHeight(`${textHeight + 30}px`);
            }
            if (fourthSectionTextRef.current && fourthSectionImageRef.current) {
                const textHeight = fourthSectionTextRef.current.clientHeight;
                setfourthSectionImageHeight(`${textHeight + 30}px`);
            }
        };

        handleResize(); // Set initial height
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container'>
            <section style={{ paddingTop: '30px' }}>
                <h1 className='text-center more-weight' >Online Food Ordering System
                    For Restaurants</h1>
                <p className='text-center' style={{ fontSize: '20px' }}>Free of charge, zero commissions, unlimited online orders</p>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-6'>
                        <div className="">
                            <img
                                ref={firstSectionImageRef}
                                style={{ width: '100%', height: firstSectionImageHeight }}
                                src='/Images/Xperts Restaurant/FoodOrdering/Image-1.png'
                                alt='Insurance'
                            />
                        </div>
                    </div>
                    <div className='col-md-4 d-flex align-items-center' style={{ marginTop: '10px' }}>
                        <div ref={firstSectionTextRef}>
                            <h2>How to add online ordering to your website in just a few minutes?</h2>
                            <hr />
                            <br />
                            <p>It’s simple: all you need to do is fill in your restaurant profile and add the “See MENU & Order” button on your site.</p>
                            <br />
                            <p>With our free online food ordering system, your clients can now order food online, straight from your website.</p>
                            {/* <Link type="button" to="#" className="btn btn-dark my-3 blueButton">Learn More &rarr;</Link> */}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: '80px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-1 order-2 order-md-1 d-flex align-items-center'></div>
                    <div className='col-md-5 order-2 order-md-1 d-flex align-items-center'>
                        <div ref={secondSectionTextRef}>
                            <h2 className='my-4'>Use Facebook smart-links to hook more customers & sell your foods online</h2>
                            <hr />
                            <br />
                            <p>Engaging with potential customers on Facebook is the right step towards gaining more online exposure</p>
                            <br />
                            <p>Add a smart-link to receive orders & start selling your foods straight on your business page.
                            </p>
                            <br />
                            <p>All in less than one minute. Neat, right?</p>
                            {/* <Link type="button" to="/#" className="btn btn-dark my-3 blueButton">Learn More &rarr;</Link> */}
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2'>
                        <img ref={secondSectionImageRef} style={{ width: '100%', height: webImageHeight }} src='/Images/Xperts Restaurant/FoodOrdering/Image-2.png' alt='softwareconsulting' />
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: '110px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                    <div className='col-md-6 my-2' >
                        <img ref={thirdSectionImageRef} style={{ width: '100%', height: thirdSectionImageHeight }} src='/Images/Xperts Restaurant/FoodOrdering/Image-3.png' alt='seatechanalytics' />
                    </div>
                    <div className='col-md-4 d-flex align-items-center mt-2'>
                        <div ref={thirdSectionTextRef}>
                            <h2>Online food ordering system with mobile app for your food clients
                            </h2>
                            <hr />
                            <br/>
                            <p>More than 52% of customers trust a restaurant’s own branded app more than a third party food portal app.*</p>
                            <br/>
                            <p>So why not get your own branded mobile app & give your clients what they want?</p>
                            <br/>
                            {/* <Link type="button" to="/#" className="btn btn-dark my-3 blueButton">Learn More  &rarr;</Link> */}
                        </div>
                    </div>
                </div>
            </section>

            <section  style={{ paddingTop: '50px' }}>
                <div className='row imageContainer' style={{ marginTop: '40px' }}>
                <div className='col-md-1 order-2 order-md-1 d-flex align-items-center mt-2'>
                        
                    </div>
                    <div className='col-md-5 order-2 order-md-1 d-flex align-items-center mt-2'>
                        <div ref={fourthSectionTextRef}>
                            <h2>Receive and confirm orders from your own smartphone or tablet</h2>
                            <hr />
                            <br/>
                            <p>Get all your restaurant's online orders in one place with the order taking app.</p>
                            <br/>
                            <p>How this works: when someone places an order on your website, Facebook or mobile app, it instantly gets pushed to your Android or iOS device.</p>
                            <br/>
                            <p>With this free food ordering app for restaurants, you can easily start taking online orders & grow your business.... without worrying about fees & commissions.</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2'>
                        <img ref={fourthSectionImageRef} style={{ width: '100%', height: fourthSectionImageHeight }} src='/Images/Xperts Restaurant/FoodOrdering/Image-4.png' alt='thirdSectiontech' />
                    </div>
                </div>
            </section>

            <ReviewSection />
        </div>
    );
}
