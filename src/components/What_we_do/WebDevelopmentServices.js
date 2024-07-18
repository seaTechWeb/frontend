import React, { useRef, useEffect, useState } from 'react'
import ContactPage from '../ContactPage'
import Technology from '../TechnologyContent'
import Node from './webModals/Node'
import Angular from './webModals/Angular'
import CakePHP from './webModals/CakePHP'
import Lamp from './webModals/Lamp'
import Laravel from './webModals/Laravel'
import Microsoft from './webModals/Microsoft'
import Python from './webModals/Python'
import Ruby from './webModals/Ruby'
import Wordpress from './webModals/Wordpress'


export default function WebDevelopmentServices() {
    const webDevelopmentTextRef = useRef(null)
    const webDevelopmentImageRef = useRef(null)
    const [imageHeight, setImageHeight] = useState('450px')
    useEffect(() => {
        const handleResize = () => {
            if (webDevelopmentTextRef.current && webDevelopmentImageRef.current) {
                const textHeight = webDevelopmentTextRef.current.clientHeight;
                setImageHeight(`${textHeight + 60}px`);
            }
        };
        handleResize(); // Set initial height
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div style={{ marginTop: '86px' }}>
            <div className='borderBottom' style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(/Images/Whatwedo/web-development-banner.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center' style={{ minHeight: '450px', paddingTop: '40px', color: 'white' }}>
                            <div className=''>
                                <h5>Driven to deliver</h5>
                                <p style={{ fontSize: '48px', fontWeight: '900', marginBottom: '0px' }}>Website development company</p>
                                <p>When it comes to high-end development we don’t forget about the basics. Delivering on time, on budget, and per scope. It’s what we’ve done for over a decade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: '40px' }}>
                <div className='row imageContainer'>
                    <div className='col-md-6'>
                        <div ref={webDevelopmentTextRef}>
                            <p className='heading'>Web development services</p>
                            <p>Living in today's digital world, the Web has a much wider reach than any other form of digital media. As an invaluable and always accessible resource for information, it serves as a center of your online presence for your Business. Web Development starts with a well thought-out strategy and plan, understanding business goals, end user needs, and the competition. A strategically planned website helps establish credibility and provides an opportunity to tell your customers why they should trust you.
                            </p>
                            <p>In today's expanding digital marketplace, it just isn’t enough to show up. Engaging aspect of the website is one of the core elements of a successful online presence and Usability plays a vital role in the effectiveness of your online investment. However, Designing a usable system requires far more than simply applying technology. Knowing and understanding your online customers and meeting their expectations is the key that sets your web presence apart from your competition. Optimizing the User Experience helps optimize your success and humanize your relationship with your online visitors. The process of constructing a perfect usability strategy can be complex and requires deep analysis of the user behaviour and research based guidelines.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='imageDesign' ref={webDevelopmentImageRef} style={{ borderRadius: '10px', width:'100%', height:imageHeight }} src='/Images/Whatwedo/services-front2.jpg' alt='' />
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: '60px' }}>
                <div className='text-center'>
                    <p className='heading'>Innovation & excellence powered by latest technology</p>
                </div>
                <div className='row'>
                    {data.map((item, index) => (
                        <div className='col-md-4' style={{ marginBottom: '40px' }} key={index}>
                            <div className="card cardDesign">
                                <div className="card-body">
                                    <h4 className="card-title">{item.language}</h4>
                                    <h2>{item.type}</h2>
                                    <p className="card-text">
                                        {item.text}
                                    </p>
                                    {item.component}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div>
                <div style={{ backgroundColor: 'black' }}>
                    <div className='container' style={{ marginTop: '40px', paddingTop: '20px' }}>
                        <div className='d-flex justify-content-center'>
                            <p style={{ fontSize: '40px', color: 'white' }}>
                                Web <span style={{ color: '#f6c315' }}>technologies</span> we work with
                            </p>

                        </div>
                        <p className='text-center' style={{ marginBottom: '0px', color: 'white' }}>Our elite team of young and highly skilled web developers possesses in-depth knowledge of design and excels in various scripting and coding languages such as Node, Angular, React, Laravel, MongoDB, HTML5, PHP, ASP.NET and Wordpress. We also hold proficiency in CSS3, Magento, CMS and object modeling.</p>
                    </div>
                </div>
                <Technology />
            </div>
            <ContactPage />
        </div>
    )
}

const data = [
    {
        language: "Nodejs",
        type: "Development",
        text: "Modern businesses are rapidly adapting to the online digital space. Delivering a successful Digital asset is all about vision, planning and quality implementation...",
        component: <Node />
    },
    {
        language: "Angular",
        type: "Development",
        text: "In the mobile-centered world of today, firms are more focused on creating applications that can work seamlessly across platforms. This approach is critical...",
        component: <Angular />
    },
    {
        language: "Python",
        type: "Development",
        text: "An astronomical rise in the Mobile trend has transformed the way Businesses interact with their customers. Smart technologies are trying to bridge…",
        component: <Python />
    },
    {
        language: "Laravel",
        type: "Development",
        text: "Fullestop, as a Laravel development company offers a complete skill set in the Laravel Customization and Laravel web development. With our conscientious…",
        component: <Laravel />
    },
    {
        language: "Wordpress",
        type: "Development",
        text: "Handling a large customer base from small business startups to large enterprises, Fullestop has gained relevant experience and a strong expertise…",
        component: <Wordpress />
    },
    {
        language: "CakePHP",
        type: "Development",
        text: "Experience the true power of CakePHP Development with Us. Be Scalable, Flexible and Smart. Built on solid Design Patterns and Engineering…",
        component: <CakePHP />
    },
    {
        language: "Microsoft",
        type: ".NET Development",
        text: "In the era of iOS and iPhone Apps where everything is at the touch of your thumb, businesses can actually take the leverage of this smart technology to…",
        component: <Microsoft />
    },
    {
        language: "Ruby On Rails",
        type: "Development",
        text: "Critical to any company’s cloud implementation, architecture and automation are integral parts of any cloud service offered. Cloud Solutions offered…",
        component: <Ruby />
    },
    {
        language: "Lamp (PHP/MySql)",
        type: "Solutions",
        text: "Fullestop offers custom LAMP (Linux, Apache, MySQL, PHP) development solutions to help you with your offshore development, programming and e-commerce…",
        component: <Lamp />
    },
]
