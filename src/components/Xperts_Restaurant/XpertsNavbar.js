import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../../Navbar.css";

export default function XpertsNavbar() {
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar custom-navbar-shadow" 
           style={{ backgroundColor: 'rgb(36 131 24)', paddingTop: '84px', zIndex: '10' }}>
        <div className="container d-flex justify-content-center align-items-center">
          
          {/* Navbar Content in a Single Row */}
          <div className="d-flex align-items-center">
            
            {/* Logo with Small Right Margin */}
            <Link className="navbar-brand me-2" to="/orderxperts">
              <img style={{ height: '60px' }} src='/Images/Xperts Restaurant/smallOrderXpertLogo.png' alt='logo' />
            </Link>

            {/* Navbar Toggle Button (For Mobile View) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent2"
              aria-controls="navbarSupportedContent2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links - Centered */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent2" ref={navbarCollapseRef}>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <HashLink className="nav-link" to="/orderxperts/FoodOrdering" onClick={handleNavLinkClick}>Food Ordering</HashLink>
                </li>
                <li className="nav-item mx-2">
                  <HashLink className="nav-link" to="/orderxperts/RestaurantService" onClick={handleNavLinkClick}>Restaurant Services</HashLink>
                </li>
                <li className="nav-item mx-2">
                  <HashLink className="nav-link" to="/orderxperts/Pricing" onClick={handleNavLinkClick}>Pricing</HashLink>
                </li>
                <li className="nav-item mx-2">
                  <HashLink className="nav-link" to="https://www.orderxperts.com/admin/public/login" onClick={handleNavLinkClick}>Log in</HashLink>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
