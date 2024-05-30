import React from 'react';

export default function FirstSection() {
    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className='row'>
                <div className='col-md-6 order-2 order-md-1  d-flex align-items-center'>
                    <div>
                        <h1>SEATECH</h1>
                        <p>Bridging the human & technology Divide</p>
                    </div>
                </div>
                <div className='col-md-6 order-1 order-md-2 text-center'>
                    <div
                        style={{
                            width: '100%',
                            position: 'relative',
                            backgroundImage: 'url(./Images/awan.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <img
                            style={{
                                width: '80%',
                                position: 'relative',
                                bottom: '48%',
                                margin: '0 auto',
                            }}
                            src='./Images/people_4.png'
                            alt='four people'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
