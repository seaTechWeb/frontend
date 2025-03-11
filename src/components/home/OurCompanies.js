import React from 'react'
import { Link } from 'react-router-dom';

export default function OurCompanies() {
    return (
        <section id='OurCompanies' style={{ paddingTop: '65px' }} >
            <div style={{ backgroundColor: '#e9e9e9', paddingTop: '20px', paddingBottom: '50px', marginTop: '30px', borderTop: '5px solid #0f0f49', borderBottom: '5px solid #0f0f49' }}>
                <div className='container' >
                    <h1 className='text-center more-weight' >OurCompanies</h1>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div data-bs-toggle="modal" data-bs-target="#staticBackdrop5">
                                <img src='./Images/sompo_350x205.png' alt='Client 1' className='client-img rounded mx-auto d-block' />
                            </div>
                            <div className="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className='container  my-4'>
                                                <h1 className='text-center'>NATIONWIDE DRUG CENTERS.</h1>
                                                <hr />
                                                <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="./Images/sompo_350x205.png" alt='NATIONWIDE DRUG CENTERS.' /></div>
                                                <p>  NATIONWIDE DRUG CENTERS(NDC) was founded in 2016 by two college friends with a background in the trucking industry. Having owned and managed their own fleet, they experienced firsthand the challenges of maintaining compliance with drug and alcohol testing regulations. Recognizing a gap in the market, they saw an opportunity to leverage technology to streamline the testing process, specifically catering to trucking companies.
                                                </p>
                                                <br />
                                                <p>Seatech Consulting is the leading Information Technology provider to Nationwide Drug Centers in its endeavor to leverage technology in managing and controlling its expansive network of lab collections. With a deep understanding of industry requirements and regulatory compliance, they developed a tech-driven platform designed to simplify drug testing for trucking businesses. Their solution provides efficient scheduling, tracking, and compliance management, helping companies stay ahead of DOT regulations. Over the years, NDC has built a reputation for reliability, accuracy, and exceptional service, becoming a trusted partner for fleets nationwide.</p>
                                                <br />
                                                <p>With Seatech Consulting as a partner, NDC gets IT right!</p>
                                                <div className='text-center'>
                                                    Client : <a href="http://www.nwdrugtesting.com" target='_blank' rel="noreferrer">NATIONWIDE DRUG CENTERS</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer text-center">
                                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <Link to="orderxperts" style={{ cursor: 'pointer',display:'flex',justifyContent:'center',alignItems:'center' }}>  
                                <img
                                    className='client-img'
                                    src="/Images/Xperts Restaurant/OrderXpert Logo.png"
                                    alt='Xpert Restaurant'
                                    style={{ width: '90%', height: '80%', margin: 'auto' }}
                                />
                            </Link>
                        </div>
                        <div className='col-md-4'>
                            <div data-bs-toggle="modal" data-bs-target="#staticBackdrop8">
                                <img src='/Images/logo_astra-international.png' alt='Client 3' className='client-img rounded mx-auto d-block' />
                            </div>
                            <div className="modal fade" id="staticBackdrop8" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className='container  my-4'>
                                                <h1 className='text-center'>Astra Motor Catalogue</h1>
                                                <hr />
                                                <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="/Images/logo_astra-international.png" alt='Astra Motor Catalogue' /></div>
                                                <p>
                                                    Astra International Group is a prominent industrial conglomerate in Indonesia with interests in a diverse range of industries. It is well known as the leading distributor of many automotive brand in Indonesia, Astra International needed to make their latest cars and motorcycles accessible to their customers anywhere and on any device. They approached us to make e-Catalogue for Honda and Auto 2000.</p>
                                                <br />
                                                <p>The application has some useful features such as credit simulator, service booking, and test drive booking.</p>
                                                <div className='text-center'>
                                                    <span style={{ marginRight: '10px' }}>Client : <a href="https://www.astra.co.id/" target='_blank' rel="noreferrer"> Astra International</a></span>
                                                    <br />
                                                    <span style={{ marginLeft: '10px' }}>Service : <a href="https://play.google.com/store/apps/details?id=com.langit7.welovehonda&hl=en" target='_blank' rel="noreferrer"> Android (We Love Honda)</a></span>
                                                    <span style={{ marginLeft: '10px' }}><a href="https://play.google.com/store/apps/details?id=id.co.astra.ai.dev1&hl=en" target='_blank' rel="noreferrer"> Android (Auto 2000)</a></span>
                                                    <span style={{ marginLeft: '10px' }}><a href="https://apps.apple.com/id/app/astra-motor-catalogue/id995136640" target='_blank' rel="noreferrer">  iOS (We Love Honda)</a></span>
                                                    <span style={{ marginLeft: '10px' }}><a href="https://apps.apple.com/id/app/auto2000-digiroom/id421805050" target='_blank' rel="noreferrer"> iOS (Auto 2000)</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer text-center">
                                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}