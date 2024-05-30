import React from 'react';

export default function ClientSpotlight() {
  return (
    <section id='clients-spotlight'  style={{minHeight:'40vh',marginTop:'20px', backgroundColor:'#e9e9e9'}}>
      <div className='container '>
        <h1 className='text-center' >CLIENT SPOTLIGHT</h1>
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
    </section>
  );
}
