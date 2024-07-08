import React from 'react'
import ContactPage from '../../ContactPage'


export default function Teams() {

    return (
        <div>
            <div data-bs-toggle="modal" className='' data-bs-target="#consultingTeams">
                <button type="button" className="btn btn-dark">Learn more &rarr;</button>
            </div>
            <div className="modal fade" id="consultingTeams" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(/Images/Whatwedo/consulting/modals/hire-developer-banner-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 ' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                                            <div className='d-flex align-self-center' style={{ display: 'flex', alignContent: 'center' }}>
                                                <div>
                                                    <p style={{ fontSize: '18px', marginBottom: '0px' }}>Dedicated Teams</p>
                                                    <p style={{ fontSize: '60px', fontWeight: '900', marginBottom: '0px' }}>Hire dedicated software development team</p>
                                                    <p style={{ fontSize: '18px', marginBottom: '0px' }}>Fulfilling your needs – Our objective</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '40px' }}>
                                <div className='row'>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div>
                                            <p style={{ fontSize: '40px', fontWeight: '900' }}>Hire dedicated developers</p>
                                            <p>If the lack of the right talent is delaying your project delivery, hiring our dedicated teams can be the optimum solution for you. Our dedicated teams will exclusively work on your projects while sitting in our well-established development center.</p>
                                            <p>Fullestop offers quality services through cost-effective measures. By hiring our dedicated team, you can save up to 60% on your development costs. Our dedicated team hire services allow you to hire experienced developers for every technology including Node.js, Angular, React, Laravel, MongoDB, HTML5, Magento, PHP, ASP.NET, Drupal, WordPress, MySQL, MS SQL many more. Our experienced project managers look after your project progress. Our expert Graphics Designers craft creative and lucrative solutions.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <img style={{ borderRadius: '10px', minHeight: '300px', maxHeight: '550px', maxWidth: "100%" }} src='/Images/Whatwedo/consulting/modals/hire-developer-image.webp' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='container' style={{ marginTop: '40px' }}>
                                <p style={{ fontSize: '45px', fontWeight: '900', marginBottom: '0px' }} className='text-center'>Dedicated development team</p>
                                <p className='text-center'>Fullestop has teams of experienced web designers, developers, project managers, IT consultants, network managers, business analysts, quality analysts, and internet marketing professionals. Experts with the desired skill set can be made available at your disposal at a fixed monthly cost.</p>
                                <div className="customerneed-section">
                                    <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
                                        {developmentTeams.map((solution, index) => (
                                            <li
                                                className="d-flex align-items-center justify-content-center"
                                                key={index}
                                            >
                                                <figure>
                                                    <img src={solution.link} alt='dedicted Team' />
                                                </figure>
                                                <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className='container' style={{ marginTop: '40px' }}>
                                <p style={{ fontSize: '45px', fontWeight: '900', marginBottom: '0px' }} className='text-center'>Hire skills</p>
                                <p className='text-center'>At fullestop, we offer dedicated team to hire with various skills:</p>
                                <div className="customerneed-section">
                                    <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
                                        {hireSkill.map((solution, index) => (
                                            <li
                                                className="d-flex align-items-center justify-content-center"
                                                key={index}
                                            >
                                                <figure>
                                                    <img src={solution.link} alt='dedicted Team' />
                                                </figure>
                                                <strong dangerouslySetInnerHTML={{ __html: solution.text }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <ContactPage/>
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

const developmentTeams = [
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon1.svg",
        text: "Dedicated developer working just for you"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon2.svg",
        text: "Right talent for every technology"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon14.svg",
        text: "24 hours support"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon13 (1).svg",
        text: "Communication throughlatest techniques"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon5.svg",
        text: "Gain intellectual property rights"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon6.svg",
        text: "Customized, client-centric solutions"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/excellent-infrastructure.svg",
        text: "Excellent infrastructure"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon9.svg",
        text: "Well defined processes"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon8.svg",
        text: "Recruitment by international certified recruiter"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon10.svg",
        text: "Intellectual Property Right with the client"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon4.svg",
        text: "W3C and International standard compliances"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon12.svg",
        text: " Complete protection with firewall, password, and encryption"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon13.svg",
        text: "Freedom of selecting the resources you want"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/consulting-icon14 (1).svg",
        text: "Highest levels of creativity and innovation"
    },
    {
        link: "/Images/Whatwedo/consulting/modals/Team/05-solutions.svg",
        text: "xperienced and highly skilled management team"
    },
]

const hireSkill = [
    {
        link :"/Images/Whatwedo/consulting/modals/Team/hireskills_icon1.svg",
        text:"Hire Web Developer"
    },
    {
        link :"/Images/Whatwedo/consulting/modals/Team/hireskills_icon2.svg",
        text:"Hire Mobile Developer"
    },
    {
        link :"/Images/Whatwedo/consulting/modals/Team/hireskills_icon3.svg",
        text:"Hire Database Developer"
    },
    {
        link :"/Images/Whatwedo/consulting/modals/Team/hireskills_icon4.svg",
        text:"Hire Open Source Developer"
    },
    {
        link :"/Images/Whatwedo/consulting/modals/Team/hireskills_icon5.svg",
        text:"Hire Quality Analyst"
    },
]