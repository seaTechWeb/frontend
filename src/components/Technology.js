import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';


export default function Technology() {
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
        <section id='technology'>
            <div className='container'>
                <h1 className='text-center more-weight' style={{ marginTop: '140px', marginBottom: '10px' }}>OUR TECHNOLOGY STACK</h1>
                <div className='row'>
                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/sql_server.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/mysql.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/angular.jpg' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/codeigniter.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/oracle.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/mongo.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%' , maxWidth : '80%'  }} src='/Images/Tech/microsoftdotnet.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/aws_logo.jpg' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/azure.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/firebase.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/swift.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/crystal_reports.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/c_sharp.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/object_c.png' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/tablequ.jpg' alt='SQL server' />
                    </div>

                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                        <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/bitbucket.png' alt='SQL server' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1' style={{ marginTop: '30px', display: `${deviceSize === 1 ? 'none':''}`  }}></div>
                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                         <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/php.png' alt='SQL server' />
                    </div>
                    <div className='col-md-1' style={{ marginTop: '30px', display: `${deviceSize === 1 ? 'none':''}` }}></div>
                    <div className={` ${deviceSize === 1 ?'col-6':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                         <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/java.jpg' alt='SQL server' />
                    </div>
                    <div className='col-md-1' style={{ marginTop: '30px', display: `${deviceSize === 1 ? 'none':''}` }}></div>
                    <div className={` ${deviceSize === 1 ?'col-12':'col-md-3'} d-flex align-items-center justify-content-center`} style={{height:'140px'}}>
                         <img style={{ height:'80%'  , maxWidth : '80%' }} src='/Images/Tech/OpenText_Gupta.jpg' alt='SQL server' />
                    </div>
                </div>
            </div>
        </section>
    )
}
