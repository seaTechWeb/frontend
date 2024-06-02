import React from 'react';

export default function ClientSpotlight() {
  return (
    <section id='clients-spotlight'>
      <div style={{ backgroundColor: '#e9e9e9', paddingTop:'20px' }}>
        <div className='container' >
          <h1 className='text-center' >CLIENT SPOTLIGHT</h1>
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
                        <h1 className='text-center'>SOMPO JAPAN INSURANCE INC.</h1>
                        <hr />
                        <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="./Images/sompo_350x205.png" alt='SOMPO JAPAN INSURANCE INC.' /></div>
                        <p>Sompo Japan Insurance Inc, formerly called The Yasuda Fire and Marine Insurance Company, Ltd. was established since 1888, is one of the three largest non-life insurers in Japan. It has total assets of USD 28 billion and net premium income of USD 7.1 billion (1998). The company has become a major player in worldwide insurance market with its network of forty International offices across five continents. Despite Asia's financial crisis (1997), Sompo Japan remains committed to the region, establishing strong presence in China, India, Indonesia, Malaysia, Myanmar, Philippines, Singapore, Thailand and Vietnam
                        </p>
                        <br />
                        <p>SeaTech is the leading Information Technology provider to Sompo Japan in its endeavor to leverage technology in managing and controlling its expansive network of offices across Asia and Europe.</p>
                        <br />
                        <p>AeGIS<sup>TM</sup> and IRIS<sup>TM</sup>, SeaTech's advanced insurance and reinsurance solutions, are the anchor in Sompo Japan's information technology strategy. Both systems have been implemented in several of Sompo Japan's offices across Asia and will become the core technology to support Sompo Japan's operations throughout the region</p>
                        <br />
                        <p>Consistent with SeaTech's management philosophy of working closely with its clients, SeaTech's professional team collaborated with Sompo Japan's staff across the region to ensure the proper implementation and maintenance of AeGIS<sup>TM</sup> and IRIS<sup>TM</sup>. By employing a win-win strategy, Sompo Japan has the flexibility to independently produce statistics and reports from both systems, while at the same time, rely on SeaTech to continuously evolve the core platform of AeGIS<sup>TM</sup> and IRIS<sup>TM</sup>.
                        </p>
                        <br />
                        <p>AeGIS<sup>TM</sup> and IRIS<sup>TM</sup> have enabled Sompo Japan Insurance Inc. to better oversee and manage its businesses across Asia and Europe. Top executives can assess profit, loss and risks more effectively thanks to detailed, accurate statistic reports. The whole insurance process, from underwriting to claims to reinsurance to accounting, can be done more efficiently with re-engineered workflow.</p>
                        <br />
                        <p>With SeaTech as a partner, Sompo Japan gets IT right!</p>
                        <div className='text-center'>
                          Client : <a href="http://www.sjnk.co.id/" target='_blank' rel="noreferrer">SOMPO JAPAN INSURANCE INC.</a>
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
              <div data-bs-toggle="modal" data-bs-target="#staticBackdrop6">
                <img src='/Images/blue-bird-logo.png' alt='Client 2' className='client-img rounded mx-auto d-block' />
              </div>
              <div className="modal fade" id="staticBackdrop6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className='container  my-4'>
                        <h1 className='text-center'>Blue Bird Taxi Mobile Reservation System</h1>
                        <hr />
                        <div className='text-center'><img style={{ maxWidth: '90%', width: '450px', margin: '30px' }} src="/Images/Feature client/350x205_bluebird.png" alt='Blue Bird Taxi Mobile Reservation System' /></div>
                        <p>Blue Bird Taxi had more than 300 telephone lines to handle taxi orders in Jakarta.During rush hour, Blue Bird Taxi’s telephone lines were frequently jammed, resulting in lost businesses and customer complaints.In 2011,seatechmobile proposed to Blue Bird taxi to launch a mobile app to alleviate this problem.
                        </p>
                        <br />
                        <p>Orders through mobile app are fed directly to Blue Bird Taxi’s servers, bypassing Blue Bird Taxi’s telephone switchboard. A customer who orders a taxi through the mobile app can also track the movement of the taxi assigned to him using Google map. In traffic jam prevalent Jakarta, this feature is handy; it reassures the customer that a taxi is on its way. As the customer waits, he can monitor the taxi heading to his location. The taxi driver can also call the customer’s mobile phone if he can’t find the address and vice-versa if the customer needs to contact the driver for additional direction. Blue Bird Taxi mobile app is now available on iOS, Android and Blackberry and cover major cities in Indonesia.</p>
                        <br />
                        <p>With over 750,000 downloads, the apps have become indispensable to many residents and expats in Indonesia.</p>
                        <div className='text-center'>
                          <span style={{ marginRight: '10px' }}>Client : <a href="https://www.bluebirdgroup.com/" target='_blank' rel="noreferrer">Bluebird</a></span>
                          <span style={{ marginLeft: '10px' }}>Service : <a href="https://play.google.com/store/apps/details?id=com.seatech.bluebird&hl=en" target='_blank' rel="noreferrer">Android</a></span>
                          <span style={{ marginLeft: '10px' }}><a href="https://apps.apple.com/id/app/mybluebird-taxi/id476533261" target='_blank' rel="noreferrer"> iOS</a></span>
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
                          <br/>
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
      <div className='container' style={{ marginTop: '60px' }}>
        <h1 className='text-center' >FEATURED CLIENT</h1>
        <div className='row'>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/aia.png' alt='Aia' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>AIA Insurance</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/raksa.png' alt='Asuransi Raksa' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>Asuransi Raksa</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/logo_ITM.png' alt='Indo Tambang Raya Megah' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>Indo Tambang Raya Megah</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/logo-aioi.png' alt='AIOI Indonesia' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>AIOI Indonesia</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%' }} src='/Images/Feature client/starbucks.png' alt='Starbucks Indonesia' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>Starbucks Indonesia</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/nutrifood.png' alt='Nutrifood' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>Nutrifood</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/mnc.png' alt='MNC' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>MNC</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/gardaoto.png' alt='Garda Oto' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>Garda Oto</p>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/nonstophonolulu.png' alt='Nonstop Honolulu' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>Nonstop Honolulu</p>
          </div>
          <div className='col-md-4'>
          </div>
          <div className='col-md-4 text-center' style={{height:'170px', marginTop:'30px'}}>
            <div style={{height:'150px', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img style={{ maxHeight: '80%' , maxWidth:'70%'}} src='/Images/Feature client/lib.png' alt='Liberty Mutual Insurance' />
            </div>
            <p style={{ fontSize: '20px' }} className='text-center'>Liberty Mutual Insurance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
