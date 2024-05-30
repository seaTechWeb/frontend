import React from 'react';

export default function ClientSpotlight() {
  return (
    <section id='clients-spotlight'>
      <div style={{ minHeight: '40vh', marginTop: '20px', backgroundColor: '#e9e9e9' }}>
        <div className='container'style={{ marginTop: '20px'}} >
          <h1 className='text-center' style={{marginTop:'20px'}} >CLIENT SPOTLIGHT</h1>
          <div className='row'>
            <div className='col-md-4'>
              <a href='https://example.com/page1'>
                <img src='./Images/sompo_350x205.png' alt='Client 1' className='client-img rounded mx-auto d-block' />
              </a>
            </div>
            <div className='col-md-4'>
              <a href='https://example.com/page2'>
                <img src='/Images/blue-bird-logo.png' alt='Client 2' className='client-img rounded mx-auto d-block' />
              </a>
            </div>
            <div className='col-md-4'>
              <a href='https://example.com/page3'>
                <img src='/Images/logo_astra-international.png' alt='Client 3' className='client-img rounded mx-auto d-block' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: '60px' }}>
        <h1 className='text-center' >FEATURED CLIENT</h1>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/aia.png' alt='Aia' />
            <p style={{ fontSize: '20px' }} className='text-center'>AIA Insurance</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/raksa.png' alt='Asuransi Raksa' />
            <p style={{ fontSize: '20px' }} className='text-center'>Asuransi Raksa</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/logo_ITM.png' alt='Indo Tambang Raya Megah' />
            <p style={{ fontSize: '20px' }} className='text-center'>Indo Tambang Raya Megah</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/logo-aioi.png' alt='AIOI Indonesia' />
            <p style={{ fontSize: '20px' }} className='text-center'>AIOI Indonesia</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '145px' }} src='/Images/Feature client/starbucks.png' alt='Starbucks Indonesia' />
            <p style={{ fontSize: '20px' }} className='text-center'>Starbucks Indonesia</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/nutrifood.png' alt='Nutrifood' />
            <p style={{ fontSize: '20px' }} className='text-center'>Nutrifood</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/mnc.png' alt='MNC' />
            <p style={{ fontSize: '20px' }} className='text-center'>MNC</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/gardaoto.png' alt='Garda Oto' />
            <p style={{ fontSize: '20px' }} className='text-center'>Garda Oto</p>
          </div>

          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/nonstophonolulu.png' alt='Nonstop Honolulu' />
            <p style={{ fontSize: '20px' }} className='text-center'>Nonstop Honolulu</p>
          </div>

          <div className='col-md-4'>

          </div>
          <div className='col-md-4 text-center'>
            <img  style={{ width: '410px' }} src='/Images/Feature client/lib.png' alt='Liberty Mutual Insurance' />
            <p style={{ fontSize: '20px' }} className='text-center'>Liberty Mutual Insurance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
