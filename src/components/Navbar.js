import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css";

export default function Navbar() {
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  return (
    <div style={{backgroundColor:'red'}}>
      <nav className="navbar navbar-expand-lg navbar navbar-light bg-light custom-navbar-shadow">
        <div className="container" >
          <Link className="navbar-brand" to="/">
            <img style={{height:'60px'}} src='/Images/logo.png' alt='logo'/>
          </Link>
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
                  <li><HashLink className="dropdown-item" to="/#branding" onClick={handleNavLinkClick}>Branding & identity</HashLink></li>
                  <li><HashLink className="dropdown-item" to="/#WebDevelopment" onClick={handleNavLinkClick}>Web development</HashLink></li>
                  <li><HashLink className="dropdown-item" to="/#mobileDevelopment" onClick={handleNavLinkClick}>Mobile development</HashLink></li>
                  <li><HashLink className="dropdown-item" to="/#DigitalMarketing" onClick={handleNavLinkClick}>Digital marketing</HashLink></li>
                  <li><HashLink className="dropdown-item" to="/#consulting" onClick={handleNavLinkClick}>Consulting & IT staff </HashLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-3">
                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Project
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/Adidas" onClick={handleNavLinkClick}>Adidas</Link></li>
                  <li><Link className="dropdown-item" to="/cara" onClick={handleNavLinkClick}>Cara</Link></li>
                  <li><Link className="dropdown-item" to="/fairandhandsome" onClick={handleNavLinkClick}>Fair and handsome</Link></li>
                  <li><Link className="dropdown-item" to="/ukieri" onClick={handleNavLinkClick}>Ukieri</Link></li>
                  <li><Link className="dropdown-item" to="/volkswagen" onClick={handleNavLinkClick}>Volkswagen</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <HashLink className="nav-link" to="/#ourCompany" onClick={handleNavLinkClick}>Our Company</HashLink>
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
