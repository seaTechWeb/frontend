import React, {useState,useEffect} from 'react'
import debounce from 'lodash.debounce'
export default function WebDevelopmentServices() {
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
            <button type="button" className="btn btn-dark my-3" data-bs-toggle="modal" data-bs-target="#whatWeDoWebDevelopment">
                Learn More
            </button>
            <div className="modal fade" id="whatWeDoWebDevelopment" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className=''>
                                <div style={{ backgroundImage: 'url(./Images/Project/adidas/adidas-banner-image.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                    <div style={{ backgroundImage: 'url(/Images/Project/adidas/overlay-pattern.png)' }} >
                                        <div className='container' style={{ paddingTop: '30px' }}>
                                            <div className='row'>
                                                <div className='col-md-6 order-2 order-md-1 d-flex align-items-center ' style={{ padding: '20px 2px' }}>
                                                    <div className={`${deviceSize === 1 ? 'text-center' : ''}`}>
                                                        <img src='/Images/Project/adidas/adidas-logo.png' alt='Adidas' />
                                                        <pre style={{ fontSize: '22px', fontWeight: '900', color: 'white', marginTop: '20px' }} >#HTML 5   #CSS 3   #JavaScript</pre>
            

                                                    </div>
                                                </div>
                                                <div className='col-md-6 order-1 order-md-2'>
                                                    <img style={{ maxWidth: '100%' }} src='/Images/Project/adidas/adidas-image.png' alt='Adidas Project' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    )
}
