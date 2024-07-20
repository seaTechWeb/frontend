import React,{useState, useEffect} from 'react'
import debounce from 'lodash.debounce';


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
        <div>
            <div>
                <div className='d-flex justify-content-center align-self-center' style={{ height: '240px', width: '240px', border: '15px solid black', borderRadius: '125px',backgroundColor:'#d9d9d9' }}>
                    <div data-bs-toggle="modal" className='d-flex justify-content-center align-self-center' data-bs-target="#companyAdidas">
                        <img className='d-flex justify-content-center align-self-center client-img' style={{ width: '100%', height: '100%' }} src='/Images/Feature client/adidas-logo.webp' alt='Adidas' />
                    </div>
                    <div className="modal fade" id="companyAdidas" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content">
                                <div className="modal-header" style={{ backgroundColor: '#0f0f49', border: 'none' }}> 
                                    <button type="button" className="btn-close greenButton" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{paddingLeft:'0px',backgroundColor:'#0f0f49'}}>
                                    <div className='row'>
                                        <div className='col-md-6 d-flex justify-content-center' style={{ backgroundColor: 'black', height: `${deviceSize === 1?'' : 'calc(100vh - 160px)'}` }}>
                                            <div className='align-self-center' style={{ width: '90%' }}>
                                                <div className="row mx-auto my-auto">
                                                    <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                                                        <div className="carousel-inner" role="listbox">
                                                            <div className="carousel-item active">
                                                                <img className="img-fluid" src="/Images/Feature client/inner image/adidas-image.webp" alt="Slide 1" />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img className="img-fluid" src="/Images/Feature client/inner image/adidas-image2.webp" alt="Slide 2" />
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev w-auto" type="button" data-bs-target="#recipeCarousel" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next w-auto" type="button" data-bs-target="#recipeCarousel" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6' style={{ backgroundColor: 'white' }}>
                                            <p style={{fontSize:'48px', fontWeight:'900', marginBottom:'0px'}}>Adidas</p>
                                            <p style={{fontSize:'20px', fontWeight:'700'}}>Online Sportswear Products</p>
                                            <p style={{fontSize:'20px', marginTop:"35px"}}>Embark on a digital adventure with Adidas, a global powerhouse known for redefining the boundaries of footwear and apparel. In the vast landscape of online shopping, Adidas acknowledged the pivotal need to ensure a seamless and delightful experience for users.</p>
                                            <p style={{fontSize:'20px', marginTop:"35px"}}>The focus was clear – how to translate the excellence of physical products into the virtual realm. Adidas set out to create not just a website but an interactive platform mirroring the dynamism of your lifestyle. Tackling the challenge of stock availability, Adidas introduced an innovative automated backend service.</p>
                                            <p style={{fontSize:'20px', marginTop:"35px"}}>This groundbreaking solution seamlessly integrates with the web</p>
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
