import React from 'react';


export default function Technology() {
    return (
        <div>
            <div style={{ backgroundColor: '#000' }}>
                <div className='container' >
                    <div className="customerneed-section py-4 py-md-5 pb-3">
                        <ul className="d-flex flex-wrap justify-content-center iconlisting-card">
                            {data.map((item, index) => (
                                <li
                                    className="d-flex align-items-center justify-content-center"
                                    key={index}
                                    style={{ border: 'none' }}
                                >
                                    <figure >
                                        <img src={item.link} alt='SEO' />
                                    </figure>
                                    <strong dangerouslySetInnerHTML={{ __html: item.caption }} style={{ color: 'white' }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        link: "/Images/Technology/angular-tech-icon.svg",
        caption: "Angular",
    }, {
        link: "/Images/Technology/dotnet-tech-icon.svg",
        caption: "ASP.NET",
    }, {
        link: "/Images/Technology/drupal-tech-icon.svg",
        caption: "Drupal",
    }, {
        link: "/Images/Technology/html-tech-icon.svg",
        caption: "HTML 5",
    }, {
        link: "/Images/Technology/laravel-tech-icon.svg",
        caption: "Laravel",
    }, {
        link: "/Images/Technology/magento-tech-icon.svg",
        caption: "Magento",
    }, {
        link: "/Images/Technology/mongodb-tech-icon.svg",
        caption: "MongoDB",
    }, {
        link: "/Images/Technology/mysql-tech-icon.svg",
        caption: "MySQL",
    }, {
        link: "/Images/Technology/nodejs-tech-icon.svg",
        caption: "Node",
    }, {
        link: "/Images/Technology/php-tech-icon.svg",
        caption: "PHP",
    }, {
        link: "/Images/Technology/react-tech-icon.svg",
        caption: "React",
    }, {
        link: "/Images/Technology/wordpress-tech-icon.svg",
        caption: "Wordpress",
    }
]
