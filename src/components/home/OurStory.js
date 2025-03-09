import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';


export default function OurStory() {
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
        <section id='ourStory' style={{paddingTop:'50px'}}>
            <div className='container'>
                <h1 className='text-center more-weight' style={{ marginTop: '40px',marginBottom:'40px' }}>OUR STORY</h1>
                <div className='row '>
                    <div className={deviceSize === 1 ? 'col-9 order-2 ' : 'col-5 text-end'}>
                        <p><b>1990 - Los Angele</b></p>
                        <p>The Insurance sector has been our specialty from the outset and our clients included Yasuda Fire & Marine Insurance Company of America and TDC RE. We have used our software expertise to also provide custom solutions to enterprises in various industries including the Los Angeles Public Library, Marubeni America, Hitachi Transport USA, Singapore Airlines USA and NEC Solutions USA</p>
                    </div>
                    <div className={`${deviceSize === 1 ? 'col-3 order-1 ' : 'col-1'}`}>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/usa.png' alt='USA Flag' />
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-5' style={{ display: `${deviceSize === 1 ? 'None' : ''}` }} ></div>
                    <div className={deviceSize === 1 ? 'col-3' : 'col-1'}>
                        <div className='d-flex justify-content-center' style={{ height: '30px' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/indonesia.png' alt='Indonesia Flag' />
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                    </div>
                    <div className={deviceSize === 1 ? 'col-9' : 'col-5'}>
                        <p style={{ marginTop: '30px' }}><b>1993 - Jakarta</b></p>
                        <p>SeaTech expanded by establishing its Jakarta operations with the first implementation of our AeGIS™ platform for an Indonesian client. AeGIS™ continues to evolve and remains the first choice of various major General Insurance players in Indonesia. We have since augmented AeGIS™ through our suite of products like InstaClaims™, CUBUS™ and Terrafix™ which have been successfully deployed to various partners in Indonesia.</p>
                    </div>
                </div>

                <div className='row '>
                    <div className={deviceSize === 1 ? 'col-9 order-2 ' : 'col-5 text-end'}>
                        <p style={{ marginTop: '30px' }}><b>1994 - Singapore</b></p>
                        <p>SeaTech set up an office in the lion city for the implementation of the next generation of our IRIS™ platform to support our reinsurance clients and brokers in Singapore and Hong Kong like Leslie & Godwin, Nicholson Leslia Asia and Swire Blanch. Since then, we have expanded in the General Insurance space with our core Insurance platform, AeGIS™. Both platforms have continued to grow and evolve to meet the complex business and regulatory needs of the region.</p>
                    </div>
                    <div className={`${deviceSize === 1 ? 'col-3 order-1 ' : 'col-1'}`}>
                        <div className='d-flex justify-content-center' style={{ height: '30px' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/singapore.png' alt='Singapore Flag' />
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-5' style={{ display: `${deviceSize === 1 ? 'None' : ''}` }} ></div>
                    <div className={deviceSize === 1 ? 'col-3' : 'col-1'} >
                        <div className='d-flex justify-content-center' style={{ height: '30px' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/thailand.png' alt='Thailand Flag' />
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                    </div>
                    <div className={deviceSize === 1 ? 'col-9' : 'col-5'}>
                        <p style={{ marginTop: '30px' }}><b>1996 - Bangkok</b></p>
                        <p>SeaTech was able to leverage our expertise in Insurance for our clients in Thailand with a customised implementation of AeGIS™, our core insurance platform for the specialized needs of the Thai market. Today, we ably support the rapidly growing operations of our multiple clients in Thailand and continue to work with both Insurers and Brokers to evolve our products to meet the changing needs of the Thai market.</p>
                    </div>
                </div>

                <div className='row '>
                    <div className={deviceSize === 1 ? 'col-9 order-2 ' : 'col-5 text-end'}>
                        <p style={{ marginTop: '30px' }}><b>1999 - Manila</b></p>
                        <p>To support the expansion of our clients into the Philippines, SeaTech set up our operations in Manila in the late 90’s. The core focus of the Manila office was the implementation of our core insurance platform, AeGIS™ which has scaled smoothly to keep in touch with the exponential growth in the Philippines and continues to support the needs of our clients till date.</p>
                    </div>
                    <div className={`${deviceSize === 1 ? 'col-3 order-1 ' : 'col-1'}`}>
                        <div className='d-flex justify-content-center' style={{ height: '30px' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/phillipine.png' alt='Phillipine Flag' />
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-5' style={{ display: `${deviceSize === 1 ? 'None' : ''}` }} ></div>
                    <div className={deviceSize === 1 ? 'col-3' : 'col-1'} >
                        <div className='d-flex justify-content-center' style={{ height: '30px' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/china.png' alt='China Flag' />
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                    </div>
                    <div className={deviceSize === 1 ? 'col-9' : 'col-5'}>
                        <p style={{ marginTop: '30px' }}><b>2003 - Dalian
                        </b></p>
                        <p>Our first project in Mainland China was the successful implementation of a customised version of AeGIS™ for our clients in Dalian to use as their core insurance platform. China was also our initial foray into implementing our Insurance Intelligence solution CUBUS™. Its early success in China was integral to the growth of CUBUS™ which has since been implemented and used at various clients across multiple continents</p>
                    </div>
                </div>

                <div className='row '>
                    <div className={deviceSize === 1 ? 'col-9 order-2 ' : 'col-5 text-end'}>
                        <p style={{ marginTop: '30px' }}><b>2007 - London</b></p>
                        <p>SeaTech was able build a version of our core insurance platform AeGIS™ that was suited to one of the most complex financial environments in the UK and supports our clients business across the EU. The success of AeGIS™ for our clients in London was followed by the successful implementation of our Insurance Intelligence solution CUBUS™ which was instrumental in helping our customers gain valuable insights into their business.</p>
                    </div>
                    <div className={`${deviceSize === 1 ? 'col-3 order-1 ' : 'col-1'}`}>
                        <div className='d-flex justify-content-center' style={{ height: '30px' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/uk.png' alt='UK Flag' />
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-5' style={{ display: `${deviceSize === 1 ? 'None' : ''}` }} ></div>
                    <div className={deviceSize === 1 ? 'col-3' : 'col-1'} >
                        <div className='d-flex justify-content-center' style={{ height: '30px' }}>
                            <div style={{ border: '2px solid #c9c9c9', width: '2px' }}></div>
                        </div>
                        <div>
                            <img className='rounded-circle' style={{ width: '100%', border: '4px solid #c9c9c9' }} src='/Images/ourStory/2008.jpg' alt='Mobile' />
                        </div>
                    </div>
                    <div className={deviceSize === 1 ? 'col-9' : 'col-5'}>
                        <p style={{ marginTop: '30px' }}><b>2008 - mobile</b></p>
                        <p>Anticipating that mobile computing would be mainstream, our mobile division was created in 2008. This division brings SeaTech's decades of experience, knowledge and expertise into the mobile platform. Our mobile team has been involved with every major mobile platform since the very beginning and we have provided solutions to customers across a variety of domains giving us a depth of knowledge and experience. We have also been able to share this expertise with our enterprise Insurance customers thus helping them take advantage of this new paradigm.</p>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1R0XOkF1XubL36JhxZ8HOt8d"
publishable-key="pk_live_51R0WXtF1XubL36JhFQE9Tz19XEZA38LRfgp4CvZXB8xRqDogZ1e2tp4jFmFZ8cVBlnlMPfyDHvDuHJ7nrFQrIGus00a5oB0CLi">
</stripe-pricing-table>
                    </div>
                </div>

            </div>
        </section>
    )
}
