import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const templateParams = {
            from_name: name,
            message: message,
            from_email: email,
            reply_to: email,
        };

        emailjs.send('service_kgbijzh', 'template_oa19c6e', templateParams, 'VpD7p9itEu1Ar354C')
            .then((response) => {
                setName('');
                setEmail('');
                setMessage('');
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
            }, (error) => {
                toast.error("Internal server error occurred, Please try again later", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    };



    const buttonStyle = {
        width: '215px',
        height: '60px',
        backgroundColor: isHovered ? '#59B702' : 'rgb(10, 193, 10)',
        color:'white',
        border: 'none',
        transition: 'background-color 0.3s, color 0.3s'
    };

    return (
        <div style={{ backgroundColor: '#0f0f49',paddingTop: '30px', paddingBottom: '30px' }}>
            <ToastContainer />
            <div className='container'>

                <div className='row'>
                    <div className='col-md-5' style={{marginTop:'30px'}}>
                        <div className='text-center' style={{ width: '170px', height: '50px', backgroundColor: 'black' }}>
                        <p className='text-center' style={{ fontSize: '28px', fontWeight: '900', color: 'whitesmoke' }}>Contact us</p>
                        </div>
                        <p style={{ marginTop: '30px', fontSize: '40px', fontWeight: '800',color:'whitesmoke' }}>Looking for a development services company?</p>
                        <p style={{ marginTop: '30px', fontSize: '40px', fontWeight: '800',color:'whitesmoke' }}>Call - (206)571-7659</p>
                        <p style={{ marginTop: '30px', fontSize: '20px', fontWeight: '800',color:'whitesmoke' }}>3055 NW YEON AVE  UNTT#271</p>
                        <p style={{ marginTop: '30px', fontSize: '20px', fontWeight: '800',color:'whitesmoke' }}>Portland, OR 97210</p>
                        <p style={{ marginTop: '30px', fontSize: '20px', fontWeight: '500',color:'whitesmoke' }}>Get a free consultation now.</p>
                        <p style={{ marginTop: '30px', fontSize: '20px', fontWeight: '500',color:'whitesmoke' }}>Please fill the form or send us an email</p>
                        <a href="mailto:info@seatechconsulting.com" style={{ color: 'white' }}>info@seatechconsulting.com</a>
 <br />
<a href="mailto:info@seatechconsulting.com" style={{ color: 'white' }}>
  Order@seatechconsulting.com
</a>
</div>
                    <div className='col-md-7' style={{marginTop:'30px'}}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'whitesmoke'}}><b>Name</b></label>
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
                                <label htmlFor="exampleFormControlInput2" className="form-label" style={{color:'whitesmoke'}}><b>Email Address</b></label>
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
                                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:'whitesmoke'}}>Message</label>
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
                                <button
                                    type="submit"
                                    className="btn"
                                    style={buttonStyle}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <b>SEND MESSAGE</b>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}