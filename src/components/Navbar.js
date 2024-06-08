import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar-shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">SeaTECH</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
            <ul className="navbar-nav mx-4 mb-2 mb-lg-0">
              <li className="nav-item dropdown mx-3">
                <HashLink className="nav-link dropdown-toggle" to="/#whatWeDo" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  What we Do
                </HashLink>
                <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><HashLink className="dropdown-item" to="/#insurancetech" onClick={handleNavLinkClick}>SoftWare for Insurance Vertical</HashLink></li>
                  <li><HashLink className="dropdown-item" to="/#softwareconsulting" onClick={handleNavLinkClick}>Software Consulting</HashLink></li>
                  <li><HashLink className="dropdown-item" to="/#seatechanalytics" onClick={handleNavLinkClick}>Analytics</HashLink></li>
                  <li><HashLink className="dropdown-item" to="/#mobiletech" onClick={handleNavLinkClick}>Mobile Technology</HashLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-3">
                <Link className="nav-link dropdown-toggle" to="/cubus" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Our Product
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/cubus" onClick={handleNavLinkClick}>CUBUS</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <HashLink className="nav-link" to="/#clients-spotlight" onClick={handleNavLinkClick}>Clients Spotlight</HashLink>
              </li>
              <li className="nav-item mx-3">
                <HashLink className="nav-link" to="/#technology" onClick={handleNavLinkClick}>Technology</HashLink>
              </li>
              <li className="nav-item mx-3">
                <HashLink className="nav-link" to="/#ourStory" onClick={handleNavLinkClick}>Our Story</HashLink>
              </li>
              <li className="nav-item mx-3">
                <HashLink className="nav-link" to="/#contactUs" onClick={handleNavLinkClick}>Contact Us</HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
