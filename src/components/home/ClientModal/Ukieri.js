import React,{useState, useEffect} from 'react'
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
        <div>
            <div>
                <div className='d-flex justify-content-center align-self-center' style={{ height: '240px', width: '240px', border: '15px solid black', borderRadius: '125px',backgroundColor:'#00A5E6' }}>
                    <div data-bs-toggle="modal" className='d-flex justify-content-center align-self-center' data-bs-target="#clientUkieri">
                        <img className='d-flex justify-content-center align-self-center client-img' style={{ width: '100%', height: '100%' }} src='/Images/Feature client/british-council-logo.webp' alt='Adidas' />
                    </div>
                    <div className="modal fade" id="clientUkieri" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content">
                                <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                                    <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{backgroundColor:'#0f0f49',paddingLeft:'0px'}}>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex justify-content-center' style={{ backgroundColor: '#D1405D', height: `${deviceSize === 1?'' : 'calc(100vh - 160px)'}` }}>
                                            <div className='align-self-center' style={{ width: '90%' }}>
                                                <div className="row mx-auto my-auto">
                                                    <div id="ukieriCrousal" className="carousel slide" data-bs-ride="carousel">
                                                        <div className="carousel-inner" role="listbox">
                                                            <div className="carousel-item active">
                                                                <img className="img-fluid" src="/Images/Feature client/inner image/ukieri-brand-screen1.webp" alt="Slide 1" />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img className="img-fluid" src="/Images/Feature client/inner image/ukieri-brand-screen2.webp" alt="Slide 2" />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img className="img-fluid" src="/Images/Feature client/inner image/ukieri-brand-screen3.webp" alt="Slide 2" />
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev w-auto" type="button" data-bs-target="#ukieriCrousal" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next w-auto" type="button" data-bs-target="#ukieriCrousal" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6' style={{ backgroundColor: 'white' }}>
                                            <p style={{fontSize:'48px', fontWeight:'900', marginBottom:'0px'}}>British council</p>
                                            <p style={{fontSize:'20px', fontWeight:'700'}}>Global Education Hub</p>
                                            <p style={{fontSize:'20px', marginTop:"35px"}}>Explore collaborative education with UKIERI's secure platform at www.ukieri.org. UK-India Education and Research Initiative (UKIERI) started in April 2006 with the aim of enhancing educational linkages between India and the UK. Elevate your learning experience through visually appealing and user-friendly features, ensuring the safety of sensitive information. The project focuses on three areas capacity building and leadership development, research innovation and partnerships, and Skill development in higher education.</p>
                                            <p style={{fontSize:'20px', marginTop:"35px"}}>Engage with Higher Education Leadership Development, SPARC Webinars, DST Partnership Development, and Mobility Program. Uniting minds globally, UKIERI emphasizes bilateral benefits in Research and Innovation, and Education and Training. Join us in</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer text-center" style={{ backgroundColor: '#0f0f49', border: 'none' }}>
                                    <button type="button" className="btn greenButton" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
