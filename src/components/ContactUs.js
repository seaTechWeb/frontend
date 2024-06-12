import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function ContactUs() {
  const Host = process.env.REACT_APP_HOST;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${Host}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message })
    });
    const data = await response.json();
    if (data.status === true) {
      setName('');
      setEmail('');
      setMessage('')
      toast.success("Message sent successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      if (data.type === 2) {
        toast.error("Intern server error occured, Please try again later", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        let len = data.error.length
        for (let i = 0; i < len; i++) {
          toast.warn(`${data.error[i].msg}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    }


  };

  return (
    <section id='contactUs' style={{marginBottom:'100px'}}>
      <ToastContainer />
      <div className='container'>
        <h1 className='text-center more-weight' style={{ marginTop: '40px' }}>CONTACT US</h1>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 py-4'>
            <h4>Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Name</b></label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label"><b>Email Address</b></label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className='d-flex flex-row-reverse'>
                <button type="submit" className="btn btn-dark" style={{ width: '215px', height: '60px' }}><b>SEND MESSAGE</b></button>
              </div>
            </form>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>

      <div className='container py-4'>
        <div className='row'>
          <div className='col-md-4' style={{ marginTop: '80px' }}>
            <nav className='d-flex flex-row bd-highlight mb-3 '>
              <img style={{ width: '60px', height: '60px' }} src='/Images/Flags/ICON_FLAG_USA.png' alt='USA Flag' />
              <p className='align-self-center mb-0'><b>USA</b></p>
            </nav>
            <p className='mb-0' style={{ fontSize: '15px' }}>2785 Pacific Coast Highway, #298</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>Torrance, CA 90505</p>
            
            
            <p className='mb-0' style={{ fontSize: '15px' }}>Phone: +1 3107654086</p>
          </div>

          <div className='col-md-4' style={{ marginTop: '80px' }}>
            <nav className='d-flex flex-row bd-highlight mb-3 '>
              <img style={{ width: '60px', height: '60px' }} src='/Images/Flags/ICON_FLAG_UK.png' alt='UK Flag' />
              <p className='align-self-center mb-0'><b>UK</b></p>
            </nav>
            <p className='mb-0' style={{ fontSize: '15px' }}>2nd Floor, New London House,</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>6 London Street, London, EC2R 7LP</p>
            
            
            <p className='mb-0' style={{ fontSize: '15px' }}>Phone : + 44 7583688745</p>
          </div>

          <div className='col-md-4'style={{ marginTop: '80px' }}> 
            <nav className='d-flex flex-row bd-highlight mb-3 '>
              <img style={{ width: '60px', height: '60px' }} src='/Images/Flags/ICON_FLAG_INDONESIA.png' alt='Indonesia Flag' />
              <p className='align-self-center mb-0'><b>INDONESIA</b></p>
            </nav>
            <p className='mb-0' style={{ fontSize: '15px' }}>Menara Kadin Indonesia</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>18th floor Suite B</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>Jl. HR. Rasuna Said x-5 Kav. 2-3B</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>Kuningan, Jakarta 12950</p>
            

            <p className='mb-0' style={{ fontSize: '15px' }}>Phone : + 6221 57903833</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>Fax : + 6221 57903889</p>
          </div>
        </div>
        <div className='row' >
          <div className='col-md-4' style={{ marginTop: '80px' }}>
            <nav className='d-flex flex-row bd-highlight mb-3 '>
              <img style={{ width: '60px', height: '60px' }} src='/Images/Flags/ICON_FLAG_SINGAPORE.png' alt='Singapore flag' />
              <p className='align-self-center mb-0'><b>SINGAPORE</b></p>
            </nav>
            <p className='mb-0' style={{ fontSize: '15px' }}>21 Merchant Road, #04-01</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>Singapore 058267</p>
            
            
            <p className='mb-0' style={{ fontSize: '15px' }}>Phone : +65 6956-7445</p>
          </div>

          <div className='col-md-4 ' style={{ marginTop: '80px' }}>
            <nav className='d-flex flex-row bd-highlight mb-3 '>
              <img style={{ width: '60px', height: '60px' }} src='/Images/Flags/ICON_FLAG_THAILAND.png' alt='Thailand Flag' />
              <p className='align-self-center mb-0'><b>THAILAND</b></p>
            </nav>
            <p className='mb-0' style={{ fontSize: '15px' }}>Level 10 AIA Sathorn Tower,</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>Yannawa, Sathon, bangkok 10120</p>
            <p className='mb-0' style={{ fontSize: '15px' }}>Phone : + 66 20558705</p>
          </div>
        </div>
      </div>
    </section>
  );
}
