import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';


export default function Technology() {
    const [deviceSize, setDeviceSize] = useState(getDeviceSize(window.innerWidth));

    function getDeviceSize(width) {
        if (width < 700) {
            return 1;
        } else {
            return 2;
        }
    }

    useEffect(() => {
        const handleResize = debounce(() => {
            setDeviceSize(getDeviceSize(window.innerWidth));
        }, 300);

        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    return (
        <section id='technology' style={{ paddingTop: '58px' }}>
            <div style={{ backgroundColor: '#000', paddingTop: '20px', marginTop: '30px' }}>
                <div className='container' >
                    <h1 className='text-center more-weight' style={{ marginTop: '15px', marginBottom: '10px', color: 'white' }}>OUR TECHNOLOGY STACK</h1>
                    <div className='row'>
                        {data.map((item, index) => (
                            <div className={deviceSize === 1 ? 'col-6' : 'col-md-3'} style={{ height: '200px' }} key={index}>
                                <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                                    <image href={item.link} x="25%" y="25%" width="50%" height="50%" />
                                    <text x="50%" y="90%" fontFamily="roboto-slab" fontSize="20" fill='white' textAnchor="middle">
                                        {item.caption}
                                    </text>
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
