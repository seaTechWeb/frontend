import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';


export default function Volkswagen() {
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
        <div>
            <div >
                <div className='d-flex justify-content-center align-self-center' style={{ height: '240px', width: '240px', border: '15px solid black', borderRadius: '125px' ,backgroundColor:'#5454f5'}}>
                    <div data-bs-toggle="modal" className='d-flex justify-content-center align-self-center' data-bs-target="#ClientVolkswagen">
                        <img className='d-flex justify-content-center align-self-center client-img' style={{ width: '100%', height: '100%' }} src='/Images/Feature client/vw-logo.webp' alt='Volkswagen' />
                    </div>
                    <div className="modal fade" id="ClientVolkswagen" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content">
                                <div className="modal-header"  style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                                    <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{ backgroundColor: '#0f0f49',paddingLeft:'0px' }}>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex justify-content-center' style={{ backgroundColor: '#042653', height: `${deviceSize === 1 ? '' : 'calc(100vh - 160px)'}` }}>
                                            <div className='align-self-center' style={{ width: '90%' }}>
                                                <div className="row mx-auto my-auto">
                                                    <div id="volkswagenCrousal" className="carousel slide" data-bs-ride="carousel">
                                                        <div className="carousel-inner" role="listbox">
                                                            <div className="carousel-item active">
                                                                <img className="img-fluid" src="/Images/Feature client/inner image/volkswagen_brand_screen.webp" alt="Slide 1" />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img className="img-fluid" src="/Images/Feature client/inner image/volkswagen_brand_screen2.webp" alt="Slide 2" />
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev w-auto" type="button" data-bs-target="#volkswagenCrousal" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next w-auto" type="button" data-bs-target="#volkswagenCrousal" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6' style={{ backgroundColor: 'white' }}>
                                            <p style={{ fontSize: '48px', fontWeight: '900', marginBottom: '0px' }}>Volkswagen</p>
                                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Car Expense Calculator</p>
                                            <p style={{ fontSize: '20px', marginTop: "35px" }}>Step into the world of Volkswagen, where the journey—from exploration to ownership—is met with innovation and commitment. The dedication to providing customers with a seamless online experience reflects a responsive approach, creating a user-friendly portal tailored to your needs.</p>
                                            <p style={{ fontSize: '20px', marginTop: "35px" }}>Volkswagen's leadership in all-electric cars is rooted in your trust, enabling us to deliver vehicles with zero emissions and a net carbon-neutral impact, contributing to a sustainable future.</p>
                                            <p style={{ fontSize: '20px', marginTop: "35px" }}>Bid farewell to the Volkswagen Passat in the Irish market and welcome the Arteon, a premium fastback boasting refined design and the latest technology. At Volkswagen, it's more than driving; it's</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer text-center"  style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                                    <button type="button" className="btn greenButton" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
