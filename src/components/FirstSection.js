import React from 'react'

export default function FirstSection() {
  return (
    <section>
      <div className='container'>
        <div className='row' style={{marginTop:'20px'}}>
          <div className='col-md-2'></div>
          <div className='col-md-4 order-2 order-md-1 align-self-center' >
            <p style={{fontSize:'40px', fontWeight:'500',marginTop:'35px'}}>SEATECH</p>
            <p style={{fontSize:'30px', fontWeight:'500'}}>Bridging the Human & Technology Divide</p>
          </div>
          <div className='col-md-4 d-flex justify-content-center order-1 order-md-2' >
            <img  className='fit-image' style={{ width:'90%' }} src='/Images/FirstSection/Screenshot from 2024-06-13 02-18-44.png' alt='Four people' />
          </div>
        </div>
      </div>
    </section>
  )
}
