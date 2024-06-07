import React,{useState} from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light custom-navbar-shadow">
        <div className="container">
          <a className="navbar-brand" href="/">Navbar</a>
          <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-4 mb-2 mb-lg-0">
              <li className="nav-item dropdown mx-3">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  What we Do
                </a>
                <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/#insurancetech">SoftWare for Insurance Vertical</a></li>
                  <li><a className="dropdown-item" href="/#softwareconsulting">Software Consulting</a></li>
                  <li><a className="dropdown-item" href="/#seatechanalytics">Analytics</a></li>
                  <li><a className="dropdown-item" href="/#mobiletech">Mobile Technology</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-3">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/cubus">CUBUS</a></li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/#clients-spotlight">Clients Spotlight</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/#technology">Technology</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/#outStory" >Our Story</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/#contactUs">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
